import "./globals.css";
import { ThemeProvider } from "./ThemeContext/theme";
export const metadata = {
  title: "David.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-linear-to-br from-slate-900 via-slate-800 to-slate-900`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
