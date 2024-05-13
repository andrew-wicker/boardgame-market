import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex w-full items-center justify-between p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? <ChevronDown /> : <ChevronUp />}</span>
      </button>
      {isOpen && <div className="p-2">{children}</div>}
    </div>
  );
}
