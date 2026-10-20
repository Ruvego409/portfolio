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
  // Final target coordinate of the anchor in % of stage
  targetX: number
  targetY: number
  targetRotate: number
  // Off-screen fly-in offsets (in px) and initial rotation
  spawnX: number
  spawnY: number
  spawnRotate: number
  // Floating breathing animation
  floatDeltaY: number
  duration: number
  delay: number
}

// 6 cards creating an unmistakable, symmetric heart curve around the compact center emblem:
// Top lobes: (30%, 17%) rotated -10° and (70%, 17%) rotated +10°
// Mid outer: (15%, 49%) rotated -4° and (85%, 49%) rotated +4°
// Bottom tip: (37%, 81%) rotated +14° and (63%, 81%) rotated -14°
const CARDS: ProjectCardData[] = [
  // LEFT SIDE — Danylo Vasiur
  {
    id: 'my-lasowiak',
    title: 'Lasowiak',
    side: 'dv',
    img: '/media/snask/my-lasowiak.webp',
    targetX: 30,
    targetY: 17,
    targetRotate: -10,
    spawnX: -380,
    spawnY: -280,
    spawnRotate: -35,
    floatDeltaY: 7,
    duration: 3.4,
    delay: 0.1,
  },
  {
    id: 'my-ubu',
    title: 'Ubu Roi',
    side: 'dv',
    video: '/media/pmrVVXBKjVwuqmxJx9S36N57A.mp4',
    targetX: 15,
    targetY: 49,
    targetRotate: -4,
    spawnX: -480,
    spawnY: 0,
    spawnRotate: -25,
    floatDeltaY: -8,
    duration: 3.8,
    delay: 0.25,
  },
  {
    id: 'my-remove',
    title: 'Re:Move',
    side: 'dv',
    img: '/media/snask/my-remove.webp',
    targetX: 37,
    targetY: 81,
    targetRotate: 14,
    spawnX: -340,
    spawnY: 360,
    spawnRotate: 30,
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
    targetX: 70,
    targetY: 17,
    targetRotate: 10,
    spawnX: 380,
    spawnY: -280,
    spawnRotate: 35,
    floatDeltaY: -7,
    duration: 3.5,
    delay: 0.15,
  },
  {
    id: 'snask-book',
    title: 'Make Enemies',
    side: 'snask',
    img: '/media/snask/snask-book.webp',
    targetX: 85,
    targetY: 49,
    targetRotate: 4,
    spawnX: 480,
    spawnY: 0,
    spawnRotate: 25,
    floatDeltaY: 8,
    duration: 3.2,
    delay: 0.3,
  },
  {
    id: 'snask-malmo',
    title: 'Malmöfestivalen',
    side: 'snask',
    img: '/media/snask/snask-malmo.webp',
    targetX: 63,
    targetY: 81,
    targetRotate: -14,
    spawnX: 340,
    spawnY: 360,
    spawnRotate: -30,
    floatDeltaY: -8,
    duration: 3.6,
    delay: 0.45,
  },
]

export function SnaskHeartIntro() {
  return (
    <section className={styles.section} aria-label="Danylo Vasiur and Snask Match">
      <div className={styles.stage}>
        {/* SUBTLE SNASK PINK DASHED HEART TRAJECTORY PATH */}
        <svg
          className={styles.heartOutlineSvg}
          viewBox="0 0 1000 660"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 500 220 
               C 450 120, 370 95, 300 115
               C 210 135, 130 220, 150 330
               C 170 435, 270 495, 370 540
               C 435 570, 480 600, 500 625
               C 520 600, 565 570, 630 540
               C 730 495, 830 435, 850 330
               C 870 220, 790 135, 700 115
               C 630 95, 550 120, 500 220 Z"
            stroke="#fbd4dc"
            strokeWidth="2.5"
            strokeDasharray="6 8"
            strokeLinecap="round"
          />
        </svg>

        {/* COMPACT CENTER EMBLEM - ZERO OVERLAP */}
        <motion.div
          className={styles.centerEmblem}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.emblemRow}>
            <Image
              src="/media/snask/dv-logo.png"
              alt="Danylo Vasiur"
              width={56}
              height={56}
              className={styles.logoDv}
              priority
            />
            <span className={styles.plusSign}>+</span>
            <Image
              src="/media/snask/snask-logo.png"
              alt="Snask"
              width={120}
              height={40}
              className={styles.logoSnask}
              priority
            />
          </div>
          <div className={styles.matchRow}>
            <span className={styles.equalSign}>=</span>
            <span className={styles.matchTitle}>MATCH</span>
          </div>
        </motion.div>

        {/* CARDS CONVERGING ON LOAD INTO THE HEART SHAPE */}
        {CARDS.map((card) => (
          <div
            key={card.id}
            className={styles.cardAnchor}
            style={{ left: `${card.targetX}%`, top: `${card.targetY}%` }}
          >
            <motion.div
              className={styles.card}
              initial={{
                x: card.spawnX,
                y: card.spawnY,
                opacity: 0,
                scale: 0.6,
                rotate: card.spawnRotate,
              }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                rotate: card.targetRotate,
              }}
              transition={{
                type: 'spring',
                stiffness: 75,
                damping: 14,
                delay: card.delay,
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.8}
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
                <span
                  className={`${styles.cardBadge} ${
                    card.side === 'dv' ? styles.badgeDv : styles.badgeSnask
                  }`}
                >
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
          </div>
        ))}
      </div>
    </section>
  )
}
