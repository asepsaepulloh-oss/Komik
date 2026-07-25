import { Book, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-emerald-900/40 bg-emerald-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/30">
                <Book className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-emerald-400">{siteConfig.logoParts[0]}</span>
                <span className="text-white">{siteConfig.logoParts[1]}</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm text-emerald-100/70">
              Baca komik dan nonton anime favorit kamu secara gratis. Koleksi terlengkap dengan
              update terbaru setiap hari.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Navigasi</h3>
            <ul className="space-y-2 text-sm text-emerald-100/70">
              <li>
                <Link href="/komik" className="transition-colors hover:text-emerald-300">
                  Komik
                </Link>
              </li>
              <li>
                <Link href="/anime" className="transition-colors hover:text-emerald-300">
                  Anime
                </Link>
              </li>
              <li>
                <Link href="/bookmark" className="transition-colors hover:text-emerald-300">
                  Bookmark
                </Link>
              </li>
              <li>
                <Link href="/history" className="transition-colors hover:text-emerald-300">
                  History
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Kategori Komik</h3>
            <ul className="space-y-2 text-sm text-emerald-100/70">
              <li>
                <Link href="/komik?type=manhwa" className="transition-colors hover:text-emerald-300">
                  Manhwa
                </Link>
              </li>
              <li>
                <Link href="/komik?type=manhua" className="transition-colors hover:text-emerald-300">
                  Manhua
                </Link>
              </li>
              <li>
                <Link href="/komik?type=manga" className="transition-colors hover:text-emerald-300">
                  Manga
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Ikuti Kami</h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-emerald-100/70 transition-colors hover:bg-emerald-900/70 hover:text-emerald-300"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-emerald-100/70 transition-colors hover:bg-emerald-900/70 hover:text-emerald-300"
                aria-label="Instagram"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-emerald-100/70 transition-colors hover:bg-emerald-900/70 hover:text-emerald-300"
                aria-label="GitHub"
              >
                <Book className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-emerald-900/40 pt-8 md:flex-row">
          <p className="text-sm text-emerald-100/70">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-emerald-100/50">
            Powered by{" "}
            <a
              href={siteConfig.team.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:underline"
            >
              {siteConfig.team.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
