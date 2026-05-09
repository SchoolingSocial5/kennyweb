import React from 'react';
import Header from '@/components/home/Header';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="home-layout">
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

