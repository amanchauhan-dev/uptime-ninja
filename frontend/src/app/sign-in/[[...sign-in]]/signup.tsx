'use client'
import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function SignUp() {
    const { resolvedTheme } = useTheme()

    return (
        <div className='flex min-h-svh w-svw justify-center pt-20'>
            <SignIn
                appearance={{
                    baseTheme: resolvedTheme === "dark" ? dark : undefined,
                    elements: {
                        card: "bg-[#1f1f1f] shadow-lg",
                        formButtonPrimary: "bg-white text-black hover:bg-gray-300",
                    },
                }}
            />
        </div>
    )
}
