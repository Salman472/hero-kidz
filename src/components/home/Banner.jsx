import { banglaFont } from '@/app/layout';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
            <div className="flex justify-between items-center gap-2 px-4">
      <div className="flex-1 space-y-4">
        <h1 className={`${banglaFont.className} text-6xl font-semibold leading-20`}>আপনার শিশুকে সুন্দর একটি <span className='text-primary'>ভবিষ্যৎ দিন</span></h1>
        <p>Buy any toys with 20% off. This is a new year offer.</p>
        <Link href={'/products'} className='btn btn-primary btn-outline'>Explore More Toys </Link>
      </div>
      <div>
        <Image src={'/assets/hero.png'} alt='two baby play with toys' width={500} height={400}></Image>
      </div>
    </div>
    );
};

export default Banner;