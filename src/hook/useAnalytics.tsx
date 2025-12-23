// hooks/useAnalytics.ts
"use client";
import ReactGA from "react-ga4";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const useAnalytics = () => {
  useEffect(() => {
    if (GA_ID) {
      ReactGA.initialize(GA_ID);
    }
  }, []);

  const trackPageview = (url: string) => {
    if (!GA_ID) return;
    ReactGA.send({ hitType: "pageview", page: url });
  };

  const trackEvent = ({
    action,
    category,
    label,
    value,
  }: {
    action: string;
    category: string;
    label: string;
    value?: number;
  }) => {
    if (!GA_ID) return;
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
  };

  return { trackPageview, trackEvent };
};
