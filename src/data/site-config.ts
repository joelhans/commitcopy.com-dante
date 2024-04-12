export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Commit',
    subtitle: 'Minimal Astro.js theme',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Why me',
            href: '/why-me'
        },
        {
            text: 'Services',
            href: '/services'
        },
        {
            text: 'Samples',
            href: '/samples',
        },
        {
            text: 'Testimonials',
            href: '/testimonials',
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Why me',
            href: '/why-me'
        },
        {
            text: 'Services',
            href: '/services'
        },
        {
            text: 'Samples',
            href: '/samples',
        },
        {
            text: 'Testimonials',
            href: '/testimonials',
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/joel-hans/'
        }
    ],
    hero: {
        title: 'I empower open-source startups to win developer trust with expert tech content and strategic storytelling.',
        text: "Products for developers and engineers are already tough to write for. You need to translate a complex repo of technical jargon into stories and benefits. Plus, when you&rsquo;re also building that product on top of open-source software—or releasing your code directly on GitHub in an open-core model—you&rsquo;re now facing even tougher scrutiny.\n\nI get it. I have 10 years of focused experience in deep-tech products for app developers, DevOps/platform engineers, and security specialists. And I bring a powerful combination of literacy in tech, story, and open-source to write copy and marking content for the technical audiences of open-source and open-core startups.\n\nI embed in marketing, DevRel, and content teams for the long haul to accelerate all your current tactics and upskill your existing team so you start to excel in all your outreach to technical audiences—not just for a single campaign or quarter, but for the long haul.\n\nIf you&rsquo;re ready to get your technical audience to <code>commit</code> through copy and content, let&rsquo;s talk.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Why work with me?',
                href: '/why-me'
            },
            {
                text: 'Services I offer',
                href: '/services'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
