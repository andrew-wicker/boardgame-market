export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-center font-sans text-night-500">
      <div className="mb-4  max-h-[40vh] w-screen overflow-hidden bg-emerald-400 object-center">
        <img
          src="/images/meeple-hero-crop.png"
          className="h-full w-full object-contain "
        />
      </div>
      <h1 className="mb-2 text-4xl font-bold">Welcome to K-Lax!</h1>
      <p className="mb-4 text-xl">
        Track your collection and the outcomes of your plays!
      </p>
    </div>
  );
}
