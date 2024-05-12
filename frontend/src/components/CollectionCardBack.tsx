import { GameFromCollection } from './Collection';

export default function CollectionCardBack({
  description,
  max_play_time,
  max_players,
  min_age,
  min_play_time,
  min_players,
  playing_time,
  // title,
  type,
  year_published,
}: GameFromCollection) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-b-night-800 border-l-night-800 shadow-lg">
      <div className="p-4">
        <div className="max-h-24">
          <p className="overflow-scroll">{description}</p>
        </div>
        <p>
          Player count: {min_players} – {max_players}
        </p>
        <p>Minimum Age: {min_age}</p>
        <p>
          Playing Time: {min_play_time} - {playing_time} - {max_play_time}
        </p>
        <p>Game Type: {type}</p>
        <p>Published: {year_published}</p>
      </div>
    </div>
  );
}
