const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Open Sans', 'Inter', ...defaultTheme.fontFamily.sans],
            serif: ['Alegreya Sans', ...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: {
                orange: '#f27370',
                purple: '#442b75',
            },
            textColor: {
                main: 'rgb(var(--color-text-main) / <alpha-value>)'
            },
            backgroundColor: {
                main: 'rgb(var(--color-bg-main) / <alpha-value>)',
                muted: 'rgb(var(--color-bg-muted) / <alpha-value>)',
            },
            borderColor: {
                main: 'rgb(var(--color-border-main) / <alpha-value>)'
            },
            typography: (theme) => ({
                dante: {
                    css: {
                        '--tw-prose-body': theme('textColor.main / 100%'),
                        '--tw-prose-headings': theme('textColor.main / 100%'),
                        '--tw-prose-lead': theme('textColor.main / 100%'),
                        '--tw-prose-links': theme('textColor.main / 100%'),
                        '--tw-prose-bold': theme('textColor.main / 100%'),
                        '--tw-prose-counters': theme('textColor.main / 100%'),
                        '--tw-prose-bullets': theme('textColor.main / 100%'),
                        '--tw-prose-hr': theme('borderColor.main / 100%'),
                        '--tw-prose-quotes': theme('textColor.main / 100%'),
                        '--tw-prose-quote-borders': theme('borderColor.main / 100%'),
                        '--tw-prose-captions': theme('textColor.main / 100%'),
                        '--tw-prose-code': theme('textColor.main / 100%'),
                        '--tw-prose-pre-code': theme('colors.zinc.100'),
                        '--tw-prose-pre-bg': theme('colors.zinc.800'),
                        '--tw-prose-th-borders': theme('borderColor.main / 100%'),
                        '--tw-prose-td-borders': theme('borderColor.main / 100%')
                    }
                },
                DEFAULT: {
                    css: {
                        a: {
                            fontWeight: 'normal',
                            textDecoration: 'underline',
                            textDecorationStyle: 'dashed',
                            textDecorationThickness: '1px',
                            textUnderlineOffset: '2px',
                            '&:hover': {
                                textDecorationStyle: 'solid'
                            }
                        },
                        'h1,h2,h3,h4,h5,h6': {
                            fontFamily: theme('fontFamily.serif').join(", "),
                            fontWeight: 500,
                            code: { 
                                color: theme('colors.orange'),
                                paddingTop: 0,
                                paddingBottom: 0,
                            },
                            p: {
                                code: {
                                    color: theme('colors.orange'),
                                }
                            }
                        },
                        blockquote: {
                            borderColor: theme('colors.orange'),
                            fontFamily: theme('fontFamily.serif').join(", "),
                            fontStyle: 'italic',
                            fontWeight: 'normal',
                            lineHeight: theme('lineHeight.relaxed'),
                            '@media (min-width: theme("screens.sm"))': {
                                fontSize:  theme('fontSize.2xl'),
                            }
                        },
                        code: {
                            color: theme('colors.orange'),
                            backgroundColor: theme('colors.gray.200'),
                            fontFamily: theme('fontFamily.mono'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        'code::before': {
                            content: '""',
                        },
                        'code::after': {
                            content: '""',
                        },
                        hr: {
                            borderColor: theme('colors.gray.300'),
                            borderStyle: 'dashed',
                        }
                    },
                },
                dark: {
                    css: {
                        'h1,h2,h3,h4,h5,h6': {
                            code: { 
                                backgroundColor: theme('colors.gray.800'),
                            }
                        },
                        code: {
                            backgroundColor: theme('colors.gray.800'),
                        },
                        hr: {
                            borderColor: theme('colors.gray.700'),
                        }
                    }
                },
                lg: {
                    css: {
                        blockquote: {
                            paddingLeft: '1rem'
                        }
                    }
                }
            })
        }
    },
    variants: {
        typography: ['dark'],
    },
    plugins: [require('@tailwindcss/typography')]
};
