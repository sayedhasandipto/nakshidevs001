'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const services = [
    {
      id: 1,
      title: 'Birth Certificate Registration',
      category: 'government',
      price: 500,
      duration: '5-7 days',
      rating: 4.8,
      reviews: 245,
      description: 'Complete birth certificate registration process with government agencies',
      features: ['Document preparation', 'Government liaison', 'Status tracking'],
    },
    {
      id: 2,
      title: 'Voter ID Card Application',
      category: 'government',
      price: 300,
      duration: '7-10 days',
      rating: 4.6,
      reviews: 189,
      description: 'Help with voter ID card registration and updates',
      features: ['Form filling', 'Document collection', 'Center visit assistance'],
    },
    {
      id: 3,
      title: 'Business Registration',
      category: 'business',
      price: 2000,
      duration: '15-20 days',
      rating: 4.9,
      reviews: 567,
      description: 'Complete business registration including trade license',
      features: ['Legal documentation', 'License preparation', 'Filing assistance'],
    },
    {
      id: 4,
      title: 'Job Application Assistance',
      category: 'business',
      price: 1000,
      duration: '3-5 days',
      rating: 4.7,
      reviews: 342,
      description: 'Professional CV and job application support',
      features: ['CV preparation', 'Cover letter', 'Interview coaching'],
    },
    {
      id: 5,
      title: 'Legal Consultation',
      category: 'legal',
      price: 1500,
      duration: '1-2 days',
      rating: 4.8,
      reviews: 421,
      description: 'Expert legal advice for personal and business matters',
      features: ['Document review', 'Legal advice', 'Contract drafting'],
    },
    {
      id: 6,
      title: 'Web Development',
      category: 'technical',
      price: 5000,
      duration: '30-45 days',
      rating: 4.9,
      reviews: 893,
      description: 'Professional website development for your business',
      features: ['Custom design', 'Responsive layout', 'SEO optimization'],
    },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <>
      <Navigation />

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-balance text-4xl font-bold text-gray-900 sm:text-5xl">
            Available Services
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Browse and order from our comprehensive service offerings
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
                <div className="mt-4 space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full rounded-lg px-4 py-2 text-left capitalize transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-100 text-blue-600 font-semibold'
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
            <div className="grid gap-6 md:grid-cols-2">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100"></div>

                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase text-blue-600">
                          {service.category}
                        </p>
                        <h3 className="mt-2 text-xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-3 text-gray-600">{service.description}</p>

                    <div className="mt-4 space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                      <div>
                        <p className="text-lg font-bold text-gray-900">৳{service.price}</p>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-semibold text-gray-900">
                            {service.rating}★
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{service.reviews} reviews</p>
                      </div>
                    </div>

                    <Link
                      href="/auth/login"
                      className="mt-4 block w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-center font-semibold text-white hover:from-blue-700 hover:to-indigo-700 transition-all"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
                <p className="text-gray-600">No services found in this category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
