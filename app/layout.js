import "./globals.css";
import { ThemeProvider } from "./ThemeContext/theme";
export const metadata = {
  title: "David.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
