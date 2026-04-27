const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const categories = await prisma.portfolioCategory.findMany();
  console.log('Categories:', JSON.stringify(categories, null, 2));
  const items = await prisma.portfolioItem.findMany();
  console.log('Items:', JSON.stringify(items.map(i => ({ id: i.id, categoryKey: i.categoryKey, categoryId: i.categoryId })), null, 2));
  await prisma.$disconnect();
}

check();
