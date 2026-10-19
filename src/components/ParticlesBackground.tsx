import { memo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const particleOptions: ISourceOptions = {
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 },
      push: { quantity: 3 },
    },
  },
  particles: {
    color: { value: ["#6366f1", "#8b5cf6", "#3b82f6", "#06b6d4"] },
    links: {
      color: "#6366f1",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1.2,
      straight: false,
    },
    number: {
      density: { enable: true },
      value: 70,
    },
    opacity: { value: 0.4 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

async function initParticles(engine: Engine): Promise<void> {
  await loadSlim(engine);
}

const ParticlesBackground = memo(() => {
  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id="tsparticles"
        options={particleOptions}
        className="absolute inset-0 z-0"
      />
    </ParticlesProvider>
  );
});

ParticlesBackground.displayName = "ParticlesBackground";

export default ParticlesBackground;
