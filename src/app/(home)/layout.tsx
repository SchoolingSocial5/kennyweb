import React from 'react';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

