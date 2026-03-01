export const mockData = {
  company: {
    name: "Lucid Technology",
    tagline: "#lucidtechvn #lucidtechnologyvn, #lctvn",
    description: "We build the next generation of decentralized applications and high-performance infrastructure for the web3 era.",
    email: "contact@lucidtech.vn",
    phone: "(+84) 792 502 502",
    address: "61 Tan Trong Hamlet, My An Hung Commune, Dong Thap Province, 810000, Vietnam",
    images: {
      office: "/images/office_exterior.jpg",
      team: "/images/team.jpeg"
    },
    stats: [
      { labelKey: "founded", label: "Founded", value: "2023" },
      { labelKey: "engineers", label: "Engineers", value: "10+" },
      { labelKey: "projects", label: "Projects Delivered", value: "10+" },
      { labelKey: "clients", label: "Happy Clients", value: "10+" }
    ]
  },
  services: [
    {
      id: 1,
      title: "Smart Gas Station Solution",
      description: "A comprehensive gas station management software system built on over 30 years of real-world industry experience. It integrates sales management, inventory control, accounts receivable, employee management, and real-time reporting. User-friendly interface with multi-branch synchronization and automatic cloud data backup",
      icon: "Code"
    },
    {
      id: 2,
      title: "Custom Software Development",
      description: "Design and development of websites, mobile applications, and enterprise management software tailored to specific business needs. Our experienced development team understands business processes and provides optimal solutions using modern technologies, with long-term maintenance and operational support",
      icon: "Mind"
    },
    {
      id: 3,
      title: "Digital Transformation Consulting",
      description: "Providing end-to-end digital transformation consulting services for small and medium-sized enterprises. We analyze existing processes, propose suitable technology solutions, provide staff training, and support implementation to help businesses optimize costs, improve efficiency, and enhance competitive advantages.",
      icon: "Cloud"
    },
    {
      id: 4,
      title: "IT Recruitment & Staffing Services",
      description: "Supporting businesses in sourcing and recruiting high-quality IT talent. We provide IT staffing services for both project-based and long-term engagements, with experienced professionals in software development, system administration, and information security",
      icon: "Design"
    }
  ],
  technologies: [
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
  ],
  bigStats: [
    { label: "Smart Gas Station Solution", value: "500K+ Transactions / Day", detail: "Across 100 Gas Stations" },
    { label: "Projects Delivered", value: "30+", detail: "Across Multiple Industries" },
    { label: "Active Clients", value: "20+", detail: "Long-Term Partnerships" },
    { label: "Engineering Experience", value: "10+ Years", detail: "Industry Expertise" },
    { label: "System Reliability", value: "99.9%", detail: "Stable & Secure Solutions" }

  ],
  portfolio: [
    {
      id: 1,
      title: "PetroPoint TMS",
      category: "SaaS",
      categoryKey: "saas",
      image: "/images/portfolio-SaaS.png",
      description: "Hệ thống quản lý trạm xăng thông minh giúp tối ưu hóa vận hành, quản lý tồn kho và kiểm soát giao dịch.",
      technologies: ["Next.js", "TypeScript", "Tailwind", ".NET 9", "PostgreSQL"]
    },
    {
      id: 2,
      title: "American Wire Group (BuyAWG)",
      category: "Web Development",
      categoryKey: "webDev",
      image: "/images/portfolio-awg.png",
      description: "Thiết kế và cập nhật giao diện website hiện đại, tối ưu trải nghiệm người dùng và hiệu suất hệ thống.",
      technologies: ["WordPress", "PHP", "CSS3", "JavaScript", "SEO Optimization"]
    },
    {
      id: 3,
      title: "Chat Messaging",
      category: "Internal System",
      categoryKey: "internalSystem",
      image: "/images/portfolio-chat.png",
      description: "Internal system featuring multimedia messaging, video calls, and integrated task management. Built with Golang, Reactjs, Kafka, Tailwind, and Framer Motion.",
      technologies: ["Golang", "Reactjs", "Kafka", "Tailwind", "Framer Motion"]
    }
  ],
  team: [
    {
      name: "Leo Sterling",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in the tech industry.",
      avatar: "/images/avatar.jpg"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Former Google architect specializing in distributed systems.",
      avatar: "/images/avatar.jpg"
    },
    {
      name: "Marcus Vane",
      role: "Head of Design",
      bio: "Award-winning designer obsessed with pixel-perfection.",
      avatar: "/images/avatar.jpg"
    }
  ]
};
