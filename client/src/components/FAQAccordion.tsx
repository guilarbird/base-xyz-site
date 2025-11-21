import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div 
          key={i} 
          className="border-b cursor-pointer transition-all hover:bg-card/30"
          style={{ borderColor: '#1A1A1A' }}
          onClick={() => toggleItem(i)}
        >
          <div className="py-6 px-2">
            <div className="flex items-start justify-between gap-4">
              <h3 
                className="font-semibold text-lg flex-1"
                style={{ color: '#E6E6E6' }}
              >
                {item.q}
              </h3>
              <ChevronDown 
                className={`h-5 w-5 flex-shrink-0 transition-transform`}
                style={{ 
                  color: '#8C52FF',
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </div>
            {openIndex === i && (
              <p 
                className="mt-4 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200"
                style={{ color: '#C7C7C7' }}
              >
                {item.a}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
