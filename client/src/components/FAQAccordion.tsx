import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="space-y-3">
      {items.map((item, i) => (
        <Card 
          key={i} 
          className="bg-card border-border/50 hover:border-primary/30 transition-all cursor-pointer"
          onClick={() => toggleItem(i)}
        >
          <CardContent className="pt-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold text-lg flex-1">{item.q}</h3>
              <ChevronDown 
                className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              />
            </div>
            {openIndex === i && (
              <p className="text-muted-foreground mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
                {item.a}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
