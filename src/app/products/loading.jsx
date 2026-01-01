import ProductSkeleton from '@/components/skeletons/ProductSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4'>
            {
                [...Array(12)].map((_, index)=><ProductSkeleton key={index}/>)
            }
        </div>
    );
};

export default loading;