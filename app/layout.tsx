import ReactQueryProviders from "../lib/providers/QueryProvider";
import "./globals.scss";
import Header from "@/components/ui/rootHeader/Rootheader";
import Footer from "@/components/ui/rootFooter/RootFooter";

export const metadata = {
  title: "약알고",
  description: "당신의 약에 대해 알려드립니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <ReactQueryProviders>{children}</ReactQueryProviders>
        <Footer />
      </body>
    </html>
  );
}
