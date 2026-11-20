import {getLenis} from "@/hooks/useLenis";

/** Section ids on the one-page site, used by the navigation menus. */
export type SectionId = "top" | "about" | "works" | "faq" | "contact";

/**
 * Smoothly scrolls to a section on the page (or to the top with "top").
 * Uses Lenis when it is running, otherwise the browser's own smooth scroll.
 * On phones/tablets it leaves room for the sticky mobile header.
 */
const scrollTo = (id: SectionId | string) => {
    const lenis = getLenis();

    if (id === "top") {
        if (lenis) lenis.scrollTo(0, {duration: 2});
        else window.scrollTo({top: 0, behavior: "smooth"});
        return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    const mobileHeader = document.querySelector<HTMLElement>("[data-mobile-nav]");
    const headerHeight = mobileHeader && mobileHeader.offsetParent ? mobileHeader.offsetHeight : 0;

    if (lenis) {
        lenis.scrollTo(target, {duration: 2, offset: -headerHeight});
    } else {
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({top, behavior: "smooth"});
    }
};

export default scrollTo;
