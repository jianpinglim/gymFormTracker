import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Welcome message */}
      <div className="mt-8 text-center text-3xl font-bold">
        Welcome{' '}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          John Doe
        </span>
      </div>
      
      {/* Choose workout section */}
      <div className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-2xl font-semibold mb-8">Choose your workout</h2>
        
        {/* Placeholder rectangles with links */}
        <div className="flex gap-8">
          <Link href="/pages/shoulder-press" passHref>
            <div className="w-60 h-40 bg-gray-300 rounded-lg overflow-hidden flex items-end justify-end p-3 cursor-pointer hover:bg-gray-400">
              <p className="font-bold text-xl">Shoulder Press</p>
            </div>
          </Link>
          
          <Link href="/pages/bicepcurl">
            <div className="w-60 h-40 bg-gray-300 rounded-lg overflow-hidden flex items-end justify-end p-3 cursor-pointer hover:bg-gray-400">
              <p className="font-bold text-xl">Bicep Curls</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
