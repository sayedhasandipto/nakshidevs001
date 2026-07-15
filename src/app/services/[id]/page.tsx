'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/layout/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/services/${params.id}`);
      if (!response.ok) throw new Error('Failed to fetch service');
      const data = await response.json();
      setService(data.service);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOrderClick = () => {
    router.push('/auth/login');
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading service...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !service) {
    return (
      <>
        <Navigation />
        <div className="flex min-h-screen items-center justify-center bg-red-50 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Service Not Found</h1>
            <p className="mt-4 text-gray-600">{error || 'The service you are looking for does not exist.'}</p>
            <Link
              href="/services"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
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
      <Navigation />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="h-96 bg-gradient-to-br from-blue-100 to-indigo-100"></div>

        {/* Main Content */}
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase text-blue-600">
                    {service.category}
                  </p>
                  <h1 className="mt-2 text-4xl font-bold text-gray-900">
                    {service.title}
                  </h1>
                </div>

                {/* Rating */}
                <div className="mb-6 flex items-center space-x-4 border-b pb-6">
                  <div>
                    <p className="text-sm text-gray-600">Rating</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {service.rating || 0}★
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Reviews</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {service.reviews || 0}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">About This Service</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <div className="mb-8">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">What&apos;s Included</h2>
                    <div className="grid gap-3 md:grid-cols-2">
                      {service.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="mt-1 flex-shrink-0">
                            <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Provider Info */}
                {service.providerId && (
                  <div className="rounded-lg bg-blue-50 p-6">
                    <h2 className="mb-4 text-xl font-bold text-gray-900">About the Provider</h2>
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full bg-blue-200"></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {service.providerId.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {service.providerId.rating}★ ({service.providerId.reviews || 0} reviews)
                        </p>
                        {service.providerId.bio && (
                          <p className="mt-2 text-sm text-gray-600">
                            {service.providerId.bio}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Price Card */}
                <div className="rounded-lg bg-white p-8 shadow-md">
                  <p className="text-sm text-gray-600">Service Price</p>
                  <p className="mt-2 text-5xl font-bold text-gray-900">
                    ৳{service.price}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Delivery: {service.duration}
                  </p>

                  <button
                    onClick={handleOrderClick}
                    className="mt-6 w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white hover:from-blue-700 hover:to-indigo-700"
                  >
                    Order Now
                  </button>

                  <p className="mt-4 text-center text-xs text-gray-600">
                    You must be logged in to place an order
                  </p>
                </div>

                {/* Contact Card */}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 font-semibold text-gray-900">Have Questions?</h3>
                  <button className="w-full rounded-lg border border-blue-600 px-4 py-2 text-center font-semibold text-blue-600 hover:bg-blue-50">
                    Contact Provider
                  </button>
                </div>

                {/* How It Works */}
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-4 font-semibold text-gray-900">How It Works</h3>
                  <ol className="space-y-3 text-sm text-gray-700">
                    <li className="flex space-x-3">
                      <span className="font-bold text-blue-600">1</span>
                      <span>Place an order</span>
                    </li>
                    <li className="flex space-x-3">
                      <span className="font-bold text-blue-600">2</span>
                      <span>Make payment</span>
                    </li>
                    <li className="flex space-x-3">
                      <span className="font-bold text-blue-600">3</span>
                      <span>Provider starts work</span>
                    </li>
                    <li className="flex space-x-3">
                      <span className="font-bold text-blue-600">4</span>
                      <span>Receive deliverables</span>
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
