import Link from "next/link"
import { Theme } from "../theme/theme"
import { FrameIcon } from "@radix-ui/react-icons"
import { site } from "@/config/site"
import { cn } from "@/lib/utils"

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/5 bg-background/5 backdrop-blur supports-[backdrop-filter]:bg-background/5">
            <div className="px-5 w-full flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <FrameIcon className="h-6 w-6 stroke-violet-500" />
                        <span className="inline-block font-bold text-white/60">{site.name}</span>
                    </Link>

                    <nav className="hidden md:flex gap-6">
                        {site.navigation?.map((item, index) =>
                            item.href && (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center text-sm font-bold font-sans text-white/60",
                                        item.disabled && "cursor-not-allowed opacity-80"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            )
                        )}
                    </nav>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <Theme />
                    </nav>
                </div>
            </div>
        </header>
    )
}