import { motion } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";

import { Countdown } from "../../components/Countdown";
import { HeroGallery } from "../../components/HeroGallery";
import { ProfileCard } from "../../components/ProfileCard";

import { heroData } from "../../data/hero";

export function Hero() {
  const {t} = useLanguage();
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
            {t.hero.eyebrow}
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
            {t.hero.title}
          </h1>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-[var(--color-muted)]
            "
          >
            {t.hero.description}
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
            {t.hero.instagram}{" "}
              <strong>
                {heroData.instagram.label}
              </strong>
          </a>

          <div className="mt-8">
            <ProfileCard
              name={heroData.profile.name}
              role={t.hero.profileRole}
              image={heroData.profile.image}
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
              {t.hero.supportButton}
            </a>

            <span className="pill">
              {t.hero.goal}
            </span>
          </div>
        </motion.div>

        <HeroGallery
          badge={{
            subtitle:
              t.hero.badge.subtitle,

            title:
              t.hero.badge.title,

            period:
              t.hero.badge.period,

            frontImage:
              heroData.badge.frontImage,

            backImage:
              heroData.badge.backImage,
          }}
          donationUrl={
            heroData.donation.url
          }
        />
      </div>
    </section>
  );
}