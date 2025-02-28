"use client";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { type RestaurantMenu } from "@/lib/schema";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { restaurantMenuSchema } from "@/lib/schema";
import {
  Check,
  Globe,
  Link,
  Loader2,
  MessageSquare,
  Pause,
  AlertCircle,
  Info,
  Utensils,
} from "lucide-react";

const formSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
});

export function RestaurantLinkForm() {
  const [error, setError] = useState<string | null>(null);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  const {
    object: menu,
    isLoading,
    submit,
    stop,
    error: menuError,
  } = useObject<RestaurantMenu>({
    api: "/api/extract-menu",
    schema: restaurantMenuSchema,
  });

  // Display menu error if it exists
  useEffect(() => {
    if (menuError) {
      setError(
        menuError.message || "Failed to extract menu. Please try again.",
      );
    }
  }, [menuError]);

  // Show success animation when menu is loaded
  useEffect(() => {
    if (menu && !isLoading) {
      setShowSuccessAnimation(true);
      const timer = setTimeout(() => setShowSuccessAnimation(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [menu, isLoading]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    setShowSuccessAnimation(false);
    submit(values);
  }

  return (
    <div className="space-y-8">
      <Card className="card-transition relative overflow-hidden border-2 border-border shadow-md">
        <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
          <div className="absolute right-0 top-0 h-16 w-16 -translate-y-1/2 translate-x-1/2 rotate-45 bg-primary/10"></div>
        </div>
        {showSuccessAnimation && (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="rounded-full bg-primary/20 p-4">
              <Check size={48} className="animate-pulse text-primary" />
            </div>
          </div>
        )}
        <CardHeader className="bg-muted/50 pb-8">
          <CardTitle className="text-2xl font-bold text-primary">
            <span className="flex items-center gap-2">
              <Utensils size={24} className="text-primary" />
              Extract Vegetarian Menu
            </span>
          </CardTitle>
          <CardDescription className="text-base">
            Enter a restaurant website URL to discover vegetarian options
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-1.5 font-medium text-primary">
                      <Globe size={16} className="text-primary" />
                      Restaurant URL
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="https://restaurant-website.com"
                          className="border-input pl-10 focus-visible:ring-primary/30"
                          {...field}
                        />
                        <Link
                          size={18}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60"
                        />
                      </div>
                    </FormControl>
                    <FormDescription>
                      Enter the URL of a restaurant website to extract its
                      vegetarian menu
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      Extracting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <MessageSquare size={18} />
                      Extract Menu
                    </span>
                  )}
                </Button>
                {isLoading && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => stop()}
                    className="border-input text-primary hover:bg-primary/5 hover:text-primary"
                  >
                    <Pause size={18} className="mr-2" />
                    Stop
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && !menu && (
        <Card className="shimmer border-border shadow-md">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 bg-muted" />
            <Skeleton className="h-4 w-1/2 bg-muted" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-6 w-3/4 bg-muted" />
                <Skeleton className="h-4 w-full bg-muted" />
                <Skeleton className="h-4 w-1/4 bg-muted" />
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {error && (
        <Card className="animate-fade-in border-destructive/20 bg-destructive/5 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertCircle size={20} />
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {menu && (
        <Card className="animate-fade-in overflow-hidden border-border shadow-md">
          <CardHeader className="border-b border-border bg-muted/50">
            <div className="flex items-center gap-2">
              <div className="animate-float flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <Utensils size={20} className="text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-primary">
                  {menu?.restaurantName ?? "Loading restaurant name..."}
                </CardTitle>
                <CardDescription className="text-base">
                  Vegetarian Menu Items
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="max-h-[60vh] overflow-y-auto pt-6">
            <div className="space-y-6">
              {!menu?.menuItems || menu.menuItems.length === 0 ? (
                isLoading ? (
                  <div className="flex items-center justify-center py-8 text-muted-foreground">
                    <Loader2
                      size={20}
                      className="mr-2 animate-spin text-primary"
                    />
                    Extracting menu items...
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                    <div className="rounded-full bg-muted p-6">
                      <AlertCircle
                        size={40}
                        className="text-muted-foreground"
                      />
                    </div>
                    <p className="mt-4 font-medium">
                      No vegetarian items found
                    </p>
                    <p className="mt-2 text-sm">
                      Try another restaurant or check if the website has a menu
                      section.
                    </p>
                  </div>
                )
              ) : (
                menu.menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="card-transition overflow-hidden rounded-lg border border-border bg-card"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-primary">
                          {item?.name}
                        </h3>
                        {item?.price && (
                          <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                            {item?.price}
                          </span>
                        )}
                      </div>
                      {item?.description && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item?.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              )}
              {isLoading && menu?.menuItems && menu.menuItems.length > 0 && (
                <div className="space-y-2">
                  <Skeleton className="h-6 w-3/4 bg-muted" />
                  <Skeleton className="h-4 w-full bg-muted" />
                  <Skeleton className="h-4 w-1/4 bg-muted" />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="border-t border-border bg-muted/50">
            <div className="flex items-center text-xs text-muted-foreground">
              <Info size={14} className="mr-1 text-primary/60" />
              {isLoading
                ? "Extracting menu..."
                : "Menu extraction complete."}{" "}
              Some items may not be accurately identified as vegetarian.
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
