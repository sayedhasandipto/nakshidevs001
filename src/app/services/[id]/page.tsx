'use client';

import { use } from 'react';
import Header from '@/components/home/Header';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { servicesData } from '@/data/services';

export default function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const router = useRouter();
  
  const service = servicesData.find(s => s.id === unwrappedParams.id);

  const handleOrderClick = () => {
    router.push('/auth/login');
  };

  if (!service) {
    return (
      <>
        <Header />
        <div className="flex min-h-screen items-center justify-center bg-red-50 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Service Not Found</h1>
            <p className="mt-4 text-gray-600">The service you are looking for does not exist.</p>
            <Link
              href="/services"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Hero Section */}
        <div className="h-72 bg-gradient-to-br from-[#002045] to-[#0a1628] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full mix-blend-overlay"></div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-6xl px-6 -mt-32 relative z-10">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    {service.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    {service.title}
                  </h1>
                </div>

                {/* Rating */}
                <div className="mb-8 flex items-center gap-8 border-b border-gray-100 pb-8">
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Rating</p>
                    <p className="text-2xl font-bold text-amber-500 mt-1 flex items-center gap-1">
                      {service.rating} <span className="text-lg">★</span>
                    </p>
                  </div>
                  <div className="w-px h-12 bg-gray-100"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Reviews</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {service.reviews}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">About This Service</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <div className="mb-10">
                    <h2 className="mb-5 text-2xl font-bold text-gray-900">What&apos;s Included</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {service.features.map((feature: string, i: number) => (
                         <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                           <span className="material-symbols-outlined text-[#0a6c44] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                             check_circle
                           </span>
                           <p className="text-gray-700 font-medium">{feature}</p>
                         </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Provider Info */}
                {service.providerId && (
                  <div className="rounded-xl bg-blue-50/50 border border-blue-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-md">
                      {service.providerId.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1">Service Provider</p>
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.providerId.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 font-medium">
                        <span className="text-amber-500 font-bold">{service.providerId.rating}★</span> ({service.providerId.reviews} reviews)
                      </p>
                      {service.providerId.bio && (
                        <p className="mt-2 text-sm text-gray-600">
                          {service.providerId.bio}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price Card */}
                <div className="rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Service Price</p>
                  <p className="mt-2 text-5xl font-extrabold text-[#002045]">
                    ৳{service.price}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-sm font-medium text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <span className="material-symbols-outlined text-gray-400">schedule</span>
                    Delivery: {service.duration}
                  </div>

                  <button
                    onClick={handleOrderClick}
                    className="mt-6 w-full rounded-xl bg-[#002045] hover:bg-[#001530] py-4 font-bold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Proceed to Order <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>

                  <p className="mt-4 text-center text-xs font-medium text-gray-500">
                    You must be logged in to place an order
                  </p>
                </div>

                {/* How It Works */}
                <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100 p-8">
                  <h3 className="mb-6 font-bold text-gray-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600">info</span>
                    How It Works
                  </h3>
                  <ol className="space-y-4 text-sm font-medium text-gray-700">
                    <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold shrink-0">1</span>
                      Place an order securely
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold shrink-0">2</span>
                      Make payment via portal
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold shrink-0">3</span>
                      Provider starts processing
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold shrink-0">4</span>
                      Receive deliverables
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
