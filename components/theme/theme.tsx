"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

export function Theme() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden stroke-violet-500" />
            <Moon className="hidden h-5 w-5 dark:block stroke-violet-500" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}