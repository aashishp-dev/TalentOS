"use client";

import { motion } from "framer-motion";

interface Props {
  value?: number;
}

export default function ConfidenceGauge({
  value = 91,
}: Props) {
  const radius = 70;
  const stroke = 12;

  const normalizedRadius = radius - stroke / 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const offset =
    circumference - (value / 100) * circumference;

  const color =
    value >= 85
      ? "#22C55E"
      : value >= 70
      ? "#FACC15"
      : "#EF4444";

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-6 shadow-xl">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          AI Confidence
        </h2>

        <p className="text-slate-400 mt-1">
          Overall hiring confidence score
        </p>

      </div>

      <div className="flex justify-center">

        <div className="relative">

          <svg
            width={160}
            height={160}
            className="-rotate-90"
          >

            <circle
              stroke="#1E293B"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={80}
              cy={80}
            />

            <motion.circle
              stroke={color}
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={80}
              cy={80}
              strokeDasharray={`${circumference} ${circumference}`}
              initial={{
                strokeDashoffset: circumference,
              }}
              animate={{
                strokeDashoffset: offset,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            />

          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h1
              className="text-4xl font-bold"
              style={{ color }}
            >
              {value}%
            </h1>

            <p className="text-sm text-slate-400 mt-1">
              Confidence
            </p>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-3 gap-3 mt-8">

        <div className="rounded-xl bg-slate-800 p-3 text-center">
          <p className="text-xs text-slate-400">
            Resume
          </p>
          <h3 className="font-bold text-green-400">
            94%
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-3 text-center">
          <p className="text-xs text-slate-400">
            Skills
          </p>
          <h3 className="font-bold text-cyan-400">
            89%
          </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-3 text-center">
          <p className="text-xs text-slate-400">
            Culture
          </p>
          <h3 className="font-bold text-yellow-400">
            83%
          </h3>
        </div>

      </div>

    </div>
  );
}