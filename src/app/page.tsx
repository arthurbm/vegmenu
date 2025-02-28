import { HydrateClient } from "@/trpc/server";
import { RestaurantLinkForm } from "@/components/RestaurantLinkForm";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
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
                  className="text-primary"
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
            <h1 className="mb-3 text-5xl font-extrabold tracking-tight text-primary">
              VEGMENU
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Discover and save vegetarian menu items from your favorite
              restaurants with the power of AI
            </p>
          </div>
          <RestaurantLinkForm />
          <footer className="mt-16 text-center text-sm text-muted-foreground">
            <p>
              Powered by AI to help you find vegetarian options anywhere you go.
            </p>
          </footer>
        </div>
      </main>
    </HydrateClient>
  );
}
