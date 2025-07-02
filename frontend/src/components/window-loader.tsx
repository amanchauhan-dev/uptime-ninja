import React from 'react'
import { Skeleton } from './ui/skeleton'

function WindowLoader() {
    return (
        <Skeleton className='h-svh flex w-full justify-center items-center'>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-linear-to-tr from-primary to-white text-5xl w-20 h-20 rounded-full flex justify-center items-center'>
                    🥷🏿
                </div>
                <h1 className='text-center'>Ninja Loading...</h1>
                <h1 className='text-center'>Ding...Ding...</h1>
            </div>
        </Skeleton>
    )
}

export default WindowLoader