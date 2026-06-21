import "./globals.css";

export const metadata = {
  title: "Isabel Monserrat — Filipino Artist | Original Paintings",
  description: "Original oil paintings, watercolor and commissions by Isabel Monserrat, a Filipino artist from Tagaytay, Philippines. Browse her gallery and shop unique handcrafted artworks.",
  keywords: "Filipino artist, original paintings, oil painting, watercolor, art commissions, Philippines, Tagaytay, Isabel Monserrat",
  openGraph: {
    title: "Isabel Monserrat — Filipino Artist",
    description: "Original paintings and commissions by Isabel Monserrat, Filipino artist from Tagaytay, Philippines.",
    url: "https://isabelmonserrat.com",
    siteName: "Isabel Monserrat Art",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}