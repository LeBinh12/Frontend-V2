const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function migrate() {
  console.log('Starting migration...');
  
  // 1. Update PortfolioCategory keys
  const categories = await prisma.portfolioCategory.findMany();
  for (const cat of categories) {
    const slug = cat.name.toLowerCase().replace(/\s+/g, '-');
    await prisma.portfolioCategory.update({
      where: { id: cat.id },
      data: { key: slug }
    });
    console.log(`Updated category ${cat.name} with key ${slug}`);
  }

  // 2. Link items to categories
  const items = await prisma.portfolioItem.findMany();
  const updatedCategories = await prisma.portfolioCategory.findMany();

  for (const item of items) {
    if (item.categoryKey) {
      // Find matching category (case-insensitive)
      const match = updatedCategories.find(c => 
        c.name.toLowerCase() === item.categoryKey.toLowerCase() ||
        c.key.toLowerCase() === item.categoryKey.toLowerCase()
      );

      if (match) {
        await prisma.portfolioItem.update({
          where: { id: item.id },
          data: { categoryId: match.id }
        });
        console.log(`Linked item ${item.id} (${item.categoryKey}) to category ${match.name} (ID: ${match.id})`);
      } else {
        console.warn(`No match found for item ${item.id} with categoryKey ${item.categoryKey}`);
      }
    }
  }

  console.log('Migration completed.');
  await prisma.$disconnect();
}

migrate().catch(e => {
  console.error(e);
  process.exit(1);
});
