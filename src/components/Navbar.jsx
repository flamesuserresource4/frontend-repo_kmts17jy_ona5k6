import { Menu, X, Rocket, LineChart, MonitorSmartphone, Megaphone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-fuchsia-500/40 to-blue-500/40 blur-md group-hover:opacity-100 opacity-60 transition" />
                <div className="relative grid h-10 w-10 place-content-center rounded-lg bg-slate-800 text-fuchsia-300 ring-1 ring-white/10">
                  <Rocket className="h-5 w-5" />
                </div>
              </div>
              <div>
                <p className="text-sm leading-none text-slate-300">Flames</p>
                <p className="font-semibold tracking-tight text-white">Blue Ad Co.</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="text-slate-300/80 hover:text-white transition text-sm">
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-600 px-4 py-2 text-white shadow-lg shadow-fuchsia-600/20 hover:shadow-fuchsia-600/30">
                <Megaphone className="h-4 w-4" /> Start a campaign
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((n) => (
                  <a key={n.label} href={n.href} className="text-slate-300/90 hover:text-white transition text-sm">
                    {n.label}
                  </a>
                ))}
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-600 px-4 py-2 text-white shadow-lg">
                  <Megaphone className="h-4 w-4" /> Start a campaign
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
