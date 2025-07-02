'use client'
import Logo from '@/components/logo'
import ThemeToggler from '@/components/theme-toggler'
import { Button } from '@/components/ui/button'
import { ProgressBarLink } from '@/contexts/progress-bar'
import { useAuth } from '@clerk/nextjs'
import { LogIn, LogOut, } from 'lucide-react'
import React from 'react'

function Header() {
    const { isSignedIn, signOut } = useAuth()

    return (
        <header className='bg-card h-[calc(50px)] flex  justify-between px-4 md:px-16 gap-4 items-center'>
            <Logo />
            <div className='flex gap-2 items-center'>
                {
                    isSignedIn ? (
                        <>
                            <ProgressBarLink className='text-sm font-semibold' href='/user'>
                                <Button size={"sm"}>Dashboard</Button>
                            </ProgressBarLink>
                            <Button size={"sm"} onClick={() => signOut()} variant={"outline"}>Logout <LogOut /></Button>
                        </>
                    )
                        : (
                            <ProgressBarLink className='text-sm font-semibold' href='/sign-in'>
                                <Button size={'sm'} variant={"secondary"}>Sign In <LogIn />
                                </Button>
                            </ProgressBarLink>
                        )
                }
                <div>
                    <ThemeToggler />
                </div>
            </div>
        </header>
    )
}

export default Header