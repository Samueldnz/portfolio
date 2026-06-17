import { motion } from "framer-motion";
import { useState } from "react";

import { useLanguage } from "../hooks/useLanguage";

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
  badge,
  donationUrl,
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
          h-[500px]
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
          left-4
          right-4
          bottom-4

          bg-[var(--color-glass)]
          backdrop-blur-xl

          rounded-2xl
          p-4

          shadow-xl
        "
      >
        <p
          className="
            text-xs
            text-[var(--color-muted)]
          "
        >
          {badge.subtitle}
        </p>

        <p className="font-bold">
          {badge.title}
        </p>

        <p
          className="
            text-xs
            text-[var(--color-muted)]
          "
        >
          {badge.period}
        </p>

        <p
          className="
            mt-2
            text-[11px]
            text-[var(--color-muted)]
          "
        >
          {t.hero.flipHint}
        </p>

        <a
          href={donationUrl}
          target="_blank"
          className="
            btn-primary
            mt-3
            block
            text-center
          "
        >
          {t.hero.donateButton}
        </a>
      </div>
    </motion.div>
  );
}