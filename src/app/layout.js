import { barlow } from '@/app/ui/fonts';
import "./globals.css";
import { Provider } from "@/components/chakra-ui/provider";
import { Navbar } from '@/components/atomic/organisms/navbar';
import './ui/globalicons.css'; 
import BackgroundParticles from '@/components/atomic/atoms/background-particles';
import Footer from '@/components/atomic/organisms/footer';

export const metadata = {
  title: "Social Media Analytics",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${barlow.className} antialiased`}
      >
        <Provider>
          <div className='relative bg-gradient-to-b from-secondary to-[#005e63] w-screen max-w-screen-2xl mx-auto'>
            <BackgroundParticles />
            <Navbar />
            <main className='min-h-screen'>
              {children}
            </main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
