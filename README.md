# Lucid Technology - Landing Page & Admin Portal

A premium technology company landing page built with Next.js, featuring a 3D animated interface, multi-language support (i18n), and a dedicated administrative portal.

## 🚀 Technologies

- **Frontend/Backend**: [Next.js 16](https://nextjs.org/) (App Router)
- **Database / ORM**: [PostgreSQL](https://www.postgresql.org/) & [Prisma](https://www.prisma.io/)
- **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Internationalization**: [i18next](https://www.i18next.com/)

---

## 🛠️ Getting Started

### 1. Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/download/) (Local or Cloud instance)

### 2. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory (or copy from `.env.example`) and configure your PostgreSQL connection string:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/lucidtech?schema=public"
```

### 4. Database & Schema Initialization

To initialize the database, apply the schema, and automatically populate it with initial data (including admin accounts), run the following command once:

```bash
npm run db:init
```
*Note: This command performs `prisma db push` followed by `prisma db seed`. You do **not** need to run a separate seeding command after this.*

If you encounter an error regarding the "Prisma Client," run:
```bash
npx prisma generate
```

### 5. Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the landing page.

---

## 🔐 Administrative Portal

The dedicated admin interface is accessible at a custom route for security:

- **Route**: `/admin-lucidtech`
- **Default Credentials** (Seeded automatically):
  - **Username**: `admin`
  - **Password**: `admin123`

---

## 📁 Project Structure

- `src/app`: Next.js App Router (Pages and API Routes)
- `src/components`: Reusable UI components (including 3D scenes)
- `src/locales`: Multi-language JSON files (EN, VN, ZH)
- `src/lib`: Utility functions and Database client
- `prisma/`: Database schema and seed scripts
- `public/`: Static assets (Logos, Images, SVGs)

---

## 📖 Key Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run db:init`: One-click database setup and seeding.
- `npx prisma studio`: Visual interface to manage your database records.

---

© 2026 Lucid Technology. Built for the future of digital innovation.
