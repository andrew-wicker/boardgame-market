import { GameFromCollection } from './Collection';

export default function CollectionCardFront({
  image_url,
  title,
  year_published,
}: GameFromCollection) {
  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-xl border border-b-night-800 border-l-night-800 shadow-lg">
      <div className="relative flex h-56 w-56 items-center justify-center">
        <img
          src={image_url}
          alt={title}
          className="max-h-full max-w-full rounded-2xl shadow-lg"
        />
      </div>
      <div className="mt-4 h-24 w-full rounded-b-xl border-night-700 px-2">
        <h3 className="text-pretty text-xl font-bold">{title}</h3>
        <h5>| {year_published} |</h5>
      </div>
    </div>
  );
}
