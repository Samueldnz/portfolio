import { motion } from "framer-motion";

import { Countdown } from "../../components/Countdown";
import { HeroGallery } from "../../components/HeroGallery";
import { ProfileCard } from "../../components/ProfileCard";

import { heroData } from "../../data/hero";

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        min-h-screen
        flex
        items-center

        px-6
        py-32
      "
    >
      <div
        className="
          max-w-[1100px]
          mx-auto
          w-full

          grid
          lg:grid-cols-[1.1fr_0.9fr]
          gap-12
          items-center
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="pill">
            {heroData.eyebrow}
          </span>

          <h1
            className="
              mt-5
              text-5xl
              lg:text-6xl
              font-black
              tracking-tight
            "
          >
            {heroData.title}
          </h1>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-[var(--color-muted)]
            "
          >
            {heroData.description}
          </p>

          <a
            href={heroData.instagram.url}
            target="_blank"
            className="
              inline-block
              mt-4
              font-semibold
              text-[var(--color-accent-blue)]
            "
          >
            {heroData.instagram.label}
          </a>

          <div className="mt-8">
            <ProfileCard
              {...heroData.profile}
            />
          </div>

          <div className="mt-8">
            <Countdown
              targetDate={
                heroData.targetDate
              }
            />
          </div>

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
              items-center
            "
          >
            <a
              href={
                heroData.donation.url
              }
              target="_blank"
              className="btn-primary"
            >
              {heroData.donation.label}
            </a>

            <span className="pill">
              {heroData.goal}
            </span>
          </div>
        </motion.div>

        <HeroGallery
          badge={heroData.badge}
          donationUrl={
            heroData.donation.url
          }
        />
      </div>
    </section>
  );
}