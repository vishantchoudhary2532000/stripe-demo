import Link from 'next/link';

export default function Canceled() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl border border-rose-100 p-10 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-100">
          <span className="text-4xl">⚠️</span>
        </div>
        <h1 className="text-4xl font-bold text-rose-600 tracking-tight">Payment Canceled</h1>
        <p className="mt-4 text-lg text-gray-600">
          It looks like the payment didn&#39;t go through. You can retry whenever you&#39;re ready—your card wasn&#39;t charged.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 text-left">
          <div className="rounded-2xl bg-rose-50 p-5">
            <h2 className="text-sm font-semibold text-rose-700 uppercase tracking-wide">Possible Causes</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>User canceled the Stripe checkout window</li>
              <li>Card declined or requires additional authentication</li>
              <li>Network hiccup during confirmation</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-amber-50 p-5">
            <h2 className="text-sm font-semibold text-amber-700 uppercase tracking-wide">What You Can Do</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>Double-check card details or try another card</li>
              <li>Ensure test card uses a valid billing ZIP</li>
              <li>Review Stripe logs in test mode for more info</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}