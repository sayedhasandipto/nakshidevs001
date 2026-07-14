import GovHeader from '@/components/govservices/GovHeader';
import GovHero from '@/components/govservices/GovHero';
import ServiceCards from '@/components/govservices/ServiceCards';
import GovAdditionalInfo from '@/components/govservices/GovAdditionalInfo';
import GovFooter from '@/components/govservices/GovFooter';

export const metadata = {
  title: 'GovService BD | সরকারি সেবা ডিরেক্টরি',
  description: 'বাংলাদেশের নাগরিকদের জন্য ডিজিটাল প্রশাসনিক সেবা। জন্ম নিবন্ধন, ভোটার আইডি, পাসপোর্ট এবং আরও অনেক সেবা।',
};

export default function GovServicesPage() {
  return (
    <>
      <GovHeader />
      <main className="max-w-6xl mx-auto px-6 py-12 min-h-screen bg-[#f8f9ff]">
        <GovHero />
        <ServiceCards />
        <GovAdditionalInfo />
      </main>
      <GovFooter />
    </>
  );
}
