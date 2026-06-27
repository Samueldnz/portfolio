import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeToggle } from "../../components/ThemeToggle";
import { LanguageToggle } from "../../components/LanguageToggle";

import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../hooks/useLanguage";

import avatar from "../../assets/avatar.jpg";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("inicio");

  const { theme, toggleTheme } =
    useTheme();

  const {
    t,
    language,
    setLanguage,
  } = useLanguage();

  const navItems = [
    {
      id: "inicio",
      label: t.navigation.links.home,
    },
    {
      id: "sobre",
      label: t.navigation.links.about,
    },
    {
      id: "gastos",
      label: t.navigation.links.expenses,
    },
    {
      id: "contato",
      label: t.navigation.links.contact,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);


  useEffect(() => {
  const sections = [
    "inicio",
    "sobre",
    "gastos",
    "contato",
  ];

  const elements = sections
    .map((id) =>
      document.getElementById(id)
    )
    .filter(
      (
        element
      ): element is HTMLElement =>
        element !== null
    );

  const observer =
    new IntersectionObserver(
      (entries) => {
        const visibleEntries =
          entries.filter(
            (entry) =>
              entry.isIntersecting
          );

        if (
          visibleEntries.length > 0
        ) {
          setActiveSection(
            visibleEntries[0].target.id
          );
        }
      },
      {
        root: null,

        rootMargin:
          "-35% 0px -55% 0px",

        threshold: 0,
      }
    );

  elements.forEach((element) =>
    observer.observe(element)
  );

  return () => {
    elements.forEach((element) =>
      observer.unobserve(element)
    );
  };
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
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
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
                leading-none
                text-[var(--color-text)]
              "
            >
              {t.navigation.title}
            </h1>

            <p
              className="
                text-xs
                text-[var(--color-muted)]
              "
            >
              {t.navigation.subtitle}
            </p>
          </div>
        </motion.a>

        {/* DESKTOP NAV */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-8
          "
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="
                relative

                text-sm
                font-semibold
                uppercase
                tracking-wider

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

        {/* DESKTOP ACTIONS */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-4
          "
        >
          <LanguageToggle
            language={language}
            onChange={setLanguage}
          />

          <ThemeToggle
            isDark={theme === "dark"}
            onToggle={toggleTheme}
          />

          <a
            href="https://vakinha.bio/5793881"
            target="_blank"
            rel="noopener noreferrer"
            className="
              btn-primary

              flex
              items-center
              gap-2
            "
          >
            <Heart size={16} />

            {t.navigation.donate}
          </a>
        </div>

        {/* MOBILE BUTTON */}

        <button
          className="
            md:hidden
            text-[var(--color-text)]
          "
          onClick={() =>
            setIsMobileOpen(
              !isMobileOpen
            )
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
              dark:border-white/5
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
              {/* NAVIGATION */}

              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() =>
                    setIsMobileOpen(false)
                  }
                  className="
                    text-lg
                    font-semibold
                    text-[var(--color-text)]
                  "
                >
                  {item.label}
                </a>
              ))}

              {/* SETTINGS */}

              <div
                className="
                  border-t
                  border-black/5
                  dark:border-white/5

                  pt-4

                  space-y-5
                "
              >
                <div>
                  <p
                    className="
                      mb-2
                      text-sm
                      font-medium
                      text-[var(--color-muted)]
                    "
                  >
                    {t.navigation.utilities.language}
                  </p>

                  <LanguageToggle
                    language={language}
                    onChange={setLanguage}
                  />
                </div>

                <div>
                  <p
                    className="
                      mb-2
                      text-sm
                      font-medium
                      text-[var(--color-muted)]
                    "
                  >
                    {t.navigation.utilities.theme}
                  </p>

                  <ThemeToggle
                    isDark={
                      theme === "dark"
                    }
                    onToggle={
                      toggleTheme
                    }
                  />
                </div>
              </div>

              {/* CTA */}

              <a
                href="https://vakinha.bio/5793881"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-primary
                  w-full
                  text-center
                "
              >
                {t.navigation.donate}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}