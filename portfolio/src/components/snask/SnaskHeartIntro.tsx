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

// 6 cards creating the heart curve around the center emblem:
// Top lobes: (28%, 18%) rotated -8° and (72%, 18%) rotated +8°
// Mid outer: (13%, 46%) rotated -3° and (87%, 46%) rotated +3°
// Bottom tip: (34%, 74%) rotated +12° and (66%, 74%) rotated -12°
const CARDS: ProjectCardData[] = [
  // LEFT SIDE — Danylo Vasiur
  {
    id: 'my-lasowiak',
    title: 'Lasowiak',
    side: 'dv',
    img: '/media/snask/my-lasowiak.webp',
    targetX: 28,
    targetY: 18,
    targetRotate: -8,
    spawnX: -360,
    spawnY: -260,
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
    targetX: 13,
    targetY: 46,
    targetRotate: -3,
    spawnX: -450,
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
    targetX: 34,
    targetY: 74,
    targetRotate: 12,
    spawnX: -320,
    spawnY: 340,
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
    targetX: 72,
    targetY: 18,
    targetRotate: 8,
    spawnX: 360,
    spawnY: -260,
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
    targetX: 87,
    targetY: 46,
    targetRotate: 3,
    spawnX: 450,
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
    targetX: 66,
    targetY: 74,
    targetRotate: -12,
    spawnX: 320,
    spawnY: 340,
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

        {/* CARDS THAT CONVERGE ON LOAD TO ASSEMBLE THE HEART SHAPE */}
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
