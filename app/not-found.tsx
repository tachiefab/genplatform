import { ArrowLeft, Cpu } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col items-center justify-center px-6">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-school via-brand-note to-brand-guard flex items-center justify-center mb-6 opacity-50">
        <Cpu className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-5xl font-bold text-text-primary mb-2">404</h1>
      <p className="text-text-secondary text-sm mb-8">
        This page doesn&apos;t exist in the GenPlatform infrastructure.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 bg-surface border border-border hover:border-border-light px-5 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}