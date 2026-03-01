"use client";

import { useState } from "react";
import { X, Menu, Mail, ExternalLink, Shield, GraduationCap, Mic } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="flex items-center gap-1.5 text-sm text-text-secondary bg-surface border border-border px-3 py-1.5 rounded-lg"
      >
        <Menu className="w-4 h-4" />
        Menu
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 z-[101] h-full w-[300px] bg-background border-l border-border transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="text-sm font-semibold text-text-primary">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center"
          >
            <X className="w-4 h-4 text-text-secondary" />
          </button>
        </div>

        <nav className="p-6 space-y-2">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
            Products
          </span>
          <a
            href="#products"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-guard/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-brand-guard" />
            </div>
            <div>
              <span className="text-sm font-medium text-text-primary block">GenGuard</span>
              <span className="text-[11px] text-text-tertiary">WhatsApp fraud detection</span>
            </div>
          </a>
          <a
            href="https://genschool.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-school/10 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-brand-school" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-medium text-text-primary flex items-center gap-1">
                GenSchool <ExternalLink className="w-2.5 h-2.5 text-text-tertiary" />
              </span>
              <span className="text-[11px] text-text-tertiary">Institutional management</span>
            </div>
          </a>
          <a
            href="https://gennote.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-note/10 flex items-center justify-center">
              <Mic className="w-4 h-4 text-brand-note" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-medium text-text-primary flex items-center gap-1">
                GenNote <ExternalLink className="w-2.5 h-2.5 text-text-tertiary" />
              </span>
              <span className="text-[11px] text-text-tertiary">AI voice transcription</span>
            </div>
          </a>

          <div className="pt-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
              Company
            </span>
          </div>
          <a
            href="#trust"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors text-sm text-text-secondary"
          >
            Infrastructure
          </a>
          <a
            href="/privacy"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors text-sm text-text-secondary"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors text-sm text-text-secondary"
          >
            Terms of Service
          </a>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <a
            href="mailto:musah@genplatform.io"
            className="flex items-center justify-center gap-2 bg-text-primary text-background w-full py-3 rounded-lg font-medium text-sm"
          >
            <Mail className="w-4 h-4" />
            Contact HQ
          </a>
        </div>
      </div>
    </div>
  );
}