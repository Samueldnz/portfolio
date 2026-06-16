import { useEffect, useState } from "react";

import { Menu, X, Heart } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import avatar from "../../assets/avatar.jpg";

import { navigationData } from "../../data/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300

        ${
          isScrolled
            ? `
              py-3
              bg-[var(--color-glass)]
              backdrop-blur-xl
              border-b
              border-black/5
              dark:border-white/5
              shadow-lg
            `
            : `
              py-6
              bg-transparent
            `
        }
      `}
    >
      <div
        className="
          max-w-[1100px]
          mx-auto
          px-6
          flex
          items-center
          justify-between
        "
      >
        {/* BRAND */}

        <motion.a
          href="#inicio"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="
            flex
            items-center
            gap-3
          "
        >
          <img
            src={avatar}
            alt="Samuel"
            className="
              w-12
              h-12
              rounded-full
              object-cover
              ring-2
              ring-[var(--color-accent-blue)]
            "
          />

          <div>
            <h1
              className="
                font-bold
                text-[var(--color-text)]
                leading-none
              "
            >
              {navigationData.title}
            </h1>

            <p
              className="
                text-xs
                text-[var(--color-muted)]
              "
            >
              {navigationData.subtitle}
            </p>
          </div>
        </motion.a>

        {/* DESKTOP */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >
          {navigationData.links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() =>
                setActiveSection(item.id)
              }
              className="
                relative
                text-sm
                uppercase
                tracking-wider
                font-semibold
                text-[var(--color-muted)]
                hover:text-[var(--color-accent-blue)]
                transition-colors
              "
            >
              {item.label}

              {activeSection === item.id && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    -bottom-2
                    w-6
                    h-0.5
                    rounded-full
                    bg-[var(--color-accent-cyan)]
                  "
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-4
          "
        >
          <a
            href={navigationData.donation.url}
            target="_blank"
            className="
              btn-primary
              flex
              items-center
              gap-2
            "
          >
            <Heart size={16} />

            {navigationData.donation.label}
          </a>
        </div>

        {/* MOBILE BUTTON */}

        <button
          className="
            md:hidden
            text-[var(--color-text)]
          "
          onClick={() =>
            setIsMobileOpen(!isMobileOpen)
          }
        >
          {isMobileOpen
            ? <X size={28} />
            : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="
              md:hidden
              overflow-hidden
              mt-4
              backdrop-blur-xl
              bg-[var(--color-paper)]
              border-t
              border-black/5
            "
          >
            <div
              className="
                p-6
                flex
                flex-col
                gap-6
              "
            >
              {navigationData.links.map(
                (item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="
                      text-lg
                      font-semibold
                      text-[var(--color-text)]
                    "
                    onClick={() =>
                      setIsMobileOpen(false)
                    }
                  >
                    {item.label}
                  </a>
                )
              )}

              <a
                href={
                  navigationData.donation.url
                }
                target="_blank"
                className="
                  btn-primary
                  text-center
                "
              >
                Contribuir Agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}