'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './SnaskHeartIntro.module.css'

type ProjectCardData = {
  id: string
  title: string
  side: 'dv' | 'snask'
  img: string
  // position in percentage relative to stage center (50%, 50%)
  posX: number
  posY: number
  // gentle float animation variation
  floatDeltaY: number
  duration: number
  delay: number
}

// 6 cards placed along the heart contour
// 3 on the left (Danylo Vasiur), 3 on the right (Snask)
const CARDS: ProjectCardData[] = [
  // LEFT SIDE — Danylo Vasiur
  {
    id: 'my-lasowiak',
    title: 'Lasowiak',
    side: 'dv',
    img: '/media/snask/my-lasowiak.webp',
    posX: 22,
    posY: 22,
    floatDeltaY: 8,
    duration: 3.2,
    delay: 0,
  },
  {
    id: 'my-ubu',
    title: 'Ubu Roi',
    side: 'dv',
    img: '/media/snask/my-ubu.webp',
    posX: 12,
    posY: 52,
    floatDeltaY: -9,
    duration: 3.6,
    delay: 0.3,
  },
  {
    id: 'my-remove',
    title: 'Re:Move',
    side: 'dv',
    img: '/media/snask/my-remove.webp',
    posX: 34,
    posY: 80,
    floatDeltaY: 7,
    duration: 2.8,
    delay: 0.6,
  },

  // RIGHT SIDE — Snask
  {
    id: 'snask-pangpang',
    title: 'PangPang Beer',
    side: 'snask',
    img: '/media/snask/snask-pangpang.webp',
    posX: 78,
    posY: 22,
    floatDeltaY: -8,
    duration: 3.4,
    delay: 0.2,
  },
  {
    id: 'snask-book',
    title: 'Make Enemies',
    side: 'snask',
    img: '/media/snask/snask-book.webp',
    posX: 88,
    posY: 52,
    floatDeltaY: 9,
    duration: 3.1,
    delay: 0.5,
  },
  {
    id: 'snask-malmo',
    title: 'Malmöfestivalen',
    side: 'snask',
    img: '/media/snask/snask-malmo.webp',
    posX: 66,
    posY: 80,
    floatDeltaY: -7,
    duration: 3.5,
    delay: 0.8,
  },
]

export function SnaskHeartIntro() {
  return (
    <section className={styles.section} aria-label="Danylo Vasiur and Snask Match">
      <motion.div
        className={styles.introBadge}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        ✦ Made especially for Snask ✦
      </motion.div>

      <div className={styles.stage}>
        {/* CENTER EMBLEM */}
        <motion.div
          className={styles.centerEmblem}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/media/snask/dv-logo.png"
            alt="Danylo Vasiur"
            width={92}
            height={92}
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
          <span className={styles.matchSubtitle}>Drag us around</span>
        </motion.div>

        {/* DRAGGABLE CARDS IN HEART CONTOUR */}
        {CARDS.map((card) => (
          <motion.div
            key={card.id}
            className={styles.card}
            style={{
              left: `${card.posX}%`,
              top: `${card.posY}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, card.floatDeltaY, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: card.delay },
              scale: { duration: 0.6, delay: card.delay, type: 'spring', stiffness: 260, damping: 20 },
              y: {
                duration: card.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: card.delay,
              },
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.85}
            whileHover={{ scale: 1.08 }}
            whileDrag={{ scale: 1.15, zIndex: 100 }}
          >
            <div className={styles.cardInner}>
              <span className={`${styles.cardBadge} ${card.side === 'dv' ? styles.badgeDv : styles.badgeSnask}`}>
                {card.side === 'dv' ? 'DV' : 'SNASK'}
              </span>
              <Image
                src={card.img}
                alt={card.title}
                width={300}
                height={300}
                className={styles.cardImage}
              />
              <div className={styles.cardCaption}>{card.title}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className={styles.dragHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span className={styles.dragHand}>👆</span> Grab any card to pull the heart — it springs right back!
      </motion.p>
    </section>
  )
}
