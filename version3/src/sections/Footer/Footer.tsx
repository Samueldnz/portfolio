import { Mail, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

import { footerData } from "../../data/footer";

export function Footer() {
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
            gap-10
          "
        >
          {/* LEFT */}

          <div>
            <span className="pill">
              Contato
            </span>

            <h2
              className="
                mt-4
                text-3xl
                md:text-4xl
                font-black
              "
            >
              {footerData.title}
            </h2>

            <p
              className="
                mt-5
                text-lg
                leading-relaxed
                text-[var(--color-muted)]
              "
            >
              {footerData.description}
            </p>
          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              flex-col
              gap-4
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
            © 2026 Samuca Europa
          </span>

          <span>
            Feito com ❤️ para transformar um sonho em realidade
          </span>
        </div>
      </div>
    </footer>
  );
}