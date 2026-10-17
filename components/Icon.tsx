// Line icons drawn to match Phyco's thin-stroke icon set.
const paths: Record<string, React.ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  down: <path d="M12 5v14M6 13l6 6 6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  check: <path d="M5 12.5l4.2 4.2L19 7" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.3l2.7 2.7L16.2 9.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z" />
      <path d="M5 19l7-7" />
    </>
  ),
  cup: (
    <>
      <path d="M6 8h12l-1.2 7.2A5 5 0 0 1 11.9 19h0a5 5 0 0 1-4.9-3.8L6 8z" />
      <path d="M8 5h8" />
      <path d="M12 11v3" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14" rx="2" />
      <path d="M4 10h16M8 3.5v4M16 3.5v4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M15.5 5.6a3.2 3.2 0 0 1 0 6M17 13.6a5.5 5.5 0 0 1 3.5 5.4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.6 13.4L7.5 21l4.5-2.5 4.5 2.5-1.1-7.6" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" />
    </>
  ),
  notes: (
    <>
      <path d="M6 3.5h9l3.5 3.5v13.5H6z" />
      <path d="M15 3.5V7h3.5M9 11h6M9 14.5h6M9 18h4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="5" width="14" height="16" rx="2" />
      <path d="M9 3.5h6v3H9zM8.5 12l2 2 4-4M8.5 17.5h7" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
      <path d="M9 7.5V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v2M3.5 13h17" />
    </>
  ),
  chat: <path d="M5 5h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10l-4.5 3.5V17H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM8 10h8M8 13h5" />,
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5L21.5 20h-19z" />
      <path d="M12 10v4.5M12 17.2v.3" />
    </>
  ),
  talk: (
    <>
      <path d="M4 5.5h11a1 1 0 0 1 1 1V13a1 1 0 0 1-1 1H9l-3.5 3v-3H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1z" />
      <path d="M18 9h2a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1h-1.5v2.8L15.5 17.5H12a1 1 0 0 1-1-1V17" />
    </>
  ),
  clipboardList: (
    <>
      <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
      <path d="M9 3h6v3H9zM8.5 10.5h1M11.5 10.5h4M8.5 14h1M11.5 14h4M8.5 17.5h1M11.5 17.5h4" />
    </>
  ),
  hand: (
    <>
      <path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V5a1.5 1.5 0 0 1 3 0v6M14 11V6.5a1.5 1.5 0 0 1 3 0V14c0 4-2.7 7-6.5 7-2.6 0-4.1-1.3-5.6-3.4L3.5 15.2a1.6 1.6 0 0 1 2.4-2.1L8 15" />
    </>
  ),
  heart: <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z" />,
  seed: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4 2.5-7 7-7 0 4-2.5 7-7 7zM12 15c0-3.3-2.1-5.8-6-5.8 0 3.3 2.1 5.8 6 5.8z" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M6 3.5v5a4 4 0 0 0 8 0v-5" />
      <path d="M10 12.5v2.5a4.5 4.5 0 0 0 9 0v-2" />
      <circle cx="19" cy="11" r="2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.8" />
      <path d="M4.5 20.5a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 4c3.5 0 6 2.5 6 6-2 3.3-5 5.6-8 7l-5-5c1.4-3 3.7-6 7-8z" />
      <path d="M7 12l-3 1 2 4M12 17l-1 3-4-2M15 9h.01" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M16.8 7.2h.01" />
    </>
  ),
  facebook: <path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V9a.5.5 0 0 1 .5-.5z" />,
  whatsapp: (
    <>
      <path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.8 19z" />
      <path d="M9.2 8.6c.3-.6.8-.6 1-.2l.8 1.7c.1.3 0 .6-.2.8l-.5.5c.6 1.3 1.7 2.4 3 3l.5-.5c.2-.2.5-.3.8-.2l1.7.8c.4.2.4.7-.2 1-.9.6-2 .7-3.5-.1a8.8 8.8 0 0 1-3.6-3.6c-.6-1.4-.4-2.6.2-3.2z" />
    </>
  ),
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function Logo() {
  // Cup silhouette with a drop: the Cupheal mark, drawn in Phyco's olive/butter.
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="#fcde93" />
      <path d="M10 14h20l-2 10.5a8 8 0 0 1-7.9 6.5h-.2a8 8 0 0 1-7.9-6.5z" fill="#4a5640" />
      <path d="M13 10.5h14" stroke="#4a5640" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 17.5c1.9 2.4 2.8 4 2.8 5.2a2.8 2.8 0 0 1-5.6 0c0-1.2.9-2.8 2.8-5.2z" fill="#fcde93" />
    </svg>
  );
}
