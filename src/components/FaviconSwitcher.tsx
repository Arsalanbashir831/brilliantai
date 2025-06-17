// ──────────────────────────────
// src/components/FaviconSwitcher.tsx
'use client';
import { useEffect } from 'react';

const light = '/favicon-dark.png';
const dark  = '/favicon.png';

function setFavicon(href: string) {
  let link: HTMLLinkElement | null =
    document.querySelector("link[rel='icon']") ??
    document.querySelector("link[rel='shortcut icon']");

  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  if (link.href !== new URL(href, location.origin).href) link.href = href;
}

export default function FaviconSwitcher() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setFavicon(mq.matches ? dark : light);

    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return null;
}
