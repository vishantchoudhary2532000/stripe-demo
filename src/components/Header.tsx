'use client';

import Link from 'next/link';
import { CreditCardIcon } from '@heroicons/react/24/outline';

export default function Header() {
    return (
        <header className="glass-header">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3 group translate-y-[-1px]">
                            <div className="bg-indigo-600 p-2 rounded-xl group-hover:bg-indigo-700 transition-all duration-500 shadow-lg shadow-indigo-200 group-hover:shadow-indigo-300 group-hover:scale-110">
                                <CreditCardIcon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-2xl font-display font-bold tracking-tight text-gray-900">
                                Stripe<span className="text-indigo-600 font-extrabold">Pay</span>
                            </span>
                        </Link>
                    </div>
                    <nav className="flex items-center space-x-6 sm:space-x-10">
                        <a href="https://stripe.com/docs/api" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block text-gray-400 hover:text-indigo-600 font-bold transition-all text-sm tracking-tight">API Reference</a>
                        <a href="https://nextjs.org/docs/app" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block text-gray-400 hover:text-indigo-600 font-bold transition-all text-sm tracking-tight">Next.js Guide</a>
                        <Link
                            href="https://github.com/vishantchoudhary2532000/stripe-demo"
                            className="bg-gray-950 text-white px-6 py-3 rounded-xl text-xs sm:text-sm font-bold hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-500 active:scale-95 cursor-pointer whitespace-nowrap"
                        >
                            Github Repo
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
