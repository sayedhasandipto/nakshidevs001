'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/home/Header';
import Link from 'next/link';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [servicesData, setServicesData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${API_URL}/api/services`);
        if (res.ok) {
          const json = await res.json();
          setServicesData(json.data || []);
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  const categories = [
    'all',
    'government',
    'business',
    'healthcare',
    'education',
    'finance',
    'legal',
    'technical',
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <>
      <Header />

      <div className="bg-gradient-to-br from-[#001830] via-[#002045] to-[#0a1628] px-4 pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="mx-auto max-w-7xl relative z-10 text-center md:text-left">
          <h1 className="text-balance text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Available Services
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Browse and order from our comprehensive service offerings. Premium solutions tailored for your needs.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div>
                <h3 className="text-xl font-bold text-[#002045] flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-600">filter_list</span>
                  Categories
                </h3>
                <div className="mt-6 flex flex-col gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full rounded-xl px-5 py-3 text-left capitalize transition-all duration-200 font-medium ${
                        selectedCategory === category
                          ? 'bg-[#002045] text-white shadow-md'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category === 'all' ? 'All Services' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Services Grid */}
          <div className="lg:col-span-3">
            <div className="grid gap-8 md:grid-cols-2">
              {isLoading ? (
                // Loading Skeleton
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-2xl border border-gray-100 bg-white p-8 animate-pulse">
                    <div className="h-6 w-24 bg-gray-200 rounded-full mb-4"></div>
                    <div className="h-8 w-3/4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded mb-6"></div>
                    <div className="space-y-3 mb-8">
                      <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                      <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-12 w-full bg-gray-200 rounded-xl mt-auto"></div>
                  </div>
                ))
              ) : (
                filteredServices.map((service) => (
                  <div
                    key={service.serviceId}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 inline-block px-3 py-1 bg-blue-50 rounded-full">
                          {service.category}
                        </p>
                        <h3 className="text-2xl font-bold text-[#002045] mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                          {service.description}
                        </p>

                        <div className="mt-6 space-y-3">
                          {service.features.slice(0, 3).map((feature: string, i: number) => (
                            <div key={i} className="flex items-center space-x-3 text-sm text-gray-700 font-medium">
                              <span className="material-symbols-outlined text-[#0a6c44] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <p className="text-3xl font-extrabold text-[#002045]">৳{service.price}</p>
                            <p className="text-sm font-medium text-gray-500 mt-1 flex items-center gap-1">
                               <span className="material-symbols-outlined text-sm">schedule</span> {service.duration}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-amber-500 flex items-center gap-1 justify-end">
                              {service.rating} <span>★</span>
                            </p>
                            <p className="text-xs font-medium text-gray-500 mt-1">{service.reviews} reviews</p>
                          </div>
                        </div>

                        <Link
                          href={`/services/${service.serviceId}`}
                          className="block w-full rounded-xl bg-blue-600 hover:bg-blue-700 px-4 py-3.5 text-center font-bold text-white transition-all shadow-md hover:shadow-lg group-hover:-translate-y-0.5"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {!isLoading && filteredServices.length === 0 && (
              <div className="rounded-2xl border border-gray-100 bg-white p-16 text-center shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-4xl text-gray-400">search_off</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Services Found</h3>
                <p className="text-gray-500">There are currently no services available in this category.</p>
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className="mt-6 text-blue-600 font-semibold hover:underline"
                >
                  View all services
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
