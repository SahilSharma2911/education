"use client";
import { usePathname } from "next/navigation";

/**
 * Wraps page content and re-triggers a subtle fade/slide-in animation on every
 * route change (keyed by pathname), so navigation feels smooth instead of the
 * content snapping in abruptly at the top.
 */
const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;
