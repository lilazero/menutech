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
import Navbar from './components/Navbar';
import MaxWidthWrapper from './components/MaxWidthWrapper';

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
          <MaxWidthWrapper>{children}</MaxWidthWrapper>
          <footer>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
