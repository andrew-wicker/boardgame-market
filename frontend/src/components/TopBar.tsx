// import { useState } from 'react';

export default function TopBar() {
  return (
    <>
      <nav className='w-screen bg-white min-h-20 fixed top-0 left-0 flex justify-between items-center p-4 font-sans'>
        <div className='flex items-center'>
          <img
            src='/images/logo.png'
            className='w-20 h-auto'
          />
          <div className='text-2xl mt-2'>Game Collector</div>
        </div>
      </nav>
    </>
  );
}
