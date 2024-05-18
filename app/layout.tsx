import '@/app/ui/global.css';
import { Inter, Lusitana } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export {lusitana};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
