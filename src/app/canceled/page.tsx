'use client';

import Link from 'next/link';
import { XCircleIcon, ArrowLeftIcon, QuestionMarkCircleIcon, LifebuoyIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CanceledPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans selection:bg-red-100 selection:text-red-700 overflow-x-hidden">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-20 relative">
        {/* Decorative background */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-100/20 blur-[120px] rounded-full -z-10 animate-pulse" />

        <div className="max-w-xl w-full translate-y-[-20px] animate-fade-in-up">
          <div className="premium-card bg-white/90 backdrop-blur-xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Status tag */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold tracking-widest uppercase border border-red-100 mb-8">
              Transaction Incomplete
            </div>

            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-red-100 shadow-xl shadow-red-100/50 -rotate-3">
              <XCircleIcon className="h-10 w-10 text-red-500" />
            </div>

            <h1 className="text-4xl font-display font-black text-gray-950 mb-4 tracking-tight">
              Checkout <span className="text-red-600">Canceled</span>
            </h1>
            <p className="text-gray-500 font-medium leading-relaxed mb-10 max-w-sm mx-auto text-lg">
              We noticed you left the checkout. Don&apos;t worry, no charges were made to your account.
            </p>

            <div className="space-y-4">
              <Link
                href="/"
                className="w-full bg-gray-950 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center hover:bg-gray-800 transition-all duration-500 active:scale-95 group shadow-xl shadow-gray-200"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                Try Checkout Again
              </Link>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <a href="https://support.stripe.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-600 font-bold text-xs hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                  <QuestionMarkCircleIcon className="h-4 w-4" />
                  <span>FAQs</span>
                </a>
                <a href="https://support.stripe.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-gray-100 bg-gray-50/50 text-gray-600 font-bold text-xs hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                  <LifebuoyIcon className="h-4 w-4" />
                  <span>Contact Support</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-white/50 border border-gray-100 rounded-2xl flex items-start space-x-4">
            <div className="bg-indigo-50 p-2 rounded-lg">
              <LifebuoyIcon className="h-5 w-5 text-indigo-600" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-gray-900 mb-1">Need help with your payment?</h4>
              <p className="text-xs text-gray-500 font-medium">Our team is available 24/7 to assist with any technical issues during checkout.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}