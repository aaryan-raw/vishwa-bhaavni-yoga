import type { IconName } from "@/data/content";

const ICON_PATHS: Record<IconName, React.ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" />
    </>
  ),
  leaf: <path d="M4 20c8-1 14-7 15-15C10 6 5 12 4 20Z" />,
  circle: <circle cx="12" cy="12" r="8" />,
  wind: <path d="M4 8h11a2.5 2.5 0 100-5M4 16h13a2.5 2.5 0 110 5M4 12h16" />,
  heart: <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0113 0M16 8.2A3.2 3.2 0 1119.5 5M15 13.5a5.7 5.7 0 016.5 6.5" />
    </>
  ),
};

/** Line icons used by the "Why choose us" cards. */
export default function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  );
}
