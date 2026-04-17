/**
 * db-setup.ts
 * Tự động chạy khi `npm run dev` hoặc `npm run db:setup`:
 * - Kiểm tra kết nối tới DB server
 * - Nếu schema chưa tồn tại: chạy `prisma db push` để tạo schema
 * - Nếu chưa có data: chạy seed
 * - Nếu đã đầy đủ: bỏ qua, không làm gì cả
 */

import { execSync } from 'child_process';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

async function canConnect(): Promise<boolean> {
  try {
    await prisma.$connect();
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (e) {
    console.error('❌ Cannot connect to database:', (e as Error).message);
    return false;
  }
}

async function isSchemaReady(): Promise<boolean> {
  try {
    // Thử query table chính. Nếu chưa tồn tại sẽ throw error.
    await prisma.$queryRaw`SELECT 1 FROM managers LIMIT 1`;
    return true;
  } catch {
    return false;
  }
}

async function hasAnyData(): Promise<boolean> {
  try {
    const count = await prisma.manager.count();
    return count > 0;
  } catch {
    return false;
  }
}

function runCommand(cmd: string, label: string) {
  console.log(`\n▶  ${label}`);
  execSync(cmd, {
    stdio: 'inherit',
    env: process.env,
    cwd: process.cwd(),
  });
}

async function main() {
  console.log('\n╔══════════════════════════════════════╗');
  console.log('║     🗄️  Database Setup Check          ║');
  console.log('╚══════════════════════════════════════╝\n');

  // Bước 1: Kiểm tra kết nối
  console.log('🔌 Step 1/3: Checking database connection...');
  const connected = await canConnect();
  if (!connected) {
    console.error('\n❌ Could not connect to the database server.');
    console.error('   Please check your DATABASE_URL in .env\n');
    process.exit(0); // Không exit(1) để Next.js vẫn có thể khởi động
  }
  console.log('✅ Connected to database server.\n');

  // Bước 2: Kiểm tra schema
  console.log('📐 Step 2/3: Checking schema...');
  const schemaReady = await isSchemaReady();

  if (!schemaReady) {
    console.log('⚠️  Schema not found. Creating tables with prisma db push...');
    runCommand(
      'npx prisma db push --accept-data-loss',
      'Running: prisma db push'
    );
    console.log('✅ Schema created successfully.\n');
  } else {
    console.log('✅ Schema already exists.\n');
  }

  // Bước 3: Kiểm tra dữ liệu seed
  console.log('🌱 Step 3/3: Checking seed data...');
  const hasData = await hasAnyData();

  if (!hasData) {
    console.log('⚠️  No seed data found. Seeding initial data...');
    runCommand(
      'npx ts-node --project scripts/tsconfig.json prisma/seed.ts',
      'Running: prisma seed'
    );
    console.log('✅ Seed data inserted successfully.\n');
  } else {
    console.log('✅ Seed data already present.\n');
  }

  console.log('🚀 Database is ready! Starting application...\n');
}

main()
  .catch((e) => {
    console.error('\n❌ DB setup encountered an error:', (e as Error).message);
    console.error('   Application will still attempt to start.\n');
    process.exit(0);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
