export default function Hero() {
  return (
    <div className='bg-white text-night-500 text-center flex justify-center items-center flex-col font-sans'>
      <div className='w-screen  max-h-[40vh] bg-emerald-400 overflow-hidden object-center mb-4'>
        <img
          src='/images/hero-img.webp'
          className='object-contain w-full h-full '
        />
      </div>
      <h1 className='text-4xl font-bold mb-2'>Welcome to Game Collector!</h1>
      <p className='text-xl mb-4'>Track your collection and the outcomes of your plays!</p>
    </div>
  );
}
