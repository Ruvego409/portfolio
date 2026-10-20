'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './SnaskHeartIntro.module.css'

type ProjectCardData = {
  id: string
  title: string
  side: 'dv' | 'snask'
  img?: string
  video?: string
  // Final target position forming the heart (in %)
  targetX: number
  targetY: number
  // Initial spawn position from outside the screen
  startX: number
  startY: number
  floatDeltaY: number
  duration: number
  delay: number
}

// 6 cards creating the heart curve:
// Center is (50, 48)
// Top lobes: (26, 16) and (74, 16)
// Mid outer: (11, 46) and (89, 46)
// Bottom tip: (32, 78) and (68, 78)
const CARDS: ProjectCardData[] = [
  // LEFT SIDE — Danylo Vasiur
  {
    id: 'my-lasowiak',
    title: 'Lasowiak',
    side: 'dv',
    img: '/media/snask/my-lasowiak.webp',
    targetX: 26,
    targetY: 16,
    startX: -15,
    startY: -10,
    floatDeltaY: 7,
    duration: 3.4,
    delay: 0.1,
  },
  {
    id: 'my-ubu',
    title: 'Ubu Roi',
    side: 'dv',
    video: '/media/pmrVVXBKjVwuqmxJx9S36N57A.mp4',
    targetX: 11,
    targetY: 46,
    startX: -25,
    startY: 50,
    floatDeltaY: -8,
    duration: 3.8,
    delay: 0.25,
  },
  {
    id: 'my-remove',
    title: 'Re:Move',
    side: 'dv',
    img: '/media/snask/my-remove.webp',
    targetX: 32,
    targetY: 78,
    startX: -10,
    startY: 110,
    floatDeltaY: 7,
    duration: 3.0,
    delay: 0.4,
  },

  // RIGHT SIDE — Snask
  {
    id: 'snask-pangpang',
    title: 'PangPang Beer',
    side: 'snask',
    img: '/media/snask/snask-pangpang.webp',
    targetX: 74,
    targetY: 16,
    startX: 115,
    startY: -10,
    floatDeltaY: -7,
    duration: 3.5,
    delay: 0.15,
  },
  {
    id: 'snask-book',
    title: 'Make Enemies',
    side: 'snask',
    img: '/media/snask/snask-book.webp',
    targetX: 89,
    targetY: 46,
    startX: 125,
    startY: 50,
    floatDeltaY: 8,
    duration: 3.2,
    delay: 0.3,
  },
  {
    id: 'snask-malmo',
    title: 'Malmöfestivalen',
    side: 'snask',
    img: '/media/snask/snask-malmo.webp',
    targetX: 68,
    targetY: 78,
    startX: 110,
    startY: 110,
    floatDeltaY: -8,
    duration: 3.6,
    delay: 0.45,
  },
]

export function SnaskHeartIntro() {
  return (
    <section className={styles.section} aria-label="Danylo Vasiur and Snask Match">
      <div className={styles.stage}>
        {/* CENTER EMBLEM */}
        <motion.div
          className={styles.centerEmblem}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/media/snask/dv-logo.png"
            alt="Danylo Vasiur"
            width={85}
            height={85}
            className={styles.logoDv}
            priority
          />
          <span className={styles.plusSign}>+</span>
          <Image
            src="/media/snask/snask-logo.png"
            alt="Snask"
            width={150}
            height={50}
            className={styles.logoSnask}
            priority
          />
          <span className={styles.equalSign}>=</span>
          <h2 className={styles.matchTitle}>Match</h2>
        </motion.div>

        {/* CARDS THAT FLY IN ON LOAD TO ASSEMBLE THE HEART SHAPE */}
        {CARDS.map((card) => (
          <motion.div
            key={card.id}
            className={styles.card}
            initial={{
              left: `${card.startX}%`,
              top: `${card.startY}%`,
              opacity: 0,
              scale: 0.5,
              rotate: card.side === 'dv' ? -15 : 15,
            }}
            animate={{
              left: `${card.targetX}%`,
              top: `${card.targetY}%`,
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 90,
              damping: 15,
              delay: card.delay,
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.85}
            whileHover={{ scale: 1.05 }}
            whileDrag={{ scale: 1.1, zIndex: 100 }}
          >
            {/* Ambient subtle breathing float */}
            <motion.div
              className={styles.cardInner}
              animate={{
                y: [0, card.floatDeltaY, 0],
              }}
              transition={{
                duration: card.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: card.delay + 0.5,
              }}
            >
              <span className={`${styles.cardBadge} ${card.side === 'dv' ? styles.badgeDv : styles.badgeSnask}`}>
                {card.side === 'dv' ? 'DV' : 'SNASK'}
              </span>
              {card.video ? (
                <video
                  src={card.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.cardMedia}
                />
              ) : (
                <Image
                  src={card.img!}
                  alt={card.title}
                  width={380}
                  height={380}
                  className={styles.cardMedia}
                />
              )}
              <div className={styles.cardCaption}>{card.title}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
