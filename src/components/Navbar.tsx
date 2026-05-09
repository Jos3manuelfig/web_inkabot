import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#beneficios", label: "Beneficios" },
    { href: "#como-funciona", label: "Cómo Funciona" },
    { href: "#demo", label: "Demo" },
    { href: "#planes", label: "Planes" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-4xl">
      <div className="glass-card rounded-full px-6 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="neon-text">INKA</span>BOT
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.inkabot.online/login"
            className="text-sm font-semibold text-primary-foreground bg-primary px-4 py-2 rounded-full hover:shadow-[0_0_20px_hsl(147_100%_50%/0.4)] transition-all duration-300"
          >
            Comenzar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="glass-card mt-2 rounded-2xl p-4 md:hidden animate-fade-up-blur">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.inkabot.online/login"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center font-semibold text-primary-foreground bg-primary px-4 py-2 rounded-full"
          >
            Comenzar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
