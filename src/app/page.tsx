import { HydrateClient } from "@/trpc/server";
import { RestaurantLinkForm } from "@/components/RestaurantLinkForm";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-full w-full flex-col bg-gradient-to-b from-green-50/90 via-white/80 to-green-50/90 px-4 py-12 backdrop-blur-sm">
        <div className="relative mx-auto max-w-5xl flex-1">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-32 -right-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>

          {/* Leafy decoration */}
          <div className="absolute -left-10 -top-10 hidden md:block">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary/20"
            >
              <path
                d="M60 0C60 33.1371 33.1371 60 0 60C33.1371 60 60 86.8629 60 120C60 86.8629 86.8629 60 120 60C86.8629 60 60 33.1371 60 0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="absolute -bottom-10 -right-10 hidden md:block">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-45 text-primary/20"
            >
              <path
                d="M60 0C60 33.1371 33.1371 60 0 60C33.1371 60 60 86.8629 60 120C60 86.8629 86.8629 60 120 60C86.8629 60 60 33.1371 60 0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="mb-16 text-center">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/60 to-primary/40 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative rounded-full bg-background p-4 ring-1 ring-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse text-primary"
                  >
                    <path d="M17 10h-1.35a3.45 3.45 0 0 0-3.13 2.5" />
                    <path d="M5 10h1.35a3.45 3.45 0 0 1 3.13 2.5" />
                    <path d="M8.34 17.34 5 20.68" />
                    <path d="M2.67 14 5 16.34l2.33-2.34" />
                    <path d="M15.66 17.34 19 20.68" />
                    <path d="M21.33 14 19 16.34l-2.33-2.34" />
                    <path d="M12 6v2" />
                    <path d="M10 4h4" />
                  </svg>
                </div>
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-primary">
                VEGMENU
              </h1>
            </div>

            <p className="animate-fade-in mx-auto max-w-2xl text-xl font-light leading-relaxed text-muted-foreground">
              Discover and save vegetarian menu items from your favorite
              restaurants with the power of AI
            </p>
          </div>

          <RestaurantLinkForm />

          <footer className="mt-20 text-center text-sm text-muted-foreground">
            <div className="mx-auto max-w-lg border-t border-primary/10 pt-6">
              <p className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-primary"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                </svg>
                Powered by AI to help you find vegetarian options anywhere you
                go
              </p>
              <p className="mt-2 text-xs">
                © {new Date().getFullYear()} VEGMENU - All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </HydrateClient>
  );
}
