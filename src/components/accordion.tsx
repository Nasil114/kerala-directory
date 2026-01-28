"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden bg-white shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-gray-900 text-base">{title}</span>
                <ChevronRight
                    className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${isOpen ? "rotate-90" : ""
                        }`}
                />
            </button>

            <div
                className={`transition-all duration-200 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
            >
                <div className="px-4 py-3 border-t border-gray-100">
                    {children}
                </div>
            </div>
        </div>
    );
}

interface AccordionGroupProps {
    items: {
        title: string;
        content: React.ReactNode;
    }[];
    defaultOpenIndex?: number;
}

export function AccordionGroup({ items, defaultOpenIndex }: AccordionGroupProps) {
    return (
        <div className="space-y-2">
            {items.map((item, index) => (
                <Accordion
                    key={index}
                    title={item.title}
                    defaultOpen={index === defaultOpenIndex}
                >
                    {item.content}
                </Accordion>
            ))}
        </div>
    );
}
