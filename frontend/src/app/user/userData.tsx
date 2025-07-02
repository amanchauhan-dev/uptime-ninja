"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

function USerData() {
    const { user } = useUser()
    return (
        <div>
            <h1>{user?.fullName}</h1>
            <h1>{user?.emailAddresses[0].emailAddress}</h1>
        </div>
    )
}

export default USerData