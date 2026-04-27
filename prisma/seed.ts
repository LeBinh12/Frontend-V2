import { PrismaClient } from '../src/generated/prisma-client';
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
  await prisma.service.deleteMany({}); // Clear existing to avoid stale keys like 'blockchain', 'ai', etc.
  const serviceKeys = ['smart_gas_station', 'digital_transformation', 'software_development', 'it_staffing'];
  const serviceIcons: Record<string, string> = {
    smart_gas_station:      'Fuel',
    digital_transformation: 'TrendingUp',
    software_development:   'Code',
    it_staffing:            'Users'
  };

  for (let i = 0; i < serviceKeys.length; i++) {
    const key = serviceKeys[i];
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
          descriptionVn: vn.description,
          showOnHome: true,
          sortOrder: i + 1
        },
        create: {
          key,
          icon: serviceIcons[key],
          titleEn: en.title,
          titleVn: vn.title,
          descriptionEn: en.description,
          descriptionVn: vn.description,
          showOnHome: true,
          sortOrder: i + 1
        }
      });
    }
  }

  console.log('🏗️ Seeding Portfolio Categories...');
  const portfolioCategories = [
    { nameEn: 'SaaS', nameVn: 'Phần mềm dịch vụ (SaaS)', key: 'saas', sortOrder: 0 },
    { nameEn: 'Web Development', nameVn: 'Phát triển Website', key: 'webdev', sortOrder: 1 },
    { nameEn: 'Internal System', nameVn: 'Hệ thống nội bộ', key: 'internalsystem', sortOrder: 2 },
    { nameEn: 'Virtual / Simulation', nameVn: 'Ảo hóa / Mô phỏng', key: 'virtual', sortOrder: 3 },
    { nameEn: 'Mobile App', nameVn: 'Ứng dụng Di động', key: 'mobile', sortOrder: 4 },
    { nameEn: 'AI & Machine Learning', nameVn: 'AI & Học máy', key: 'ai', sortOrder: 5 },
    { nameEn: 'E-Commerce', nameVn: 'Thương mại Điện tử', key: 'ecommerce', sortOrder: 6 },
  ];

  const portfolioCategoryMap: Record<string, number> = {};
  for (const cat of portfolioCategories) {
    const created = await prisma.portfolioCategory.upsert({
      where: { key: cat.key },
      update: { nameVn: cat.nameVn, key: cat.key, sortOrder: cat.sortOrder },
      create: { nameEn: cat.nameEn, nameVn: cat.nameVn, key: cat.key, sortOrder: cat.sortOrder }
    });
    portfolioCategoryMap[cat.key] = created.id;
  }

  console.log('🖼️ Seeding Portfolio (merged mockData + locales)...');
  const portfolioItems = [
    { 
      key: 'nebula', 
      image: '/images/tinified/portfolio-SaaS.png', 
      catKey: 'saas', 
      techs: ["Next.js", "TypeScript", "Tailwind", ".NET 9", "PostgreSQL"],
      duration: "6 Months",
      contentEn: "PetroPoint TMS was developed to digitalize gas station management. The project involved integrating real-time POS data with a central cloud dashboard. We utilized Next.js and .NET 9 to ensure high performance and scalability. The database handles over 500k transactions daily, providing seamless inventory tracking and automated reporting.",
      contentVn: "PetroPoint TMS được phát triển để số hóa việc quản lý trạm xăng. Dự án bao gồm việc tích hợp dữ liệu bán hàng trực tiếp với bảng điều khiển trung tâm trên đám mây. Chúng tôi sử dụng Next.js và .NET 9 để đảm bảo hiệu suất và khả năng mở rộng. Cơ sở dữ liệu xử lý hơn 500 ngàn giao dịch mỗi ngày, giúp theo dõi hàng tồn kho liên tục và báo cáo tự động."
    },
    { 
      key: 'vortex', 
      image: '/images/tinified/portfolio-awg.png', 
      catKey: 'webdev', 
      techs: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO Optimization"],
      duration: "3 Months",
      contentEn: "The BuyAWG project required a complete overhaul of their existing e-commerce platform. We migrated their legacy system to a modern WordPress-based architecture with heavily optimized PHP and CSS3. The focus was on SEO optimization and performance, resulting in a 40% increase in user engagement and sub-second load times.",
      contentVn: "Dự án BuyAWG yêu cầu đại tu toàn bộ nền tảng thương mại điện tử hiện tại của họ. Chúng tôi đã thiết kế và nâng cấp hệ thống sang kiến trúc dựa trên WordPress hiện đại với PHP và CSS3 được tối ưu hóa. Trọng tâm là tối ưu hóa thiết kế và hiệu suất trang web, mang lại trải nghiệm người dùng tăng cường đáng kể."
    },
    { 
      key: 'titan', 
      image: '/images/tinified/portfolio-chat.png', 
      catKey: 'internalsystem', 
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
          categoryId: portfolioCategoryMap[item.catKey],
          categoryKey: item.catKey,
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
          categoryId: portfolioCategoryMap[item.catKey],
          categoryKey: item.catKey,
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
    { nameEn: 'Frontend', nameVn: 'Frontend', key: 'frontend', sortOrder: 1 },
    { nameEn: 'Backend', nameVn: 'Backend', key: 'backend', sortOrder: 2 },
    { nameEn: 'Database', nameVn: 'Cơ sở dữ liệu', key: 'database', sortOrder: 3 },
    { nameEn: 'Web3', nameVn: 'Web3', key: 'web3', sortOrder: 4 },
    { nameEn: 'AI & Machine Learning', nameVn: 'AI & Học máy', key: 'ai-machine-learning', sortOrder: 5 },
    { nameEn: 'Cloud & DevOps', nameVn: 'Cloud & DevOps', key: 'cloud-devops', sortOrder: 6 },
    { nameEn: 'Mobile Development', nameVn: 'Phát triển di động', key: 'mobile-development', sortOrder: 7 },
  ];

  const techCategoryMap: Record<string, number> = {};
  for (const cat of techCategories) {
    const created = await prisma.technologyCategory.upsert({
      where: { key: cat.key },
      update: { nameVn: cat.nameVn, key: cat.key, sortOrder: cat.sortOrder },
      create: { nameEn: cat.nameEn, nameVn: cat.nameVn, key: cat.key, sortOrder: cat.sortOrder }
    });
    techCategoryMap[cat.nameEn] = created.id;
  }

  console.log('💻 Seeding Technologies...');
  await prisma.technology.deleteMany({}); // Xoá trước để tránh trùng lặp do không có unique key

  const technologiesToSeed = [
    { name: "React", category: "Frontend", categoryId: techCategoryMap["Frontend"] },
    { name: "Next.js", category: "Frontend", categoryId: techCategoryMap["Frontend"] },
    { name: "ASP.NET MVC", category: "Frontend", categoryId: techCategoryMap["Frontend"] },
    { name: "Angular", category: "Frontend", categoryId: techCategoryMap["Frontend"] },
    { name: "React Native", category: "Mobile Development", categoryId: techCategoryMap["Mobile Development"] },
    { name: ".NET MAUI", category: "Mobile Development", categoryId: techCategoryMap["Mobile Development"] },
    { name: "ASP.NET Web API", category: "Backend", categoryId: techCategoryMap["Backend"] },
    { name: "Golang", category: "Backend", categoryId: techCategoryMap["Backend"] },
    { name: "PyTorch", category: "AI & Machine Learning", categoryId: techCategoryMap["AI & Machine Learning"] },
    { name: "TensorFlow", category: "AI & Machine Learning", categoryId: techCategoryMap["AI & Machine Learning"] },
    { name: "Kubernetes", category: "Cloud & DevOps", categoryId: techCategoryMap["Cloud & DevOps"] },
    { name: "Docker", category: "Cloud & DevOps", categoryId: techCategoryMap["Cloud & DevOps"] },
    { name: "Terraform", category: "Cloud & DevOps", categoryId: techCategoryMap["Cloud & DevOps"] },
    { name: "Azure", category: "Cloud & DevOps", categoryId: techCategoryMap["Cloud & DevOps"] }
  ];

  for (const tech of technologiesToSeed) {
    await prisma.technology.create({
      data: tech
    });
  }

  console.log('👥 Seeding Team Members (merged coords + personas + roles)...');
  // Clear existing to avoid duplicates if re-running
  await prisma.teamMember.deleteMany({});
  
  // Leadership personas from Locales (source of truth for role/bio)
  const leaders = ['sarah', 'marcus'];
  for (const key of leaders) {
    const personaEn = enLocales.team?.[key];
    const personaVn = vnLocales.team?.[key];
    if (personaEn && personaVn) {
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

  await seedRBAC(prisma);

  console.log('✅ Refined seed completed successfully.');
}

async function seedRBAC(prisma: PrismaClient) {
  console.log('🔐 Seeding RBAC System...');

  // 1. Seed Permissions
  const permissions = [
    { code: 'READ', nameEn: 'View', nameVn: 'Xem', descriptionEn: 'Can view lists and details', descriptionVn: 'Có quyền xem danh sách và chi tiết' },
    { code: 'CREATE', nameEn: 'Create', nameVn: 'Thêm mới', descriptionEn: 'Can create new records', descriptionVn: 'Có quyền tạo mới bản ghi' },
    { code: 'UPDATE', nameEn: 'Update', nameVn: 'Cập nhật', descriptionEn: 'Can edit existing records', descriptionVn: 'Có quyền chỉnh sửa bản ghi' },
    { code: 'DELETE', nameEn: 'Delete', nameVn: 'Xóa', descriptionEn: 'Can delete records', descriptionVn: 'Có quyền xóa bản ghi' },
    { code: 'RESET_PASSWORD', nameEn: 'Reset Password', nameVn: 'Đặt lại mật khẩu', descriptionEn: 'Can reset account passwords', descriptionVn: 'Có quyền reset mật khẩu tài khoản' },
    { code: 'FULL_ACCESS', nameEn: 'Full Access', nameVn: 'Toàn quyền', descriptionEn: 'Has all permissions', descriptionVn: 'Có tất cả các quyền' },
  ];

  const permissionMap: Record<string, string> = {};
  for (const p of permissions) {
    const created = await prisma.permission.upsert({
      where: { code: p.code },
      update: { nameEn: p.nameEn, nameVn: p.nameVn, descriptionEn: p.descriptionEn, descriptionVn: p.descriptionVn },
      create: p,
    });
    permissionMap[p.code] = created.id;
  }

  // 2. Seed Modules
  const modules = [
    { code: 'DASHBOARD', nameEn: 'Dashboard', nameVn: 'Bảng điều khiển', descriptionEn: 'Overview page', descriptionVn: 'Trang tổng quan' },
    { code: 'ACCOUNTS', nameEn: 'Accounts', nameVn: 'Tài khoản', descriptionEn: 'Staff and RBAC management', descriptionVn: 'Quản lý nhân viên và phân quyền' },
    { code: 'COMPANY', nameEn: 'Company', nameVn: 'Công ty', descriptionEn: 'Company information', descriptionVn: 'Thông tin công ty' },
    { code: 'CONTACTS', nameEn: 'Contacts', nameVn: 'Liên hệ', descriptionEn: 'Customer contact messages and status management', descriptionVn: 'Tin nhắn liên hệ và quản lý trạng thái' },
    { code: 'CONTENT', nameEn: 'Content', nameVn: 'Nội dung', descriptionEn: 'Static content and localization', descriptionVn: 'Quản lý nội dung tĩnh và đa ngôn ngữ' },
    { code: 'PORTFOLIO', nameEn: 'Portfolio', nameVn: 'Dự án', descriptionEn: 'Project portfolio management', descriptionVn: 'Quản lý các dự án portfolio' },
    { code: 'PORTFOLIO_CATEGORIES', nameEn: 'Portfolio Categories', nameVn: 'Danh mục dự án', descriptionEn: 'Manage categories for portfolio projects', descriptionVn: 'Quản lý danh mục cho các dự án portfolio' },
    { code: 'SERVICES', nameEn: 'Services', nameVn: 'Dịch vụ', descriptionEn: 'Services offered management', descriptionVn: 'Quản lý các dịch vụ cung cấp' },
    { code: 'STATS', nameEn: 'Stats', nameVn: 'Thống kê', descriptionEn: 'Company statistics', descriptionVn: 'Số liệu thống kê công ty' },
    { code: 'TEAM', nameEn: 'Team', nameVn: 'Đội ngũ', descriptionEn: 'Team members management', descriptionVn: 'Quản lý thành viên đội ngũ' },
    { code: 'TECHNOLOGIES', nameEn: 'Technologies', nameVn: 'Công nghệ', descriptionEn: 'Technology stack management', descriptionVn: 'Quản lý danh mục công nghệ' },
    { code: 'TECH_CATEGORIES', nameEn: 'Tech Categories', nameVn: 'Danh mục công nghệ', descriptionEn: 'Manage categories for technologies', descriptionVn: 'Quản lý danh mục cho các công nghệ' },
    { code: 'ROLES', nameEn: 'Roles', nameVn: 'Vai trò', descriptionEn: 'Manage user roles and hierarchies', descriptionVn: 'Quản lý vai trò và cấp bậc' },
    { code: 'MODULES', nameEn: 'Modules', nameVn: 'Nhóm quyền', descriptionEn: 'Manage system modules', descriptionVn: 'Quản lý các nhóm quyền (Module) hệ thống' },
    { code: 'PERMISSION_LIST', nameEn: 'Permissions List', nameVn: 'Danh sách quyền', descriptionEn: 'Manage available actions/permissions', descriptionVn: 'Quản lý danh sách các hành động/quyền hạn' },
    { code: 'PERMISSION_MATRIX', nameEn: 'Permission Matrix', nameVn: 'Ma trận phân quyền', descriptionEn: 'Manage role-based access control matrix', descriptionVn: 'Quản lý ma trận phân quyền hệ thống' },
  ];

  const moduleMap: Record<string, string> = {};
  for (const m of modules) {
    const created = await prisma.module.upsert({
      where: { code: m.code },
      update: { nameEn: m.nameEn, nameVn: m.nameVn, descriptionEn: m.descriptionEn, descriptionVn: m.descriptionVn },
      create: m,
    });
    moduleMap[m.code] = created.id;
  }

  // 3. Seed Roles
  const roles = [
    { name: 'SUPER_ADMIN', descriptionEn: 'Full system access', descriptionVn: 'Toàn quyền hệ thống' },
    { name: 'ADMIN', descriptionEn: 'System administrator', descriptionVn: 'Quản trị viên' },
    { name: 'CONTENT_MANAGER', descriptionEn: 'Content management only', descriptionVn: 'Quản lý nội dung' },
    { name: 'STAFF', descriptionEn: 'Read-only staff access', descriptionVn: 'Nhân viên xem dữ liệu' },
  ];

  const roleMap: Record<string, string> = {};
  for (const r of roles) {
    const created = await prisma.role.upsert({
      where: { name: r.name },
      update: { descriptionEn: r.descriptionEn, descriptionVn: r.descriptionVn },
      create: r,
    });
    roleMap[r.name] = created.id;
  }

  // 4. Assign Permissions to Roles (ModulePermission)
  
  // SUPER_ADMIN: FULL_ACCESS on all modules
  for (const m of modules) {
    await prisma.modulePermission.upsert({
      where: {
        roleId_moduleId_permissionId: {
          roleId: roleMap['SUPER_ADMIN'],
          moduleId: moduleMap[m.code],
          permissionId: permissionMap['FULL_ACCESS']
        }
      },
      update: {},
      create: {
        roleId: roleMap['SUPER_ADMIN'],
        moduleId: moduleMap[m.code],
        permissionId: permissionMap['FULL_ACCESS']
      }
    });
  }

  // ADMIN: READ, CREATE, UPDATE, DELETE on most modules (except ACCOUNTS)
  const adminModules = modules.filter(m => m.code !== 'ACCOUNTS');
  const adminPerms = ['READ', 'CREATE', 'UPDATE', 'DELETE'];
  for (const m of adminModules) {
    for (const pCode of adminPerms) {
      await prisma.modulePermission.upsert({
        where: {
          roleId_moduleId_permissionId: {
            roleId: roleMap['ADMIN'],
            moduleId: moduleMap[m.code],
            permissionId: permissionMap[pCode]
          }
        },
        update: {},
        create: {
          roleId: roleMap['ADMIN'],
          moduleId: moduleMap[m.code],
          permissionId: permissionMap[pCode]
        }
      });
    }
  }

  // CONTENT_MANAGER: READ, CREATE, UPDATE on content related modules
  const contentModules = ['CONTENT', 'PORTFOLIO', 'PORTFOLIO_CATEGORIES', 'SERVICES', 'STATS', 'TEAM', 'TECHNOLOGIES', 'TECH_CATEGORIES'];
  for (const mCode of contentModules) {
    for (const pCode of ['READ', 'CREATE', 'UPDATE']) {
      if (!moduleMap[mCode] || !permissionMap[pCode]) continue;
      await prisma.modulePermission.upsert({
        where: {
          roleId_moduleId_permissionId: {
            roleId: roleMap['CONTENT_MANAGER'],
            moduleId: moduleMap[mCode],
            permissionId: permissionMap[pCode]
          }
        },
        update: {},
        create: {
          roleId: roleMap['CONTENT_MANAGER'],
          moduleId: moduleMap[mCode],
          permissionId: permissionMap[pCode]
        }
      });
    }
  }

  // STAFF: READ on all modules
  for (const m of modules) {
    await prisma.modulePermission.upsert({
      where: {
        roleId_moduleId_permissionId: {
          roleId: roleMap['STAFF'],
          moduleId: moduleMap[m.code],
          permissionId: permissionMap['READ']
        }
      },
      update: {},
      create: {
        roleId: roleMap['STAFF'],
        moduleId: moduleMap[m.code],
        permissionId: permissionMap['READ']
      }
    });
  }

  // 5. Link default Managers to Roles
  const adminManager = await prisma.manager.findUnique({ where: { username: 'admin' } });
  if (adminManager) {
    await prisma.managerOnRole.upsert({
      where: {
        managerId_roleId: {
          managerId: adminManager.id,
          roleId: roleMap['SUPER_ADMIN']
        }
      },
      update: {},
      create: {
        managerId: adminManager.id,
        roleId: roleMap['SUPER_ADMIN']
      }
    });
  }

  const staffManager = await prisma.manager.findUnique({ where: { username: 'staff01' } });
  if (staffManager) {
    await prisma.managerOnRole.upsert({
      where: {
        managerId_roleId: {
          managerId: staffManager.id,
          roleId: roleMap['STAFF']
        }
      },
      update: {},
      create: {
        managerId: staffManager.id,
        roleId: roleMap['STAFF']
      }
    });
  }

  console.log('✅ RBAC System seeded.');
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
