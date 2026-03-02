"use client";

import { useState, useEffect } from "react";
import {
  X,
  Menu,
  Mail,
  ExternalLink,
  Shield,
  GraduationCap,
  Mic,
} from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="md:hidden">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="flex items-center gap-1.5 text-sm text-text-secondary bg-surface border border-border px-3 py-1.5 rounded-lg active:scale-95 transition-transform"
      >
        <Menu className="w-4 h-4" />
        Menu
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide Panel */}
      <div
        className={`fixed top-0 right-0 z-[101] h-full w-[300px] transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#020617" }}
      >
        {/* Solid inner background to prevent any bleed-through */}
        <div
          className="h-full flex flex-col border-l border-border"
          style={{ backgroundColor: "#020617" }}
        >
          {/* Header with close button */}
          <div className="flex items-center justify-between p-5 border-b border-border">
            <span className="text-base font-semibold text-white">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center active:scale-95 transition-transform"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Scrollable Navigation */}
          <nav className="flex-1 overflow-y-auto p-5 space-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 block mb-3">
              Products
            </span>

            {/* GenGuard AI */}
            <a
              href="#products"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-guard/15 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4.5 h-4.5 text-brand-guard" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    GenGuard AI
                  </span>
                  <span className="text-[8px] font-semibold text-brand-guard bg-brand-guard/15 px-1.5 py-0.5 rounded-full">
                    Public Beta
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Fraud detection & KYC
                </span>
              </div>
            </a>

            {/* GenSchool */}
            <a
              href="mailto:musah@genplatform.io?subject=GenSchool%20Early%20Access"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-school/15 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4.5 h-4.5 text-brand-school" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    GenSchool
                  </span>
                  <span className="text-[8px] font-semibold text-brand-school bg-brand-school/15 px-1.5 py-0.5 rounded-full">
                    Early Access
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Institutional management
                </span>
              </div>
            </a>

            {/* GenNote */}
            <a
              href="https://gennote.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-note/15 flex items-center justify-center flex-shrink-0">
                <Mic className="w-4.5 h-4.5 text-brand-note" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">
                    GenNote
                  </span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                  <span className="text-[8px] font-semibold text-brand-note bg-brand-note/15 px-1.5 py-0.5 rounded-full">
                    Private Beta
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  AI voice transcription
                </span>
              </div>
            </a>

            {/* Divider */}
            <div className="pt-5 pb-2">
              <div className="w-full h-px bg-white/5" />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 block mb-3">
              Company
            </span>

            <a
              href="#trust"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
            >
              <span className="text-sm text-slate-300">Infrastructure</span>
            </a>
            <a
              href="/privacy"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
            >
              <span className="text-sm text-slate-300">Privacy Policy</span>
            </a>
            <a
              href="/terms"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
            >
              <span className="text-sm text-slate-300">Terms of Service</span>
            </a>
          </nav>

          {/* Fixed bottom CTA */}
          <div className="p-5 border-t border-white/10">
            <a
              href="mailto:musah@genplatform.io"
              className="flex items-center justify-center gap-2 bg-white text-black w-full py-3.5 rounded-xl font-semibold text-sm active:scale-[0.98] transition-transform"
            >
              <Mail className="w-4 h-4" />
              Contact HQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}