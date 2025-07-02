'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

function ThemeToggler() {
    const [hydrate, setHydrate] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()
    useEffect(() => {
        setHydrate(true)
    }, [])

    if (!hydrate) {
        return null
    }
    return (
        <Button size={"icon"} className='rounded-full' type='button' onClick={() => {
            if (resolvedTheme == "dark")
                setTheme("light")
            else
                setTheme("dark")
        }}
            variant={"outline"}>
            {resolvedTheme == "dark" ? <Moon /> : <Sun />}
        </Button>
    )
}

export default ThemeToggler