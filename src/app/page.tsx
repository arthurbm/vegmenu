import { HydrateClient } from "@/trpc/server";
import { RestaurantLinkForm } from "@/components/RestaurantLinkForm";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-4xl font-bold">VEGMENU</h1>
            <p className="text-lg text-muted-foreground">
              Discover and save vegetarian menu items from your favorite
              restaurants
            </p>
          </div>
          <RestaurantLinkForm />
        </div>
      </main>
    </HydrateClient>
  );
}
