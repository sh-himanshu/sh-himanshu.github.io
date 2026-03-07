export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute inset-0 opacity-60 mix-blend-screen motion-reduce:hidden">
        <div
          className="absolute left-[-10%] hidden h-[48%] w-[48%] rounded-full bg-[#0078d4]/18 blur-[110px] sm:block"
          style={{ animation: "pulse-slow 12s ease-in-out infinite alternate" }}
        />
        <div
          className="absolute top-[24%] right-[-8%] h-[52%] w-[34%] rounded-full bg-cyan-500/12 blur-[110px]"
          style={{
            animation:
              "pulse-slower 14s ease-in-out infinite alternate-reverse",
          }}
        />
        <div
          className="absolute bottom-[-12%] left-[18%] h-[42%] w-[56%] rounded-full bg-teal-500/10 blur-[120px]"
          style={{ animation: "pulse-slow 16s ease-in-out infinite alternate" }}
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}
