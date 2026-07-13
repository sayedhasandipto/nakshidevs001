import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import CategoriesGrid from '@/components/home/CategoriesGrid';
import BusinessScaleup from '@/components/home/BusinessScaleup';
import TrustIndicators from '@/components/home/TrustIndicators';
import Footer from '@/components/home/Footer';

export const metadata = {
  title: 'GovService BD | আপনার প্রয়োজনীয় সকল অনলাইন সেবা',
  description: 'GovService BD - সরকারি আবেদন থেকে ব্যবসার ওয়েবসাইট তৈরি সবকিছু এক জায়গায়। স্বচ্ছতা এবং দ্রুততার সাথে নাগরিক সেবা গ্রহণ করুন।',
  icons: {
    icon: '/icon.svg',
  },
};

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />
      <main className="w-full">
        <HeroSection />
        <StatsCounter />
        <CategoriesGrid />
        <BusinessScaleup />
        <TrustIndicators />
      </main>
      <Footer />
    </div>
  );
}
