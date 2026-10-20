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
  // position in percentage relative to stage center
  posX: number
  posY: number
  floatDeltaY: number
  duration: number
  delay: number
}

// 6 cards pushed further out towards the edges so they never overlap the center text:
// Left column (X: 10% - 24%), Right column (X: 76% - 90%)
const CARDS: ProjectCardData[] = [
  // LEFT SIDE — Danylo Vasiur
  {
    id: 'my-lasowiak',
    title: 'Lasowiak',
    side: 'dv',
    img: '/media/snask/my-lasowiak.webp',
    posX: 18,
    posY: 18,
    floatDeltaY: 10,
    duration: 3.4,
    delay: 0,
  },
  {
    id: 'my-ubu',
    title: 'Ubu Roi',
    side: 'dv',
    video: '/media/pmrVVXBKjVwuqmxJx9S36N57A.mp4',
    posX: 8,
    posY: 50,
    floatDeltaY: -10,
    duration: 3.8,
    delay: 0.3,
  },
  {
    id: 'my-remove',
    title: 'Re:Move',
    side: 'dv',
    img: '/media/snask/my-remove.webp',
    posX: 22,
    posY: 82,
    floatDeltaY: 9,
    duration: 3.0,
    delay: 0.6,
  },

  // RIGHT SIDE — Snask
  {
    id: 'snask-pangpang',
    title: 'PangPang Beer',
    side: 'snask',
    img: '/media/snask/snask-pangpang.webp',
    posX: 82,
    posY: 18,
    floatDeltaY: -10,
    duration: 3.5,
    delay: 0.2,
  },
  {
    id: 'snask-book',
    title: 'Make Enemies',
    side: 'snask',
    img: '/media/snask/snask-book.webp',
    posX: 92,
    posY: 50,
    floatDeltaY: 11,
    duration: 3.2,
    delay: 0.5,
  },
  {
    id: 'snask-malmo',
    title: 'Malmöfestivalen',
    side: 'snask',
    img: '/media/snask/snask-malmo.webp',
    posX: 78,
    posY: 82,
    floatDeltaY: -9,
    duration: 3.6,
    delay: 0.8,
  },
]

export function SnaskHeartIntro() {
  return (
    <section className={styles.section} aria-label="Danylo Vasiur and Snask Match">
      <div className={styles.stage}>
        {/* CENTER EMBLEM */}
        <motion.div
          className={styles.centerEmblem}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/media/snask/dv-logo.png"
            alt="Danylo Vasiur"
            width={100}
            height={100}
            className={styles.logoDv}
            priority
          />
          <span className={styles.plusSign}>+</span>
          <Image
            src="/media/snask/snask-logo.png"
            alt="Snask"
            width={170}
            height={55}
            className={styles.logoSnask}
            priority
          />
          <span className={styles.equalSign}>=</span>
          <h2 className={styles.matchTitle}>Match</h2>
        </motion.div>

        {/* DRAGGABLE CARDS SPREAD TO FULL SCREEN EDGES */}
        {CARDS.map((card) => (
          <motion.div
            key={card.id}
            className={styles.card}
            style={{
              left: `${card.posX}%`,
              top: `${card.posY}%`,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, card.floatDeltaY, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: card.delay },
              scale: { duration: 0.6, delay: card.delay },
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
            whileHover={{ scale: 1.05 }}
            whileDrag={{ scale: 1.1, zIndex: 100 }}
          >
            <div className={styles.cardInner}>
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
                  width={400}
                  height={400}
                  className={styles.cardMedia}
                />
              )}
              <div className={styles.cardCaption}>{card.title}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
