export default function getDevice() {
  let width = 0;
  if (typeof window !== 'undefined') {
    width = window.innerWidth;
  }

  const isMobile = Boolean(width < 768);

  const isTablet = Boolean(!isMobile && width < 1024);

  const isDesktop = Boolean(!isMobile && !isTablet);

  return isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile';
}
