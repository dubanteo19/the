import { motion } from "motion/react";
import { useMemo } from "react";

const PETAL_COUNT = 20;
const SRC = "/flower.png";

type PetalConfig = {
  id: number;
  leftPct: number;
  duration: number;
  delay: number;
  size: number;
  drift: number;
  rotateDir: number;
};

function buildPetals(): PetalConfig[] {
  return Array.from({ length: PETAL_COUNT }, (_, i) => ({
    id: i,
    leftPct: ((i * 47 + 7) % 100) + (i % 3) * 0.5,
    duration: 18 + (i % 9) * 2,
    delay: (i * 1.1) % 14,
    size: 20 + (i % 6) * 6,
    drift: ((i % 2) * 2 - 1) * (30 + (i % 5) * 12),
    rotateDir: i % 2 === 0 ? 1 : -1,
  }));
}

export const FlyingFlowers = () => {
  const petals = useMemo(buildPetals, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {petals.map((p) => (
        <motion.img
          key={p.id}
          src={SRC}
          alt=""
          className="absolute bottom-auto opacity-60 select-none"
          style={{
            left: `${p.leftPct}%`,
            width: p.size,
            height: "auto",
            top: "-10%",
          }}
          initial={{ y: 0, x: 0, rotate: 0 }}
          animate={{
            y: "120vh",
            x: p.drift,
            rotate: 180 * p.rotateDir,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};