import Image from "next/image";

// The line below is rewritten by the "Hero Image Updater" n8n workflow on every
// form upload. Keep it on one line and keep the @hero-image marker intact — the
// workflow matches /^const HERO_IMAGE = "[^"]*"; \/\/ @hero-image$/m.
const HERO_IMAGE = "/images/hero-20260901-220552-1527.jpg"; // @hero-image

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 sm:py-28">
      <div className="flex flex-col gap-6 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
          Git as the CMS
        </p>

        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Ship a new hero image
          <span className="block text-sky-600 dark:text-sky-400">
            without touching the code.
          </span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl dark:text-neutral-400">
          Upload a picture through a form. An n8n workflow commits it straight to
          GitHub, rewrites this component to point at it, and Vercel redeploys the
          site on its own. Every change lands as a reviewable diff.
        </p>
      </div>

      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-2xl ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10">
        <Image
          src={HERO_IMAGE}
          alt="Hero"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover"
        />
      </div>

      <p className="text-center font-mono text-xs text-neutral-500 sm:text-left dark:text-neutral-500">
        Currently showing: {HERO_IMAGE}
      </p>
    </section>
  );
}
