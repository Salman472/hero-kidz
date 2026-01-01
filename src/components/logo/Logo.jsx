import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={'/'} className='flex justify-center items-center gap-1'>
                <Image alt='hero-kidz' src={'/assets/logo.png'} width={40} height={30}/>
                <h1 className='text-xl font-bold'>Hero <span className='text-primary'>Kidz</span></h1>
            </Link>
        </div>
    );
};

export default Logo;