import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aatif's Portfolio",
  description: "Aatif's portfolio created using Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
