import Logo from '@/components/logo'
import { cn } from '@/lib/utils'
import { BadgeQuestionMark, FileText, PlusCircle } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <footer className='bg-card min-h-72 flex flex-col px-4 md:px-16 pt-10 border-t-2 gap-2'>
            <div className='flex gap-20 grow'>
                {/* logo */}
                <div className='h-20 max-w-lg'>
                    <Logo className={cn("text-2xl font-bold")} />
                    <p className='text-muted-foreground'>
                        UptimeNinja is a lightweight and powerful website uptime and performance monitoring tool that keeps a vigilant eye on your websites and APIs — like a true ninja!
                    </p>
                </div>
                {/* links */}
                <div className='grow grid md:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-4 font-semibold text-lg'>
                            <h1>Important Links</h1>
                            <PlusCircle className='size-4' />
                        </div>
                        <div className='pl-4 flex flex-col gap-1'>
                            <span>Link 1</span>
                            <span>Link 1</span>
                            <span>Link 1</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-4 font-semibold text-lg'>
                            <h1>Help & Support</h1>
                            <BadgeQuestionMark className='size-4' />
                        </div>
                        <div className='pl-4 flex flex-col gap-1'>
                            <span>Link 1</span>
                            <span>Link 1</span>
                            <span>Link 1</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-4 font-semibold text-lg'>
                            <h1>Notes</h1>
                            <FileText className='size-4' />
                        </div>
                        <div className='pl-4 flex flex-col gap-1'>
                            <p className='text-muted-foreground'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis sit voluptate quam, distinctio maxime esse eligendi fugiat id ullam temporibus corporis iusto exercitationem odio repellendus. Cumque reprehenderit voluptatibus voluptatem itaque!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div className='h-10 flex justify-center items-center border-t-2'>
                <h1 className=''>All Rights Are Reserved @ 2025</h1>
            </div>
        </footer>
    )
}

export default Footer