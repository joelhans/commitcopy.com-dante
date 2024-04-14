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
    subtitle: 'Copy and marketing content for open-source startups.',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/twitter-card.png',
        alt: 'Copy and marketing content for open-source startups.'
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
        image: {
            src: '/hero.jpeg',
            alt: 'A picture of Joel Hans, copywriter and content marketer for open-source startups.'
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
