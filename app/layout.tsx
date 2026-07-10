import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "LinkedIn MUI Clone",
  description: "MUI Assessment",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}