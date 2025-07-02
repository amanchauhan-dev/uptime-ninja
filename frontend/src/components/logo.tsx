import React from 'react'

function Logo({ className }: { className?: string }) {
    return (
        <h1 className={"font-bold text-lg text-primary " + className}>🥷🏿UptimeNinja</h1>
    )
}

export default Logo