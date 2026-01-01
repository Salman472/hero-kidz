import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className="card bg-base-100 shadow-md animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-300 rounded-t-lg"></div>

      <div className="card-body p-4 space-y-3">
        {/* Title */}
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>

        {/* Rating & Sold */}
        <div className="flex justify-between">
          <div className="h-4 bg-gray-300 rounded w-16"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>

        {/* Price */}
        <div className="h-5 bg-gray-300 rounded w-24"></div>

        {/* Button */}
        <div className="h-9 bg-gray-300 rounded"></div>
      </div>
    </div>
    );
};

export default ProductSkeleton;