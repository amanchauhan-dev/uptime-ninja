"use client"
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ProgressBarLink } from '@/contexts/progress-bar'
import { User, X } from 'lucide-react'
import React from 'react'

export type LinkType = {
    url: string;
    name: string;
}

const Links = [
    {
        title: "",
        baseURl: "/user",
        links: [
            {
                name: "Overview",
                url: "/"
            },
            {
                name: "Services",
                url: "/"
            },
        ]
    }, {
        title: "Reports & Analysis",
        baseURl: "/user",
        links: [
            {
                name: "Report",
                url: "/"
            },
            {
                name: "Analysis",
                url: "/"
            },
        ]
    },
]

function SideBar() {
    return (
        <aside className='h-svh md:h-full shadow-lg max-md:absolute  max-w-[300px] left-0 top-0 w-full flex flex-col gap-4  bg-background dark:bg-secondary/50 max-md:dark:bg-muted  md:rounded-lg p-2'>
            <div className='md:bg-background p-2 rounded-lg border-2 border-accent relative'>
                <Button variant={"ghost"} size={"icon"} className='md:hidden absolute text-destructive -top-2 -right-2'><X /></Button>
                <ProgressBarLink href={'/user'} className='w-fit'>
                    <Logo />
                </ProgressBarLink>
            </div>
            <div className='grow'>
                {Links.map((item, index) => {
                    return (
                        <div key={index} className='mb-4'>
                            {item.title.trim().length > 0 && <h1 className='text-muted-foreground'>{item.title}</h1>}
                            <div className='flex flex-col'>
                                {item.links.map((e, i) => {
                                    return (
                                        <LinkItem link={e} key={i} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className=''>
                <div>
                    <Button className='w-full'><User /> Profile</Button>
                </div>
            </div>
        </aside>
    )
}

export default SideBar




const LinkItem = ({ link }: { link: LinkType }) => {
    return (
        <ProgressBarLink className='p-3 py-1 hover:bg-muted/70 mb-1 rounded transition-colors' href={link.url}>{link.name}</ProgressBarLink>
    )
}

