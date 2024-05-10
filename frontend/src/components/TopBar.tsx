// import { useState } from 'react';

export default function TopBar() {
  return (
    <>
      <nav className="fixed left-0 top-0 flex min-h-20 w-screen items-center justify-between bg-white p-4 font-sans">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            className="h-auto w-20"
          />
          <div className="mt-2 text-2xl">K-Lax</div>
        </div>
      </nav>
    </>
  );
}
