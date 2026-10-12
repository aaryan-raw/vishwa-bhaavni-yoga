"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { trialProgramOptions } from "@/data/content";

const FIELD_CLASS =
  "mt-2 w-full rounded-xl border border-forest/15 dark:border-white/15 bg-warmwhite dark:bg-transparent px-4 py-3 text-sm focus:border-sand outline-none";

/**
 * "Book your free trial" form.
 *
 * NOTE: like the original page, this has no backend — submitting shows the
 * confirmation message and clears the form, but nothing is sent anywhere.
 * See README.md ("Forms") for how to connect a real endpoint.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    setSubmitted(true);
    (event.currentTarget as HTMLFormElement).reset();
  };

  return (
    <Reveal
      as="form"
      onSubmit={handleSubmit}
      className="bg-ivory dark:bg-white/5 border border-forest/10 dark:border-white/10 rounded-4xl p-8 md:p-10 shadow-card flex flex-col gap-5"
    >
      <h3 className="font-display text-2xl text-forest dark:text-ivory mb-1">Book your free trial</h3>
      <p className="text-sm text-charcoal/60 dark:text-ivory/60 -mt-3">
        We&apos;ll reply within a few hours to confirm your slot.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="text-sm text-forest/80 dark:text-ivory/80">
          Full name
          <input required type="text" name="name" className={FIELD_CLASS} placeholder="Your name" />
        </label>
        <label className="text-sm text-forest/80 dark:text-ivory/80">
          Phone number
          <input required type="tel" name="phone" className={FIELD_CLASS} placeholder="+91" />
        </label>
      </div>

      <label className="text-sm text-forest/80 dark:text-ivory/80">
        Interested program
        <select name="program" className={FIELD_CLASS}>
          {trialProgramOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="text-sm text-forest/80 dark:text-ivory/80">
        Message <span className="text-charcoal/40 dark:text-ivory/40">(optional)</span>
        <textarea
          name="message"
          rows={3}
          className={FIELD_CLASS}
          placeholder="Tell us a little about your goals or any injuries we should know about"
        ></textarea>
      </label>

      <button
        type="submit"
        className="mt-1 bg-forest dark:bg-sand text-warmwhite dark:text-forest font-semibold py-3.5 rounded-full hover:bg-forest-light dark:hover:bg-sand-light transition-colors"
      >
        Request My Free Trial
      </button>
      {submitted && (
        <p
          role="status"
          className="text-sm text-forest dark:text-sand bg-sage/15 dark:bg-white/5 rounded-xl px-4 py-3"
        >
          Thank you — we&apos;ve received your request and will call you shortly.
        </p>
      )}
    </Reveal>
  );
}
