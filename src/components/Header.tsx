'use client';

import Link from 'next/link';
import { CreditCardIcon } from '@heroicons/react/24/outline';

export default function Header() {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-bottom border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2 group">
                            <div className="bg-indigo-600 p-1.5 rounded-lg group-hover:bg-indigo-700 transition-colors">
                                <CreditCardIcon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                StripePay
                            </span>
                        </Link>
                    </div>
                    <nav className="flex items-center space-x-4 sm:space-x-8">
                        <a href="https://stripe.com/docs" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm">Stripe API</a>
                        <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="hidden sm:inline-block text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm">Next.js Docs</a>
                        <Link
                            href="https://github.com/vishantchoudhary2532000/stripe-demo"
                            className="bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-800 transition-all shadow-sm active:scale-95 cursor-pointer whitespace-nowrap"
                        >
                            Github Repo
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
