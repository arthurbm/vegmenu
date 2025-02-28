import Link from "next/link";
import { HydrateClient } from "@/trpc/server";
import {
  Leaf,
  Utensils,
  Search,
  Heart,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <HydrateClient>
      <div className="flex min-h-full w-full flex-col overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background px-4 py-20 text-center md:py-32">
          {/* Background decorative elements */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute -right-16 bottom-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute left-1/2 top-1/4 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/5 blur-2xl"></div>
          </div>

          {/* Floating leaves animation */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-float absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                }}
              >
                <Leaf
                  size={24 + Math.random() * 24}
                  className="rotate-45 text-primary/10"
                  strokeWidth={1.5}
                />
              </div>
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-5xl">
            {/* Logo and title */}
            <div className="mb-6 flex flex-col items-center justify-center gap-4">
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/60 to-primary/40 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-background p-4 ring-1 ring-border">
                  <Utensils size={40} className="text-primary" />
                </div>
              </div>
              <h1 className="animate-fade-in bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl">
                VEGMENU
              </h1>
            </div>

            <p className="animate-fade-in mx-auto mb-8 max-w-2xl text-xl font-light leading-relaxed text-muted-foreground md:text-2xl">
              Discover delicious vegetarian options from your favorite
              restaurants with the power of AI
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/extract" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                >
                  <Search size={18} />
                  Extract Menu
                  <ChevronRight size={16} />
                </Button>
              </Link>
              <Link href="#features" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary/20 text-primary hover:bg-primary/5 hover:text-primary sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <div className="flex flex-col items-center">
                <span className="text-sm text-muted-foreground">
                  Scroll to explore
                </span>
                <ArrowRight size={20} className="mt-2 rotate-90 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted/30 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Discover Vegetarian Options Anywhere
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                VEGMENU helps you find plant-based dishes at any restaurant with
                powerful AI technology
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="card-transition rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Search size={24} className="text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-foreground">
                  AI-Powered Extraction
                </h3>
                <p className="text-muted-foreground">
                  Our advanced AI scans restaurant websites to identify
                  vegetarian options automatically
                </p>
              </div>

              {/* Feature 2 */}
              <div className="card-transition rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart size={24} className="text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-foreground">
                  Save Your Favorites
                </h3>
                <p className="text-muted-foreground">
                  Create a personalized collection of vegetarian dishes from
                  your favorite restaurants
                </p>
              </div>

              {/* Feature 3 */}
              <div className="card-transition rounded-lg border border-border bg-card p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles size={24} className="text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-foreground">
                  Discover New Options
                </h3>
                <p className="text-muted-foreground">
                  Explore vegetarian dishes you might have missed on complex
                  restaurant menus
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                How It Works
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Finding vegetarian options has never been easier
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="relative">
                <div className="card-transition relative z-10 rounded-lg border border-border bg-card p-6">
                  <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <h3 className="mb-4 text-xl font-medium text-foreground">
                    Enter Restaurant URL
                  </h3>
                  <p className="text-muted-foreground">
                    Simply paste the link to any restaurant website
                  </p>
                </div>
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 md:block">
                  <ArrowRight size={24} className="text-primary/40" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="card-transition relative z-10 rounded-lg border border-border bg-card p-6">
                  <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <h3 className="mb-4 text-xl font-medium text-foreground">
                    AI Extracts Menu
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI identifies vegetarian dishes from the
                    restaurant&apos;s menu
                  </p>
                </div>
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 md:block">
                  <ArrowRight size={24} className="text-primary/40" />
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="card-transition relative z-10 rounded-lg border border-border bg-card p-6">
                  <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <h3 className="mb-4 text-xl font-medium text-foreground">
                    View & Save Results
                  </h3>
                  <p className="text-muted-foreground">
                    Browse the vegetarian options and save them for future
                    reference
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials/Benefits Section */}
        <section className="bg-muted/30 px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Why Choose VEGMENU
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                The smart way to discover vegetarian options
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Benefit 1 */}
              <div className="card-transition flex items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-foreground">
                    Save Time
                  </h3>
                  <p className="text-muted-foreground">
                    No more scrolling through lengthy menus to find vegetarian
                    options
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="card-transition flex items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-foreground">
                    Accurate Results
                  </h3>
                  <p className="text-muted-foreground">
                    Our AI is trained to identify vegetarian dishes with high
                    accuracy
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="card-transition flex items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-foreground">
                    Discover New Dishes
                  </h3>
                  <p className="text-muted-foreground">
                    Find hidden vegetarian gems you might have overlooked
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="card-transition flex items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Heart size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-foreground">
                    Personalized Collection
                  </h3>
                  <p className="text-muted-foreground">
                    Build your own library of favorite vegetarian dishes from
                    various restaurants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 py-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute right-1/4 top-3/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl rounded-2xl border border-border bg-card p-8 shadow-lg md:p-12">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Ready to Discover Vegetarian Options?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Start exploring vegetarian dishes from your favorite restaurants
                today
              </p>

              <Link href="/extract">
                <Button
                  size="lg"
                  className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Search size={18} />
                  Extract Menu Now
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-muted/30 px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-2">
                <Utensils size={24} className="text-primary" />
                <span className="text-xl font-bold text-primary">VEGMENU</span>
              </div>

              <p className="text-center text-sm text-muted-foreground md:text-right">
                © {new Date().getFullYear()} VEGMENU - All rights reserved.
                Powered by AI to help you find vegetarian options.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </HydrateClient>
  );
}
