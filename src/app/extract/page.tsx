import Link from "next/link";
import { HydrateClient } from "@/trpc/server";
import { RestaurantLinkForm } from "@/components/RestaurantLinkForm";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function ExtractPage() {
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

          <div className="mb-8">
            <Link href="/">
              <Button
                variant="ghost"
                className="mb-4 gap-1 text-primary hover:bg-primary/5 hover:text-primary"
              >
                <ChevronLeft size={16} />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-center text-3xl font-bold text-primary md:text-4xl">
              Extract Vegetarian Menu
            </h1>
            <p className="mt-2 text-center text-muted-foreground">
              Enter a restaurant website URL to discover vegetarian options
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
