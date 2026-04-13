import inventoryImage from '../assets/Images/CosmelinaCosmetic-Store.png';
import coldDrinkImage from '../assets/Images/ColdDrink.png';
import portfolioImage from '../assets/Images/Portfolio.png';

export const projectData = {
    cosmelina: {
        title: "Cosmetic Inventory System",
        category: "Full-Stack Architecture",
        tech: ["React", "PHP", "MySQL", "Tailwind"],
        image: inventoryImage,
        description: "A professional inventory management system built for high-end cosmetic brands. It features real-time stock tracking and a minimalist dashboard.",
        challenge: "Handling complex MySQL relationships while keeping the frontend state in sync without page reloads.",
        solution: "Developed a custom REST API using PHP and implemented debounced search and filtering in React for performance.",
        features: ["Live Stock Alerts", "Sales Analytics Dashboard", "Secure Admin Authentication", "Product Batch Tracking"],
        github: "https://github.com/Reyansh-12/Inventory_management"
    },
    pepsi: {
        title: "Cold Drink Interactive",
        category: "Motion & Animation",
        tech: ["HTML", "GSAP", "Three.js"],
        image: coldDrinkImage,
        description: "An immersive 3D experience designed to showcase beverages. It uses WebGL for realistic lighting and textures.",
        challenge: "Making 3D objects responsive across different screen sizes while maintaining high frame rates.",
        solution: "Used GSAP ScrollTrigger to manipulate Three.js camera positions, creating a cinematic storytelling effect.",
        features: ["3D Product Interaction", "Smooth Scroll Animations", "Custom Shaders", "Device Optimization"],
        github: "https://github.com/Reyansh-12/Portfolio"
    },
    portfolio: {
        title: "Personal Brand Portfolio",
        category: "Personal Brand",
        tech: ["React", "GSAP", "Vite"],
        image: portfolioImage,
        description: "My personal portfolio exploring the 'Developer Universe' theme. Focused on unique UI/UX and smooth transitions.",
        challenge: "Integrating a custom cursor and complex GSAP timelines that don't conflict with React's lifecycle.",
        solution: "Used gsap.context() within useEffect to ensure clean animation cleanup and memory management.",
        features: ["Custom Cursor Interaction", "Dynamic Route Transitions", "Dark Mode UI", "Responsive 3D Assets"],
        github: "https://github.com/Reyansh-12/Portfolio"
    }
};