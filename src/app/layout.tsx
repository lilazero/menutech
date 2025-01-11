import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import './globals.css';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { ThemeProvider } from '../components/theme-provider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/Navbar';
import FluidCursor from '@/components/ui/fluid-cursor';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MENUTECH',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <MaxWidthWrapper>
              <Navbar />
              {children}
            </MaxWidthWrapper>
            <footer className='fixed bottom-0 w-full z-50'>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </footer>
            <Toaster position='top-right' richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
