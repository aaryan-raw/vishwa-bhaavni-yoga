"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

/** Monthly-notes signup. Demo only (no backend), same as the original page. */
export default function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubscribed(true);
    timer.current = setTimeout(() => {
      setSubscribed(false);
      form.reset();
    }, 2500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-3">
      <input
        required
        type="email"
        placeholder="you@email.com"
        className="flex-1 md:w-64 rounded-full border border-forest/15 dark:border-white/15 bg-warmwhite dark:bg-transparent px-5 py-3 text-sm focus:border-sand outline-none"
      />
      <button className="bg-forest dark:bg-sand text-warmwhite dark:text-forest px-6 py-3 rounded-full font-medium whitespace-nowrap hover:bg-forest-light dark:hover:bg-sand-light transition-colors">
        {subscribed ? "Subscribed ✓" : "Subscribe"}
      </button>
    </form>
  );
}
