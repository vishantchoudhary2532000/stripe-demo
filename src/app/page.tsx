'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import {
  ArrowRightIcon,
  CreditCardIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CheckoutForm from '@/components/CheckoutForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Home() {
  const [loadingHosted, setLoadingHosted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleHostedCheckout = async () => {
    setLoadingHosted(true);
    try {
      const res = await fetch('/api/checkout', { method: 'POST' });
      const { url, error } = await res.json();
      if (error) throw new Error(error);
      if (url) window.location.href = url;
    } catch (error) {
      console.error('Hosted Checkout error:', error);
      alert('Hosted Checkout error. Please check console.');
    } finally {
      setLoadingHosted(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('4111111111111111');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-700">
      <Header />

      <main className="flex-grow pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide border border-indigo-100 animate-fade-in">
              <SparklesIcon className="h-4 w-4 mr-2" />
              New: Experience Seamless Payments
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Elevate Your <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Checkout</span> Experience
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed px-4">
              Integrate world-class payment processing in minutes. Choose between our high-conversion hosted page or a fully custom embedded widget.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-4 text-xs sm:text-sm font-medium text-gray-400">
              <div className="flex items-center"><ShieldCheckIcon className="h-5 w-5 mr-2 text-emerald-500" /> PCI DSS Compliant</div>
              <div className="flex items-center"><ShieldCheckIcon className="h-5 w-5 mr-2 text-emerald-500" /> 256-bit SSL Secure</div>
              <div className="flex items-center"><ShieldCheckIcon className="h-5 w-5 mr-2 text-emerald-500" /> Global Support</div>
            </div>
          </div>

          {/* Pricing/Payment Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Option 1: Hosted */}
            <ProductCard
              title="Global Checkout"
              description="Redirect users to a secure, Stripe-branded environment. Perfect for maximizing trust and handling international compliance automatically."
              icon={<GlobeAltIcon className="h-8 w-8" />}
              highlightColor="indigo"
            >
              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-semibold text-gray-500 uppercase">Single Payment</span>
                  <span className="text-3xl font-bold text-gray-900">$10.00</span>
                </div>
                <p className="text-xs text-gray-400 font-medium italic">Standard Demo Product Access</p>
              </div>

              <button
                onClick={handleHostedCheckout}
                disabled={loadingHosted}
                className="w-full bg-white text-gray-900 border-2 border-gray-900 font-bold py-4 px-6 rounded-xl hover:bg-gray-950 hover:text-white transition-all duration-300 flex items-center justify-center group disabled:opacity-50 cursor-pointer active:scale-95 shadow-sm"
              >
                {loadingHosted ? (
                  <span className="flex items-center italic">
                    <svg className="animate-spin h-5 w-5 mr-3 text-current" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Redirecting...
                  </span>
                ) : (
                  <>
                    Launch Hosted Checkout <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </ProductCard>

            {/* Option 2: Embedded */}
            <ProductCard
              title="Embedded Payments"
              description="Keep your customers on-site with a fully integrated UI. Complete control over branding and the customer journey from start to finish."
              icon={<CreditCardIcon className="h-8 w-8" />}
              highlightColor="emerald"
            >
              <div className="border-t border-gray-100 pt-8 mt-4">
                <Elements stripe={stripePromise} options={{
                  appearance: {
                    theme: 'stripe',
                    variables: {
                      colorPrimary: '#4f46e5',
                      colorText: '#1f2937',
                    }
                  }
                }}>
                  <CheckoutForm />
                </Elements>
              </div>
            </ProductCard>
          </div>

          {/* Test Cards Note - Professional Toast Version */}
          <div className="mt-16 p-10 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-[2rem] text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className={`transition-all duration-500 flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg ${copied ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'}`}>
                <ShieldCheckIcon className="h-4 w-4" />
                <span>Copied to clipboard!</span>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-center">
              <ShieldCheckIcon className="h-6 w-6 mr-2 text-indigo-600" />
              Ready for Testing?
            </h4>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Use our global test card to simulate a successful transaction in seconds.
            </p>

            <div
              onClick={copyToClipboard}
              className="inline-flex flex-col md:flex-row items-center cursor-pointer p-1 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-all group"
            >
              <div className="px-4 sm:px-8 py-3 bg-white rounded-xl shadow-sm border border-gray-200 group-hover:border-indigo-300 transition-colors">
                <code className="text-lg sm:text-2xl font-mono font-bold text-gray-800 tracking-tight sm:tracking-[0.2em]">4111 1111 1111 1111</code>
              </div>
              <div className="px-6 py-3 flex items-center text-sm font-bold text-indigo-600 group-hover:text-indigo-700">
                Click to Copy card
                <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}