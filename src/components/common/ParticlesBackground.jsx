import { useMemo } from 'react';
import { Particles, ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const initEngine = async (engine) => {
  await loadSlim(engine);
};

export default function ParticlesBackground() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: false },
          resize: true,
        },
      },
      particles: {
        color: { value: ['#8891ac', '#4d3bd6'] },
        links: {
          enable: true,
          color: '#4d3bd6',
          distance: 140,
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.4,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'bounce' },
        },
        number: {
          value: 60,
          density: { enable: true, area: 900 },
        },
        opacity: {
          value: { min: 0.15, max: 0.45 },
          animation: { enable: true, speed: 1, sync: false },
        },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <ParticlesProvider init={initEngine}>
      <Particles id="tsparticles" options={options} className="particles-bg" />
    </ParticlesProvider>
  );
}
