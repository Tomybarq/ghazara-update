import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import Chatbot from '../chat/Chatbot';
import { LanguageProvider } from '@/context/LanguageContext';

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-inter">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
}