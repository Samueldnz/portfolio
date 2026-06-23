import { Mail, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FileText } from "lucide-react";

import { footerData } from "../../data/footer";

import { useLanguage } from "../../hooks/useLanguage";

export function Footer() {

  const { t } = useLanguage();
  return (
    <footer
      id="contato"
      className="
        py-20
        px-6
      "
    >
      <div
        className="
          max-w-[1100px]
          mx-auto

          rounded-3xl

          bg-[var(--color-glass)]
          backdrop-blur-xl

          border
          border-black/5

          dark:border-white/5

          shadow-lg

          p-8
          md:p-10
        "
      >
        <div
          className="
            grid
            lg:grid-cols-[1.4fr_0.8fr]
            gap-16
            items-center
          "
        >
          {/* LEFT */}

          <div>
            <span className="pill">
              {t.footer.contact}
            </span>

            <h2
              className="
                mt-4
                text-3xl
                md:text-4xl
                font-playfair
                font-[600]

                tracking-tight
              "
            >
              {t.footer.title}
            </h2>

            <p
              className="
                mt-5
                text-md
                leading-relaxed
                text-[var(--color-muted)]
              "
            >
              {t.footer.description}
            </p>

            <div
              className="
                mt-8
                space-y-2
              "
            >
              <p
                className="
                  text-sm
                  text-[var(--color-muted)]
                "
              >
                ✓ {t.footer.transparency1}
              </p>

              <p
                className="
                  text-sm
                  text-[var(--color-muted)]
                "
              >
                ✓ {t.footer.transparency2}
              </p>

              <p
                className="
                  text-sm
                  text-[var(--color-muted)]
                "
              >
                ✓ {t.footer.transparency3}
              </p>
            </div>

            <a
              href="https://drive.google.com/drive/folders/1rrQOnqVwlFWdx9gQ7lChGkUz9VSky0QX?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="
                btn-outline

                mt-6
                inline-flex

                items-center
                gap-2
              "
            >
              <FileText size={16} />

              {t.footer.receipts}
            </a>
          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              flex-col
              gap-4
              justify-center
            "
          >
            <a
              href={
                footerData.contacts.instagram.url
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3

                p-4

                rounded-2xl

                bg-[var(--color-paper)]

                hover:-translate-y-1
                transition-all
              "
            >
              <FaInstagram size={18} />

              <span>
                {
                  footerData.contacts.instagram
                    .label
                }
              </span>
            </a>

            <a
              href={
                footerData.contacts.whatsapp.url
              }
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-3

                p-4

                rounded-2xl

                bg-[var(--color-paper)]

                hover:-translate-y-1
                transition-all
              "
            >
              <MessageCircle size={18} />

              <span>
                {
                  footerData.contacts.whatsapp
                    .label
                }
              </span>
            </a>

            <a
              href={
                footerData.contacts.email.url
              }
              className="
                flex
                items-center
                gap-3

                p-4

                rounded-2xl

                bg-[var(--color-paper)]

                hover:-translate-y-1
                transition-all
              "
            >
              <Mail size={18} />

              <span>
                {
                  footerData.contacts.email
                    .label
                }
              </span>
            </a>
          </div>
        </div>

        <div
          className="
            mt-10
            pt-6

            border-t
            border-black/5

            dark:border-white/5

            text-sm
            text-[var(--color-muted)]

            flex
            justify-between
            flex-wrap
            gap-4
          "
        >
          <span>
            {t.footer.copyright}
          </span>

          <span>
            {t.footer.signature}
          </span>
        </div>
      </div>
    </footer>
  );
}