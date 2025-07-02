import React from 'react'
import Header from './_components/header'
import SideBar from './_components/side-bar'
import SideBarProvider from './_components/side-bar-context'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <SideBarProvider>
            <div className='h-svh grid md:grid-cols-[300px_auto] p-3 gap-2 bg-muted dark:bg-background'>
                <SideBar />
                <main className='h-full overflow-y-auto'>
                    <Header />
                    {children}
                </main>
            </div>
        </SideBarProvider>
    )
}

export default layout