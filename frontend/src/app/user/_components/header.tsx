'use client'
import ThemeToggler from '@/components/theme-toggler'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import React from 'react'

function Header() {
    return (
        <header className='h-[50px]  w-full bg-background dark:bg-secondary/50 rounded-md flex items-center px-2 md:px-4 justify-between'>
            <div className='flex items-center gap-2'>
                <Button variant={"ghost"} className='flex md:hidden bg-muted/50' size={"icon"}><Menu /></Button>
                <h1 className='font-semibold'>Overview</h1>
            </div>
            <div>
                <ThemeToggler />
            </div>
        </header>
    )
}

export default Header