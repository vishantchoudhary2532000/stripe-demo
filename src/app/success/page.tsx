import Link from 'next/link';

export default function Success() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-emerald-100 p-10 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <span className="text-4xl">✅</span>
        </div>
        <h1 className="text-4xl font-bold text-emerald-600 tracking-tight">Payment Successful!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Thank you for your purchase. A confirmation receipt has been sent to your email. You can review the
          transaction details from your Stripe dashboard while in test mode.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 text-left">
          <div className="rounded-2xl bg-emerald-50 p-5">
            <h2 className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Order Summary</h2>
            <p className="mt-2 text-lg font-medium text-gray-900">Demo Product • $10.00</p>
            <p className="text-sm text-gray-500">Digital software download (HS code 998314)</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-5">
            <h2 className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">Next Steps</h2>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>Use Stripe test mode to view the successful PaymentIntent</li>
              <li>Configure webhooks for production to automate fulfillment</li>
              <li>Replace test keys with live keys before going live</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}