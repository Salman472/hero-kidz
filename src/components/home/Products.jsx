import React from 'react';
import ProductCard from './ProductCard';
import { getProduct } from '@/action/server/product';

const Products = async () => {
    const products=(await getProduct()) || []
    return (
        <div>
            <div className='flex justify-center items-center text-3xl font-bold mb-10'><h1 className='border-b-4 border-primary'>Our <span className='text-primary'> Products</span></h1></div>
            <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4'>
                {
                    products.map((product)=>(<ProductCard key={product?._id} product={product}/>))
                }
            </div>
        </div>
    );
};

export default Products;