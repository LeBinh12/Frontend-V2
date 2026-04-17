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
    { key: 'nebula', image: '/images/tinified/portfolio-SaaS.png', cat: 'saas', techs: ["Next.js", "TypeScript", "Tailwind", ".NET 9", "PostgreSQL"] },
    { key: 'vortex', image: '/images/tinified/portfolio-awg.png', cat: 'webDev', techs: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO Optimization"] },
    { key: 'titan', image: '/images/tinified/portfolio-chat.png', cat: 'internalSystem', techs: ["Golang", "Reactjs", "Kafka", "Tailwind", "Framer Motion"] }
  ];

  for (const item of portfolioItems) {
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
          technologies: item.techs
        },
        create: {
          key: item.key,
          titleEn: en.title,
          titleVn: vn.title,
          descriptionEn: en.description,
          descriptionVn: vn.description,
          image: item.image,
          categoryKey: item.cat,
          technologies: item.techs
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
    { key: 'gas_station', val: '500K+ Transactions / Day', detailEn: 'Across 100 Gas Stations', detailVn: 'Trên 100 Trạm xăng' },
    { key: 'projects', val: '30+', detailEn: 'Across Multiple Industries', detailVn: 'Đa dạng lĩnh vực' },
    { key: 'reliability', val: '99.9%', detailEn: 'Stable & Secure Solutions', detailVn: 'Giải pháp ổn định & bảo mật' }
  ];

  for (const stat of bigStats) {
    const labelEn = enLocales.portfolio?.[stat.key]?.title || stat.key;
    const labelVn = vnLocales.portfolio?.[stat.key]?.title || stat.key;

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
