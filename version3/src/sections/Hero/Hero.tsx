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
        min-h-[calc(100vh-96px)]
        flex
        items-center

        px-6
        pt-28
        pb-8
      "
    >
      <div
        className="
          max-w-[1150px]
          mx-auto
          w-full

          grid
          lg:grid-cols-[1.7fr_0.9fr]
          gap-10
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
              text-3xl
              md:text-4xl
              xl:text-5xl
              font-[600]
              tracking-tight
              leading-[0.95]
              font-playfair
            "
          >
            {t.hero.title}
          </h1>

          <p
            className="
              mt-6
              text-md
              leading-relaxed
              text-[var(--color-muted)]
            "
          >
            {t.hero.description}
          </p>

          <a
            href={heroData.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-4

              text-[var(--color-muted)]

              transition-colors
              hover:text-[var(--color-text)]
            "
          >
            {t.hero.instagram}{" "}

            <span
              className="
                font-semibold

                text-[var(--color-text)]

                hover:text-[var(--color-accent-blue)]
                transition-colors
              "
            >
              {heroData.instagram.label}
            </span>
          </a>

          <div className="mt-6">
            <ProfileCard
              name={heroData.profile.name}
              role={t.hero.profileRole}
              image={heroData.profile.image}
            />
          </div>

          <div
            className="
              mt-2
              rounded-3xl
              p-5
            "
          >
            <div
              className="
                flex
                flex-col

                md:flex-row

                md:items-center
                md:justify-between

                items-start

                gap-3

                mb-5
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    text-[var(--color-muted)]
                  "
                >
                  {t.hero.nextStepLabel}
                </p>

                <h3
                  className="
                    text-md
                    font-[600]
                  "
                >
                  {t.hero.nextStepTitle}
                </h3>
              </div>

              <span className="
                  pill

                  text-sm

                  self-start
                  md:self-auto">
                {t.hero.nextStepDate}
              </span>
            </div>

            <Countdown
              targetDate={
                heroData.targetDate
              }
            />
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