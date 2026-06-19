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
          lg:grid-cols-[1.5fr_1fr]
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
            className="
              inline-block
              mt-4
              font-[600]
              text-[var(--color-accent-blue)]
            "
          >
            {t.hero.instagram}{" "}
              <strong>
                {heroData.instagram.label}
              </strong>
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
                items-center
                justify-between
                gap-4
                flex-wrap
                mb-4
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

              <span className="pill text-sm">
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