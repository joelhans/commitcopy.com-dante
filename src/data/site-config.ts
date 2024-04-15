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
    subtitle: 'Copywriting for open-source startups.',
    description: 'I write copy and marking content for the technical audiences of open-source and open-core startups.',
    image: {
        src: '/twitter-card.png',
        alt: 'Copywriting for open-source startups.'
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
        title: 'I energize open-source startups with technical copy and strategic storytelling to win developer trust.',
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
