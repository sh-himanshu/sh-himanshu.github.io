import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Major_Mono_Display, Poppins } from 'next/font/google';
import './globals.css';

// Add Poppins and Major Mono Display
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const majorMono = Major_Mono_Display({
  variable: '--font-major-mono',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Himanshu | Frontend Developer',
  description: 'Portfolio of Himanshu, a passionate frontend developer crafting modern, responsive, and user-friendly web experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${majorMono.variable} font-poppins antialiased transition-colors duration-300`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
