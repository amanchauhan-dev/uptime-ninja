import React from 'react'
import Header from './_components/header'
import Footer from './_components/footer'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col min-h-svh'>
            <Header />
            <main className='grow'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout