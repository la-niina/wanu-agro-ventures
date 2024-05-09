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
            title: "Produces and Products",
            href: "/",
            disabled: false
        },
        {
            title: "Herbiary (Encyclopedia of herbs)",
            href: "/herbiary",
            disabled: false
        },
        {
            title: "Blogs",
            href: "/blog",
            disabled: false
        },
        {
            title: "About",
            href: "/about-us",
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