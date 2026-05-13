import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get('lang') || 'en'; // default to en
  const isEn = lang === 'en';

  try {
    // 1. Fetch Static Content
    const staticContent = await prisma.staticContent.findMany();
    const formattedStatic: Record<string, string> = {};
    staticContent.forEach((item) => {
      formattedStatic[item.key] = isEn ? item.contentEn : item.contentVn;
    });

    // 2. Fetch Services
    const services = await prisma.service.findMany({
      where: { showOnHome: true },
      orderBy: [
        { sortOrder: 'asc' },
        { id: 'asc' }
      ],
      take: 4
    });
    const formattedServices = services.map(s => ({
      id: s.id,
      key: s.key,
      icon: s.icon,
      title: isEn ? s.titleEn : s.titleVn,
      description: isEn ? s.descriptionEn : s.descriptionVn,
      showOnHome: Boolean(s.showOnHome),
      sortOrder: Number(s.sortOrder) || 0
    }));

    // 3. Fetch Portfolio
    const portfolio = await prisma.portfolioItem.findMany({
      include: {
        category: true
      },
      orderBy: [
        { sortOrder: 'asc' },
        { id: 'asc' }
      ]
    });
    const formattedPortfolio = portfolio.map(p => ({
      id: p.id,
      key: p.key,
      title: isEn ? p.titleEn : p.titleVn,
      description: isEn ? p.descriptionEn : p.descriptionVn,
      showOnHome: Boolean(p.showOnHome),
      sortOrder: Number(p.sortOrder) || 0,
      image: p.image,
      categoryKey: p.categoryKey,
      categoryName: isEn ? (p.category?.nameEn || p.categoryKey) : (p.category?.nameVn || p.categoryKey),
      technologies: p.technologies,
      contentEn: p.contentEn,
      contentVn: p.contentVn,
      duration: p.duration
    }));

    // 4. Fetch Team
    const team = await prisma.teamMember.findMany();
    const formattedTeam = team.map(m => ({
      name: m.name,
      role: isEn ? m.roleEn : m.roleVn,
      bio: isEn ? m.bioEn : m.bioVn,
      avatar: m.avatar,
      level: m.level,
      top: m.top,
      right: m.right,
      size: m.size,
      delay: m.delay
    }));

    // 5. Fetch Technologies
    const technologies = await prisma.technology.findMany({
      include: {
        cat: true
      },
      orderBy: { name: 'asc' }
    });
    const formattedTechnologies = technologies.map(t => ({
      name: t.name,
      category: isEn ? (t.cat?.nameEn || t.category) : (t.cat?.nameVn || t.category)
    }));

    // 6. Fetch Stats
    const allStats = await prisma.stat.findMany({
      orderBy: { id: 'asc' }
    });
    
    // Split into company stats (small) and big stats based on keys or just return all
    // In mockData: company.stats (founded, engineers, projects, clients)
    // bigStats: (Smart Gas Station, Projects Delivered, etc.)
    const formattedStats = allStats.map(s => ({
      key: s.key,
      label: isEn ? s.labelEn : s.labelVn,
      value: s.value,
      detail: isEn ? s.detailEn : s.detailVn
    }));

    // 7. Company Info
    const company = await prisma.companyInfo.findUnique({ where: { id: 1 } });
    const formattedCompany = company ? {
      name: company.name,
      tagline: company.tagline,
      email: company.email,
      phone: company.phone,
      address: isEn ? company.addressEn : company.addressVn,
      images: {
        office: company.officeImage,
        team: company.teamImage
      },
      // Extract small stats for company if they have specific keys
      stats: formattedStats.filter(s => ['founded', 'engineers', 'projects', 'clients'].includes(s.key))
    } : null;

    return NextResponse.json({
      locales: formattedStatic,
      services: formattedServices,
      portfolio: formattedPortfolio,
      team: formattedTeam,
      company: formattedCompany,
      technologies: formattedTechnologies,
      stats: formattedStats
    });
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
