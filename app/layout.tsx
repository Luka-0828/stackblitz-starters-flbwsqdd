import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cute Website",
  description: "Feminine one-page site with chat widget",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {children}

        {/* --- TAWK.TO CHAT WIDGET --- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),
                s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6928b7e4d2c96d1966c336c6/1jb3gsm8t';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        {/* --- END CHAT WIDGET --- */}

      </body>
    </html>
  );
}