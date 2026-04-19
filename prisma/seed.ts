import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

// Helper to load JSON files
const loadJSON = (filePath: string) => JSON.parse(fs.readFileSync(path.join(process.cwd(), filePath), 'utf8'));

// Helper to flatten nested locale objects
const flattenLocales = (obj: any, prefix = '') => {
  let items: any[] = [];
  for (const key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      items = [...items, ...flattenLocales(obj[key], `${prefix}${key}.`)];
    } else if (typeof obj[key] === 'string') {
      items.push({
        key: `${prefix}${key}`,
        content: obj[key]
      });
    }
  }
  return items;
};

async function main() {
  console.log('🌱 Starting refined database seed...');

  try {
    console.log('📜 Executing raw SQL scripts from scratch folder...');
    const sqlFilePath = path.join(process.cwd(), 'scratch/create_table.sql');
    if (fs.existsSync(sqlFilePath)) {
      const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');
      await prisma.$executeRawUnsafe(sqlContent);
      console.log('✅ Executed scratch/create_table.sql successfully.');
    }
  } catch (error) {
    console.error('❌ Error executing raw SQL:', error);
  }

  // 1. Load Data Sources
  const enLocales = loadJSON('src/locales/en.json');
  const vnLocales = loadJSON('src/locales/vn.json');
  const teamCoords = loadJSON('src/data/teamMembers.json');
  
  // For mockData.ts, we'll extract key metrics manually to avoid complex TS import issues in this environment
  // or we can try to require it if we use ts-node
  const mockDataFile = fs.readFileSync(path.join(process.cwd(), 'src/data/mockData.ts'), 'utf8');
  
  console.log('📦 Seeding StaticContent (merged locales)...');
  const enItems = flattenLocales(enLocales);
  const vnItems = flattenLocales(vnLocales);

  for (const enItem of enItems) {
    const vnItem = vnItems.find(v => v.key === enItem.key);
    await prisma.staticContent.upsert({
      where: { key: enItem.key },
      update: {
        contentEn: enItem.content,
        contentVn: vnItem?.content || enItem.content
      },
      create: {
        key: enItem.key,
        contentEn: enItem.content,
        contentVn: vnItem?.content || enItem.content
      }
    });
  }

  console.log('🛠️ Seeding Services (merged mockData + locales)...');
  const serviceKeys = ['blockchain', 'ai', 'cloud', 'design'];
  const serviceIcons: Record<string, string> = {
    blockchain: 'Code',
    ai: 'Cloud',
    cloud: 'Design',
    design: 'Code'
  };

  for (const key of serviceKeys) {
    const en = enLocales.services[key];
    const vn = vnLocales.services[key];
    if (en && vn) {
      await prisma.service.upsert({
        where: { key },
        update: {
          icon: serviceIcons[key],
          titleEn: en.title,
          titleVn: vn.title,
          descriptionEn: en.description,
          descriptionVn: vn.description
        },
        create: {
          key,
          icon: serviceIcons[key],
          titleEn: en.title,
          titleVn: vn.title,
          descriptionEn: en.description,
          descriptionVn: vn.description
        }
      });
    }
  }

  console.log('🖼️ Seeding Portfolio (merged mockData + locales)...');
  const portfolioItems = [
    { 
      key: 'nebula', 
      image: '/images/tinified/portfolio-SaaS.png', 
      cat: 'saas', 
      techs: ["Next.js", "TypeScript", "Tailwind", ".NET 9", "PostgreSQL"],
      duration: "6 Months",
      contentEn: "PetroPoint TMS was developed to digitalize gas station management. The project involved integrating real-time POS data with a central cloud dashboard. We utilized Next.js and .NET 9 to ensure high performance and scalability. The database handles over 500k transactions daily, providing seamless inventory tracking and automated reporting.",
      contentVn: "PetroPoint TMS được phát triển để số hóa việc quản lý trạm xăng. Dự án bao gồm việc tích hợp dữ liệu bán hàng trực tiếp với bảng điều khiển trung tâm trên đám mây. Chúng tôi sử dụng Next.js và .NET 9 để đảm bảo hiệu suất và khả năng mở rộng. Cơ sở dữ liệu xử lý hơn 500 ngàn giao dịch mỗi ngày, giúp theo dõi hàng tồn kho liên tục và báo cáo tự động."
    },
    { 
      key: 'vortex', 
      image: '/images/tinified/portfolio-awg.png', 
      cat: 'webDev', 
      techs: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO Optimization"],
      duration: "3 Months",
      contentEn: "The BuyAWG project required a complete overhaul of their existing e-commerce platform. We migrated their legacy system to a modern WordPress-based architecture with heavily optimized PHP and CSS3. The focus was on SEO optimization and performance, resulting in a 40% increase in user engagement and sub-second load times.",
      contentVn: "Dự án BuyAWG yêu cầu đại tu toàn bộ nền tảng thương mại điện tử hiện tại của họ. Chúng tôi đã thiết kế và nâng cấp hệ thống sang kiến trúc dựa trên WordPress hiện đại với PHP và CSS3 được tối ưu hóa. Trọng tâm là tối ưu hóa thiết kế và hiệu suất trang web, mang lại trải nghiệm người dùng tăng cường đáng kể."
    },
    { 
      key: 'titan', 
      image: '/images/tinified/portfolio-chat.png', 
      cat: 'internalSystem', 
      techs: ["Golang", "Reactjs", "Kafka", "Tailwind", "Framer Motion"],
      duration: "4 Months",
      contentEn: "This secure internal messaging system was built to facilitate multimedia communication within enterprise environments. Utilizing Golang for the backend and Reactjs for the frontend, the app supports video calls and real-time task management. Kafka ensures high-throughput message delivery, while Framer Motion provides smooth UI transitions.",
      contentVn: "Hệ thống nhắn tin nội bộ bảo mật này được xây dựng để hỗ trợ giao tiếp đa phương tiện trong môi trường doanh nghiệp. Sử dụng Golang cho backend và Reactjs cho frontend, ứng dụng hỗ trợ gọi video và điều phối tác vụ thời gian thực. Kafka đảm bảo truyền tin trôi chảy, với giao diện mượt mà từ Framer Motion."
    }
  ];

  for (let i = 0; i < portfolioItems.length; i++) {
    const item = portfolioItems[i];
    const en = enLocales.portfolio[item.key];
    const vn = vnLocales.portfolio[item.key];
    if (en && vn) {
      await prisma.portfolioItem.upsert({
        where: { key: item.key },
        update: {
          titleEn: en.title,
          titleVn: vn.title,
          descriptionEn: en.description,
          descriptionVn: vn.description,
          image: item.image,
          categoryKey: item.cat,
          technologies: item.techs,
          contentEn: item.contentEn,
          contentVn: item.contentVn,
          duration: item.duration,
          showOnHome: true,
          sortOrder: i + 1
        },
        create: {
          key: item.key,
          titleEn: en.title,
          titleVn: vn.title,
          descriptionEn: en.description,
          descriptionVn: vn.description,
          image: item.image,
          categoryKey: item.cat,
          technologies: item.techs,
          contentEn: item.contentEn,
          contentVn: item.contentVn,
          duration: item.duration,
          showOnHome: true,
          sortOrder: i + 1
        }
      });
    }
  }

  console.log('🏗️ Seeding Technology Categories...');
  const techCategories = [
    { name: 'Frontend', sortOrder: 1 },
    { name: 'Backend', sortOrder: 2 },
    { name: 'Database', sortOrder: 3 },
    { name: 'Web3', sortOrder: 4 },
    { name: 'AI & Machine Learning', sortOrder: 5 },
    { name: 'Cloud & DevOps', sortOrder: 6 },
    { name: 'Mobile Development', sortOrder: 7 },
  ];

  for (const cat of techCategories) {
    await prisma.technologyCategory.upsert({
      where: { name: cat.name },
      update: { sortOrder: cat.sortOrder },
      create: { name: cat.name, sortOrder: cat.sortOrder }
    });
  }

  console.log('💻 Seeding Technologies...');
  await prisma.technology.deleteMany({}); // Xoá trước để tránh trùng lặp do không có unique key

  const technologiesToSeed = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "ASP.NET MVC", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "React Native", category: "Mobile Development" },
    { name: ".NET MAUI", category: "Mobile Development" },
    { name: "ASP.NET Web API", category: "Backend" },
    { name: "Golang", category: "Backend" },
    { name: "PyTorch", category: "AI & Machine Learning" },
    { name: "TensorFlow", category: "AI & Machine Learning" },
    { name: "Kubernetes", category: "Cloud & DevOps" },
    { name: "Docker", category: "Cloud & DevOps" },
    { name: "Terraform", category: "Cloud & DevOps" },
    { name: "Azure", category: "Cloud & DevOps" }
  ];

  await prisma.technology.createMany({
    data: technologiesToSeed
  });

  console.log('👥 Seeding Team Members (merged coords + personas + roles)...');
  // Clear existing to avoid duplicates if re-running
  await prisma.teamMember.deleteMany({});
  
  // Leadership personas from Locales (source of truth for role/bio)
  const leaders = ['leo', 'sarah', 'marcus'];
  for (const key of leaders) {
    const personaEn = enLocales.team[key];
    const personaVn = vnLocales.team[key];
    await prisma.teamMember.create({
      data: {
        name: personaEn.name,
        roleEn: personaEn.role,
        roleVn: personaVn.role,
        bioEn: personaEn.bio,
        bioVn: personaVn.bio,
        avatar: '/images/avatar.jpg',
        level: 1, // High level for leadership
      }
    });
  }

  // General team from coordinates
  for (const member of teamCoords) {
    const enRole = enLocales.team?.roles?.[member.role] || member.role;
    const vnRole = vnLocales.team?.roles?.[member.role] || member.role;
    
    await prisma.teamMember.create({
      data: {
        name: member.name,
        roleEn: enRole,
        roleVn: vnRole,
        level: member.level,
        top: member.top,
        right: member.right,
        size: member.size,
        delay: member.delay,
        avatar: '/images/avatar.jpg'
      }
    });
  }

  console.log('📊 Seeding Stats (merged mockData bigStats + locales)...');
  const bigStats = [
    { key: 'projects', val: '30+', labelEn: 'projects', labelVn: 'projects', detailEn: 'Across Multiple Industries', detailVn: 'Đa dạng các lĩnh vực' },
    { key: 'founded', val: '2023', labelEn: 'founded', labelVn: 'founded', detailEn: 'Founded', detailVn: 'Đã thành lập' },
    { key: 'engineers', val: '10+', labelEn: 'engineers', labelVn: 'engineers', detailEn: 'engineers', detailVn: 'Kỹ sư' },
    { key: 'clients', val: '10+', labelEn: 'clients', labelVn: 'clients', detailEn: 'Happy Clients', detailVn: 'Khách hàng hài lòng' }
  ];

  for (const stat of bigStats) {
    const labelEn = stat.labelEn || enLocales.portfolio?.[stat.key]?.title || stat.key;
    const labelVn = stat.labelVn || vnLocales.portfolio?.[stat.key]?.title || stat.key;

    await prisma.stat.upsert({
      where: { key: stat.key },
      update: {
        labelEn, labelVn,
        value: stat.val,
        detailEn: stat.detailEn,
        detailVn: stat.detailVn
      },
      create: {
        key: stat.key,
        labelEn, labelVn,
        value: stat.val,
        detailEn: stat.detailEn,
        detailVn: stat.detailVn
      }
    });
  }

  console.log('🏢 Seeding Company Info (merged mockData + locales)...');
  await prisma.companyInfo.upsert({
    where: { id: 1 },
    update: {
      name: 'Lucid Technology',
      tagline: '#lucidtechvn #lucidtechnologyvn, #lctvn',
      email: 'contact@lucidtech.vn',
      phone: '(+84) 328 0750 14',
      addressEn: enLocales.contact?.info?.address,
      addressVn: vnLocales.contact?.info?.address,
      officeImage: '/images/office_exterior.jpg',
      teamImage: '/images/team.jpeg'
    },
    create: {
      id: 1,
      name: 'Lucid Technology',
      tagline: '#lucidtechvn #lucidtechnologyvn, #lctvn',
      email: 'contact@lucidtech.vn',
      phone: '(+84) 328 0750 14',
      addressEn: enLocales.contact?.info?.address,
      addressVn: vnLocales.contact?.info?.address,
      officeImage: '/images/office_exterior.jpg',
      teamImage: '/images/team.jpeg'
    }
  });

  console.log('🛡️ Seeding Default Managers...');
  const bcrypt = require('bcryptjs');
  const hashedAdminPassword = await bcrypt.hash('admin123', 10);
  
  await prisma.manager.upsert({
    where: { username: 'admin' },
    update: {
      password: hashedAdminPassword,
      fullName: 'System Admin',
      role: 'ADMIN'
    },
    create: {
      username: 'admin',
      password: hashedAdminPassword,
      fullName: 'System Admin',
      role: 'ADMIN'
    }
  });

  const hashedStaffPassword = await bcrypt.hash('staff123', 10);
  await prisma.manager.upsert({
    where: { username: 'staff01' },
    update: {
      password: hashedStaffPassword,
      fullName: 'Support Staff 01',
      role: 'STAFF'
    },
    create: {
      username: 'staff01',
      password: hashedStaffPassword,
      fullName: 'Support Staff 01',
      role: 'STAFF'
    }
  });

  console.log('✅ Refined seed completed successfully.');
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
