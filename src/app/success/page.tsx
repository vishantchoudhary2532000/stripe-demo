'use client';

import Link from 'next/link';
import { CheckCircleIcon, ArrowLeftIcon, PrinterIcon, ShareIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SuccessPage() {
  const orderNumber = `STRP-${Math.floor(Math.random() * 1000000)}`;

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-700 overflow-x-hidden">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-20 relative">
        {/* Decorative backgrounds */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-100/30 blur-[100px] rounded-full -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-100/30 blur-[100px] rounded-full -z-10" />

        <div className="max-w-xl w-full translate-y-[-20px] animate-fade-in-up">
          <div className="premium-card bg-white/80 backdrop-blur-xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Top progress bar decoration */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-indigo-500" />

            <div className="w-24 h-24 bg-emerald-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-emerald-100 shadow-xl shadow-emerald-100/50 rotate-3">
              <CheckCircleIcon className="h-12 w-12 text-emerald-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-display font-black text-gray-950 mb-6 tracking-tight leading-tight">
              Payment<br />
              <span className="text-emerald-600">Confirmed.</span>
            </h1>

            <p className="text-gray-500 font-medium leading-relaxed mb-10 max-w-sm mx-auto text-lg">
              Your transaction was processed successfully. You now have full access to the premium features.
            </p>

            {/* Receipt Details Section */}
            <div className="bg-gray-50/50 rounded-2xl p-6 mb-10 border border-gray-100 text-left space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Order ID</span>
                <span className="text-sm font-mono font-bold text-gray-800">{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Amount Paid</span>
                <span className="text-lg font-display font-bold text-gray-900">$10.00 USD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Status</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                  Captured
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/"
                className="bg-gray-950 text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 active:scale-95 group col-span-1 sm:col-span-2 shadow-xl shadow-gray-200"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform" />
                Return to Dashboard
              </Link>
              <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors cursor-pointer">
                <PrinterIcon className="h-4 w-4" />
                <span>Get Receipt</span>
              </button>
              <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors cursor-pointer">
                <ShareIcon className="h-4 w-4" />
                <span>Share Access</span>
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-400 text-sm font-medium">
            A confirmation email has been sent to your inbox.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}