"use client";

import {
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  FileText,
  GraduationCap,
  Home,
  Mic,
  MoreVertical,
  Phone,
  Search,
  Send,
  Settings,
  Shield,
  ShieldAlert,
  Users,
  Video,
  Wifi,
  BatteryMedium,
  Signal,
  Calendar,
  Bell,
} from "lucide-react";

export function GuardChat() {
  return (
    <div className="animate-float w-full max-w-[340px] mx-auto select-none">
      <div className="rounded-[24px] border border-border-light/40 bg-[#0b1014] overflow-hidden shadow-2xl shadow-brand-guard/5">
        <div className="flex items-center justify-between px-5 pt-2.5 pb-1 text-[10px] text-text-secondary">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <BatteryMedium className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="flex items-center gap-3 bg-[#111b21] px-3 py-2.5 border-b border-[#222d35]">
          <ChevronLeft className="w-5 h-5 text-brand-guard" />
          <div className="w-9 h-9 rounded-full bg-brand-guard/20 border border-brand-guard/30 flex items-center justify-center flex-shrink-0">
            <Shield className="w-4 h-4 text-brand-guard" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-text-primary truncate">GenGuard Bot</span>
              <Check className="w-3.5 h-3.5 text-brand-guard flex-shrink-0" />
            </div>
            <span className="text-[11px] text-brand-guard/80">Business Account · Online</span>
          </div>
          <div className="flex items-center gap-3 text-text-tertiary">
            <Video className="w-4 h-4" />
            <Phone className="w-4 h-4" />
            <MoreVertical className="w-4 h-4" />
          </div>
        </div>
        <div className="bg-[#0b1014] px-3 py-4 space-y-3 min-h-[240px] relative">
          <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid pointer-events-none" />
          <div className="flex justify-center">
            <span className="text-[10px] bg-[#1a2530] text-text-tertiary px-3 py-0.5 rounded-md">Today</span>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#005c4b] rounded-lg rounded-tr-sm px-3 py-2 max-w-[220px] shadow-sm">
              <p className="text-[13px] text-text-primary leading-relaxed">Verify +1 (555) 153-9678</p>
              <div className="flex items-center justify-end gap-1 mt-0.5">
                <span className="text-[10px] text-emerald-300/60">9:41</span>
                <CheckCheck className="w-3.5 h-3.5 text-emerald-300/60" />
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#1a2530] rounded-lg rounded-tl-sm px-3 py-2.5 max-w-[260px] shadow-sm border border-[#222d35]/50">
              <div className="flex items-center gap-1.5 mb-2">
                <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">High Risk</span>
              </div>
              <p className="text-[13px] text-text-primary leading-relaxed">
                🔍 <span className="font-semibold">Risk Analysis Complete</span>
              </p>
              <div className="mt-2 space-y-1.5 text-[12px]">
                <div className="flex justify-between items-center">
                  <span className="text-text-tertiary">Carrier</span>
                  <span className="text-amber-400 font-medium">VoIP</span>
                </div>
                <div className="w-full h-px bg-[#222d35]" />
                <div className="flex justify-between items-center">
                  <span className="text-text-tertiary">Community Flags</span>
                  <span className="text-red-400 font-semibold">12</span>
                </div>
                <div className="w-full h-px bg-[#222d35]" />
                <div className="flex justify-between items-center">
                  <span className="text-text-tertiary">Fraud Score</span>
                  <div className="flex items-center gap-1">
                    <div className="w-12 h-1.5 bg-[#1e293b] rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-gradient-to-r from-amber-500 to-red-500 rounded-full" />
                    </div>
                    <span className="text-red-400 font-semibold">85%</span>
                  </div>
                </div>
                <div className="w-full h-px bg-[#222d35]" />
                <div className="flex justify-between items-center">
                  <span className="text-text-tertiary">Verdict</span>
                  <span className="text-red-400 font-medium">⛔ Block</span>
                </div>
              </div>
              <div className="flex items-center justify-end mt-2">
                <span className="text-[10px] text-text-tertiary">9:41</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#111b21] px-3 py-2.5 border-t border-[#222d35]">
          <div className="flex-1 bg-[#1a2530] rounded-full px-4 py-2 flex items-center">
            <span className="text-[13px] text-text-tertiary">Type a number to verify...</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-brand-guard flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-guard/20">
            <Send className="w-4 h-4 text-white translate-x-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SchoolDashboard() {
  return (
    <div className="animate-float-delayed w-full max-w-[360px] mx-auto select-none">
      <div className="rounded-t-xl border border-border-light/50 border-b-0 overflow-hidden bg-[#0a0f1a] shadow-2xl shadow-brand-school/5">
        <div className="flex items-center gap-2 px-3 py-2 bg-[#0c1220] border-b border-[#1a2440]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-[#111827] rounded-md px-4 py-1 text-[10px] text-text-tertiary flex items-center gap-1.5 border border-[#1e293b]/50 max-w-[180px] w-full justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-school/30 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-brand-school" />
              </div>
              {/* genschool.app/dashboard */}
            </div>
          </div>
          <div className="w-10" />
        </div>
        <div className="flex min-h-[200px]">
          <div className="w-[52px] bg-[#080d17] border-r border-[#1a2440] py-3 flex flex-col items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-brand-school/20 flex items-center justify-center mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-brand-school" />
            </div>
            <div className="w-7 h-7 rounded-lg bg-brand-school/10 flex items-center justify-center border border-brand-school/20">
              <Home className="w-3.5 h-3.5 text-brand-school" />
            </div>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center">
              <Users className="w-3.5 h-3.5 text-text-tertiary" />
            </div>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center">
              <FileText className="w-3.5 h-3.5 text-text-tertiary" />
            </div>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5 text-text-tertiary" />
            </div>
            <div className="mt-auto w-7 h-7 rounded-lg flex items-center justify-center">
              <Settings className="w-3.5 h-3.5 text-text-tertiary" />
            </div>
          </div>
          <div className="flex-1 p-3 bg-[#0a0f1a]">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-[11px] font-semibold text-text-primary">Dashboard</h3>
                <p className="text-[9px] text-text-tertiary">Term 2 · 2024/2025</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-[#111827] flex items-center justify-center border border-[#1e293b]/50">
                  <Search className="w-3 h-3 text-text-tertiary" />
                </div>
                <div className="w-6 h-6 rounded-md bg-[#111827] flex items-center justify-center border border-[#1e293b]/50 relative">
                  <Bell className="w-3 h-3 text-text-tertiary" />
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand-school" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-[#111827] rounded-lg p-2.5 border border-[#1e293b]/40">
                <div className="flex items-center gap-1 mb-1.5">
                  <div className="w-4 h-4 rounded bg-brand-school/20 flex items-center justify-center">
                    <Users className="w-2.5 h-2.5 text-brand-school" />
                  </div>
                  <span className="text-[8px] text-text-tertiary uppercase tracking-wider">Students</span>
                </div>
                <span className="text-sm font-bold text-text-primary block">1,247</span>
                <div className="flex items-center gap-0.5 mt-1">
                  <div className="text-[8px] text-brand-guard bg-brand-guard/10 px-1 rounded">+12%</div>
                </div>
              </div>
              <div className="bg-[#111827] rounded-lg p-2.5 border border-[#1e293b]/40">
                <div className="flex items-center gap-1 mb-1.5">
                  <div className="w-4 h-4 rounded bg-violet-500/20 flex items-center justify-center">
                    <GraduationCap className="w-2.5 h-2.5 text-violet-400" />
                  </div>
                  <span className="text-[8px] text-text-tertiary uppercase tracking-wider">Staff</span>
                </div>
                <span className="text-sm font-bold text-text-primary block">84</span>
                <div className="flex items-center gap-0.5 mt-1">
                  <div className="text-[8px] text-brand-guard bg-brand-guard/10 px-1 rounded">+3</div>
                </div>
              </div>
              <div className="bg-[#111827] rounded-lg p-2.5 border border-[#1e293b]/40">
                <div className="flex items-center gap-1 mb-1.5">
                  <div className="w-4 h-4 rounded bg-amber-500/20 flex items-center justify-center">
                    <DollarSign className="w-2.5 h-2.5 text-amber-400" />
                  </div>
                  <span className="text-[8px] text-text-tertiary uppercase tracking-wider">Revenue</span>
                </div>
                <span className="text-sm font-bold text-text-primary block">₵54K</span>
                <div className="flex items-center gap-0.5 mt-1">
                  <div className="text-[8px] text-brand-guard bg-brand-guard/10 px-1 rounded">+8%</div>
                </div>
              </div>
            </div>
            <div className="bg-[#111827] rounded-lg p-2.5 border border-[#1e293b]/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-medium text-text-secondary">Enrollment Trend</span>
                <span className="text-[8px] text-text-tertiary">Last 7 months</span>
              </div>
              <div className="flex items-end gap-1.5 h-[40px]">
                {[40, 55, 45, 65, 58, 72, 85].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 6
                          ? "linear-gradient(to top, #4338ca, #6366f1)"
                          : "rgba(99, 102, 241, 0.15)",
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["J", "F", "M", "A", "M", "J", "J"].map((m, i) => (
                  <span key={i} className="text-[7px] text-text-tertiary flex-1 text-center">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="h-[10px] bg-gradient-to-b from-[#1a2440] to-[#111827] rounded-b-lg mx-2 border-x border-b border-border-light/30" />
        <div className="h-[4px] bg-[#0c1220] rounded-b-xl mx-0 border-x border-b border-border-light/20" />
      </div>
    </div>
  );
}

export function NoteMobile() {
  return (
    <div className="animate-float-slow w-full max-w-[200px] mx-auto select-none">
      <div className="rounded-[28px] border-2 border-border-light/30 bg-[#0a0a14] overflow-hidden shadow-2xl shadow-brand-note/5 p-[3px]">
        <div className="rounded-[24px] overflow-hidden bg-[#0a0a14]">
          <div className="flex items-center justify-between px-5 pt-2 pb-1">
            <span className="text-[9px] font-semibold text-text-secondary">9:41</span>
            <div className="w-16 h-[14px] bg-black rounded-full" />
            <div className="flex items-center gap-0.5">
              <Signal className="w-2.5 h-2.5 text-text-secondary" />
              <Wifi className="w-2.5 h-2.5 text-text-secondary" />
              <BatteryMedium className="w-3 h-3 text-text-secondary" />
            </div>
          </div>
          <div className="px-4 pt-2 pb-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[14px] font-bold text-text-primary">GenNote</h3>
                <p className="text-[9px] text-text-tertiary">3 recordings today</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-brand-note/20 flex items-center justify-center">
                <Settings className="w-3 h-3 text-brand-note" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-5 px-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full animate-pulse_mic" />
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-brand-note to-brand-note-dim p-[2px] shadow-lg shadow-brand-note/30">
                <div className="w-full h-full rounded-full bg-[#0a0a14] flex items-center justify-center">
                  <Mic className="w-7 h-7 text-brand-note" />
                </div>
              </div>
            </div>
            <p className="text-[10px] text-text-tertiary mt-3">Tap to record</p>
            <div className="flex items-center gap-[2px] mt-2 h-4">
              {[3, 6, 10, 14, 10, 16, 12, 8, 14, 10, 6, 8, 12, 6, 4].map((h, i) => (
                <div
                  key={i}
                  className="w-[2px] rounded-full bg-brand-note/40"
                  style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider">Recent Notes</span>
              <ChevronRight className="w-3 h-3 text-text-tertiary" />
            </div>
            <div className="space-y-1.5">
              <div className="bg-[#111127] rounded-lg p-2.5 border border-[#1e1e3a]/50">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-brand-note/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <FileText className="w-2.5 h-2.5 text-brand-note" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-medium text-text-primary truncate">Product standup meeting</p>
                    <p className="text-[8px] text-text-tertiary mt-0.5">12 min · Transcribed</p>
                  </div>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    <Clock className="w-2.5 h-2.5 text-text-tertiary" />
                    <span className="text-[8px] text-text-tertiary">2h</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#111127] rounded-lg p-2.5 border border-[#1e1e3a]/50">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-violet-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <FileText className="w-2.5 h-2.5 text-violet-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-medium text-text-primary truncate">Investor pitch notes</p>
                    <p className="text-[8px] text-text-tertiary mt-0.5">8 min · Transcribed</p>
                  </div>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    <Clock className="w-2.5 h-2.5 text-text-tertiary" />
                    <span className="text-[8px] text-text-tertiary">5h</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#111127] rounded-lg p-2.5 border border-[#1e1e3a]/50">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-indigo-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Mic className="w-2.5 h-2.5 text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-medium text-text-primary truncate">Quick voice memo</p>
                    <p className="text-[8px] text-text-tertiary mt-0.5">1 min · Processing...</p>
                  </div>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-note animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around py-2 px-4 border-t border-[#1e1e3a]/50">
            <div className="flex flex-col items-center gap-0.5">
              <Home className="w-3.5 h-3.5 text-brand-note" />
              <span className="text-[7px] text-brand-note">Home</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Search className="w-3.5 h-3.5 text-text-tertiary" />
              <span className="text-[7px] text-text-tertiary">Search</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <FileText className="w-3.5 h-3.5 text-text-tertiary" />
              <span className="text-[7px] text-text-tertiary">Notes</span>
            </div>
          </div>
          <div className="flex justify-center pb-2 pt-1">
            <div className="w-24 h-1 rounded-full bg-text-tertiary/30" />
          </div>
        </div>
      </div>
    </div>
  );
}