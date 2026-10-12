import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { eveningSchedule, morningSchedule, scheduleNote } from "@/data/content";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-28 md:py-36 bg-warmwhite dark:bg-[#0f1a14]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Daily Schedule"
          title="Morning & evening batches"
          description="Timings are kept consistent through the week so practice becomes routine, not another thing to schedule."
        />

        <Reveal className="grid md:grid-cols-2 gap-8">
          <div className="bg-forest text-ivory rounded-4xl p-8 md:p-10 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A15C" strokeWidth="1.6">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
              </svg>
              <h3 className="font-display text-xl">Morning Batches</h3>
            </div>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-ivory/15">
                {morningSchedule.map((row) => (
                  <tr key={row.time}>
                    <td className="py-3 text-ivory/70">{row.time}</td>
                    <td className="py-3 text-right">{row.session}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-sage/15 dark:bg-white/5 border border-sage/30 dark:border-white/10 rounded-4xl p-8 md:p-10 shadow-soft">
            <div className="flex items-center gap-3 mb-6">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1F3D2E"
                strokeWidth="1.6"
                className="dark:stroke-ivory"
              >
                <path d="M20 14.5A8.5 8.5 0 119.5 4 7 7 0 0020 14.5Z" />
              </svg>
              <h3 className="font-display text-xl text-forest dark:text-ivory">Evening Batches</h3>
            </div>
            <table className="w-full text-sm text-forest dark:text-ivory">
              <tbody className="divide-y divide-forest/10 dark:divide-ivory/15">
                {eveningSchedule.map((row) => (
                  <tr key={row.time}>
                    <td className="py-3 text-forest/60 dark:text-ivory/60">{row.time}</td>
                    <td className="py-3 text-right">{row.session}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal as="p" className="text-center text-xs text-charcoal/50 dark:text-ivory/50 mt-6">
          {scheduleNote}
        </Reveal>
      </div>
    </section>
  );
}
