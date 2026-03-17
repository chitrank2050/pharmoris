import type { Variants, Transition } from 'framer-motion'

// ─── Springs ──────────────────────────────────────────────────────
export const springs = {
  snappy: {
    type: 'spring',
    stiffness: 400,
    damping: 40,
    mass: 1,
  } satisfies Transition,

  soft: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
    mass: 1,
  } satisfies Transition,

  micro: {
    type: 'spring',
    stiffness: 500,
    damping: 35,
    mass: 0.8,
  } satisfies Transition,
} as const

// ─── Easings ──────────────────────────────────────────────────────
export const easings = {
  out: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
  inOut: [0.4, 0.0, 0.2, 1.0] as [number, number, number, number],
  overshoot: [0.34, 1.56, 0.64, 1.0] as [number, number, number, number],
} as const

// ─── Variants ─────────────────────────────────────────────────────

// Section reveal — transform + opacity only
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, transform: 'translateY(32px)' },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: { duration: 0.45, ease: easings.out },
  },
}

// Stagger container
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

// Stagger child — transform + opacity + scale only
export const staggerChildVariants: Variants = {
  hidden: { opacity: 0, transform: 'translateY(24px) scale(0.97)' },
  visible: {
    opacity: 1,
    transform: 'translateY(0px) scale(1)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      mass: 1,
    },
  },
}

// Fade only
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: easings.out } },
}

// Slide from left — table rows
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, transform: 'translateX(-12px)' },
  visible: {
    opacity: 1,
    transform: 'translateX(0px)',
    transition: { duration: 0.35, ease: easings.out },
  },
}

// Mobile nav — clipPath only, zero height animation
export const mobileNavVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: 'inset(0 0 100% 0)',
    transform: 'translateY(-8px)',
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transform: 'translateY(0px)',
    transition: { duration: 0.2, ease: easings.out },
  },
  exit: {
    opacity: 0,
    clipPath: 'inset(0 0 100% 0)',
    transform: 'translateY(-8px)',
    transition: { duration: 0.15, ease: easings.inOut },
  },
}

// ─── Hover / Tap — transform + opacity only ───────────────────────
export const hoverLift = {
  whileHover: {
    transform: 'translateY(-4px) scale(1.02)',
    transition: { type: 'spring', stiffness: 400, damping: 40 },
  },
  whileTap: {
    transform: 'translateY(0px) scale(0.97)',
    transition: { type: 'spring', stiffness: 500, damping: 35 },
  },
} as const

export const hoverSubtle = {
  whileHover: {
    transform: 'translateY(-2px)',
    transition: { type: 'spring', stiffness: 400, damping: 40 },
  },
  whileTap: {
    transform: 'scale(0.97)',
    transition: { type: 'spring', stiffness: 500, damping: 35 },
  },
} as const

export const hoverScale = {
  whileHover: { scale: 1.08, transition: { type: 'spring', stiffness: 400, damping: 40 } },
  whileTap: { scale: 0.92, transition: { type: 'spring', stiffness: 500, damping: 35 } },
} as const
