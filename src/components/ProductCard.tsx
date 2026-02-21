'use client';

import { ReactNode } from 'react';

interface ProductCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    children: ReactNode;
    highlightColor?: string;
}

export default function ProductCard({ title, description, icon, children, highlightColor = "indigo" }: ProductCardProps) {
    const colorMap: Record<string, string> = {
        indigo: "text-indigo-600 bg-indigo-50 border-indigo-100",
        emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
    };

    const selectedColor = colorMap[highlightColor] || colorMap.indigo;

    return (
        <div className="premium-card overflow-hidden flex flex-col h-full bg-white backdrop-blur-sm border border-gray-100/50">
            <div className="p-8 flex-1 flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border-2 shadow-sm ${selectedColor}`}>
                    {icon}
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2 tracking-tight">{title}</h2>
                <p className="text-gray-600/80 mb-10 leading-relaxed text-lg font-medium">
                    {description}
                </p>
                <div className="mt-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
