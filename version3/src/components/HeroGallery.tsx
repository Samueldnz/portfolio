import { motion } from "framer-motion";
import { useState } from "react";

import { useLanguage } from "../hooks/useLanguage";

import czechFlag from "../assets/flags/cz.svg";
import italyFlag from "../assets/flags/it.svg";

interface HeroGalleryProps {
  badge: {
    title: string;
    subtitle: string;
    period: string;

    frontImage: string;
    backImage: string;
  };

  donationUrl: string;
}

export function HeroGallery({
  badge
}: HeroGalleryProps) {
  const [flipped, setFlipped] =
    useState(false);

  const { t } = useLanguage();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative"
    >
      <div
        onClick={() =>
          setFlipped(!flipped)
        }
        className="
          relative
          h-[460px]
          cursor-pointer
          perspective-[1000px]
        "
      >
        <div
          className={`
            relative
            w-full
            h-full
            duration-700
            [transform-style:preserve-3d]

            ${
              flipped
                ? "[transform:rotateY(180deg)]"
                : ""
            }
          `}
        >
          <div
            className="
              absolute
              inset-0
              [backface-visibility:hidden]
            "
          >
            <img
              src={badge.frontImage}
              alt={badge.title}
              className="
                w-full
                h-full
                object-cover
                rounded-3xl
              "
            />
          </div>

          <div
            className="
              absolute
              inset-0
              [transform:rotateY(180deg)]
              [backface-visibility:hidden]
            "
          >
            <img
              src={badge.backImage}
              alt = {badge.title}
              className="
                w-full
                h-full
                object-cover
                rounded-3xl
              "
            />
          </div>
        </div>
      </div>

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-44

          rounded-b-3xl

          bg-gradient-to-t
          from-black/55
          via-black/20
          to-transparent

          pointer-events-none
        "
      />

      <div
        className="
          absolute
          left-4
          right-4
          bottom-4

          max-w-[380px]
          rounded-3xl
          p-5

          backdrop-blur-2xl

          bg-white/80
          dark:bg-white/[0.06]

          border
          border-white/30
          dark:border-white/10

          shadow-xl
          dark:shadow-black/50
        "
      >

        {!flipped ? (
          <div>
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <img
                src={czechFlag}
                alt="Czech Republic"
                className="w-4 h-3 rounded-[2px]"
              />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                  dark:text-slate-300
                "
              >
                {t.hero.czechRepublic}
              </p>
            </div>

            <h3
              className="
                mt-1
                text-xl
                font-semibold
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              {t.hero.missionStep1Title}
            </h3>

            <div className="mt-3">
              <span
                className="
                  inline-flex
                  px-3
                  py-1

                  rounded-full

                  text-xs
                  font-semibold

                  bg-emerald-500/10
                  text-emerald-600
                "
              >
                {t.hero.approved}
              </span>
            </div>

            <p
              className="
                mt-3
                text-sm
                text-slate-500
                dark:text-slate-300
              "
            >
              {t.hero.missionStep1Short}
            </p>

            <div
              className="
                mt-3
                pt-3

                border-t
                border-black/5
                dark:border-white/10
              "
            >
              <p
                className="
                  text-xs
                  text-slate-500
                  dark:text-slate-300
                "
              >
                April 2026
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <img
                src={italyFlag}
                alt="Czech Republic"
                className="w-4 h-3 rounded-[2px]"
              />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-slate-500
                  dark:text-slate-300
                "
              >
                {t.hero.italy}
              </p>
            </div>

            <h3
              className="
                mt-1
                text-xl
                font-bold
              "
            >
              {t.hero.missionStep2Title}
            </h3>

            <div className="mt-3">
              <span
                className="
                  inline-flex
                  px-3
                  py-1

                  rounded-full

                  text-xs
                  font-semibold

                  bg-amber-500/10
                  text-amber-600
                "
              >
                {t.hero.pending}
              </span>
            </div>

            <p
              className="
                mt-3
                text-sm
                text-[var(--color-muted)]
              "
            >
              {t.hero.missionStep2Short}
            </p>

            <div
              className="
                mt-3
                pt-3

                border-t
                border-black/5
                dark:border-white/10
              "
            >
              <p
                className="
                  text-xs
                  text-[var(--color-muted)]
                "
              >
                June 2026
              </p>
            </div>
          </div>
        )}
        
      </div>
    </motion.div>
  );
}