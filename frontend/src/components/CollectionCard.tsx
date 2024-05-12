import { useState } from 'react';
import CollectionCardFront from './CollectionCardFront';
import CollectionCardBack from './CollectionCardBack';
import { GameFromCollection } from './Collection';

interface CollectionCardProps extends GameFromCollection {}

export default function CollectionCard(props: CollectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="perspective-1000 mx-8 mb-8 flex h-96 w-72"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`transform-style-preserve-3d relative h-full w-full transition-transform duration-700 ${isHovered ? 'rotate-y-180' : ''}`}
      >
        <CollectionCardFront {...props} />
        <CollectionCardBack {...props} />
      </div>
    </div>
  );
}
