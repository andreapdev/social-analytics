import { barlow } from '@/app/ui/fonts';
import "./globals.css";
import { Provider } from "@/components/ui/provider";

export const metadata = {
  title: "Social Media Analytics",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${barlow.className} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
