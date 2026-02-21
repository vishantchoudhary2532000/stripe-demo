'use client';

import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import { CreditCardIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: {
            line1: '',
            city: '',
            state: '',
            postal_code: '',
            country: 'US',
        },
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name.startsWith('address.')) {
            const field = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                address: { ...prev.address, [field]: value },
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        setError(null);

        try {
            const res = await fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 1000 })
            });

            const { clientSecret, error: apiError } = await res.json();
            if (apiError) throw new Error(apiError);

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)!,
                    billing_details: {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        address: formData.address,
                    },
                },
            });

            if (result.error) {
                setError(result.error.message || 'Payment failed');
            } else {
                router.push('/success');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const inputStyles = "w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-gray-700 bg-gray-50/50";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <CreditCardIcon className="h-5 w-5 mr-2 text-indigo-600" />
                    Billing Details
                </h3>
                <div className="grid grid-cols-1 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className={inputStyles}
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className={inputStyles}
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="space-y-4 pt-2">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Address Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="address.line1"
                        placeholder="Street Address"
                        required
                        className={inputStyles}
                        value={formData.address.line1}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="address.city"
                        placeholder="City"
                        required
                        className={inputStyles}
                        value={formData.address.city}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <input
                            type="text"
                            name="address.state"
                            placeholder="State"
                            required
                            className={inputStyles}
                            value={formData.address.state}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <input
                            type="text"
                            name="address.postal_code"
                            placeholder="ZIP"
                            required
                            className={inputStyles}
                            value={formData.address.postal_code}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-span-1">
                        <select
                            name="address.country"
                            className={inputStyles}
                            value={formData.address.country}
                            onChange={handleInputChange}
                        >
                            <option value="US">US</option>
                            <option value="GB">UK</option>
                            <option value="IN">IN</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="space-y-4 pt-2">
                <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Card Details</label>
                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/50">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#1f2937',
                                    '::placeholder': { color: '#9ca3af' },
                                },
                                invalid: { color: '#ef4444' },
                            },
                        }}
                    />
                </div>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100 animate-shake">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-indigo-200 transition-all duration-200 flex items-center justify-center disabled:opacity-50 cursor-pointer active:scale-[0.98]"
            >
                {loading ? (
                    <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </span>
                ) : (
                    <span className="flex items-center">
                        Confirm Payment <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </span>
                )}
            </button>
        </form>
    );
}
