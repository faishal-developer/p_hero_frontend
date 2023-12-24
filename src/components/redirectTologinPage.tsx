'use client'
import { paths } from '@/paths/paths';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const RedirectTologinPage = () => {
    const router = useRouter();

    useEffect(()=>{
        router.push(paths.login)
    },[])
    return (
        <div>
            
        </div>
    );
};

export default RedirectTologinPage;