import type {Metadata} from "next";
import "./globals.css";
import LoadingOverlay from "./components/loadingOverlay";
import SmoothScroll from "./components/smoothScroll";
import ClientOnly from "./components/clientOnly";
import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata: Metadata = {
    title: "Hizkia Sihombing - Digital Design & Development",
    description: "I offer web design, branding, and visual identity services. I help service-based businesses build trust through design.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            {/* Keeps --page-w equal to the page width minus the scrollbar (used by the fluid rem scale in globals.css). */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(){var d=document.documentElement;function s(){d.style.setProperty('--page-w',d.clientWidth+'px')}s();addEventListener('resize',s);if(window.ResizeObserver)new ResizeObserver(s).observe(d);})();`,
                }}
            />
        </head>
        <body className="bg-white text-black font-Helvetica ">
        <LoadingOverlay/>
        <ClientOnly>
            <SmoothScroll/>
        </ClientOnly>
        <TooltipProvider>{children}</TooltipProvider>


        </body>

        </html>
    );
}
