import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "LinkedIn MUI Clone",
  description: "MUI Assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}