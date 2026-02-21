export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Stripe Payment Demo</h3>
                        <p className="text-gray-500 max-w-xs mx-auto md:mx-0">
                            A professional integration showcase of Stripe Checkout and Elements using Next.js 15 and Tailwind CSS.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Resources</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="https://stripe.com/docs/checkout" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Checkout Docs</a></li>
                            <li><a href="https://nextjs.org/docs/app/building-your-application/routing" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Next.js Routing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="https://support.stripe.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
                            <li><a href="https://status.stripe.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">System Status</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} StripePay Demo. Built for high-performance fintech apps.
                    </p>
                </div>
            </div>
        </footer>
    );
}
