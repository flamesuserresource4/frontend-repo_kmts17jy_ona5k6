import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlays for cyberpunk glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.25),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-3 py-1 text-xs text-slate-200/90 shadow-lg backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
            Next-gen advertising studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="mt-6 text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl"
          >
            Where brands meet the future of attention
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-5 max-w-2xl text-lg text-slate-300"
          >
            We craft immersive campaigns across digital and out-of-home. From cyberpunk screens to city billboards, we turn moments into momentum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-fuchsia-600/30">
              Start a campaign
            </a>
            <a href="#capabilities" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 hover:bg-white/10">
              Explore capabilities
            </a>
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
