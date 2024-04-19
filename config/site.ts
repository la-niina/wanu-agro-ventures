export type SiteConfig = typeof site

export const site = {
    name: "Wanu Agro Ventures",
    description:
        "Beautifully designed components built with Radix UI and Tailwind CSS.",
    navigation: [
        {
            title: "Home",
            href: "/",
            disabled: false
        },
        {
            title: "Products",
            href: "/",
            disabled: false
        },
        {
            title: "Blogs",
            href: "/",
            disabled: false
        },
        {
            title: "About",
            href: "/",
            disabled: false
        },
    ],
    content: {
        
    },
    links: {
        twitter: "https://twitter.com/shadcn",
        github: "https://github.com/shadcn/ui",
        docs: "https://ui.shadcn.com",
    },
}