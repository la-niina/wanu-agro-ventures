import Link from "next/link"
import { Theme } from "../theme/theme"
import { FrameIcon } from "@radix-ui/react-icons"
import { site } from "@/config/site"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { MenuIcon } from "lucide-react"
import { Button } from "../ui/button"

export const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/5 bg-background/5 backdrop-blur supports-[backdrop-filter]:bg-background/5">
            <div className="px-5 w-full flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Sheet>
                        <SheetTrigger asChild className="p-0 md:hidden">
                            <MenuIcon />
                        </SheetTrigger>

                        <SheetContent className="bg-muted/40 text-wrap text-white" side={"left"}>
                            <SheetHeader className="flex flex-col justify-between h-full">
                                <SheetTitle>{site.name}</SheetTitle>
                                <div className="flex flex-col gap-3 mt-10">
                                    {site.navigation?.map((item, index) =>
                                        item.href && (
                                            <Button key={index} variant={"ghost"} size={"sm"} className="rounded-full bg-muted/20 h-12 p-5 z-20">

                                                <Link
                                                    href={item.href}
                                                    className={cn(
                                                        "flex items-center text-sm font-bold font-sans size-full",
                                                        item.disabled && "cursor-not-allowed opacity-80"
                                                    )}
                                                >
                                                    <SheetClose className={cn(
                                                        "flex items-center text-sm font-bold font-sans size-full",
                                                        item.disabled && "cursor-not-allowed opacity-80"
                                                    )}>
                                                        {item.title}
                                                    </SheetClose>
                                                </Link>
                                            </Button>
                                        )
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <h1>@{site.name}</h1>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    
                    <Link href="/" className="flex items-center space-x-2">
                        <Image alt={site.name} src={"/logo.png"} width={1000} height={1000} className="h-12 w-12 md:flex hidden" />
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

                    </nav>
                </div>
            </div>
        </header>
    )
}