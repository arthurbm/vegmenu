"use client";

import { useState } from "react";
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

const formSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
});

export function RestaurantLinkForm() {
  const [error, setError] = useState<string | null>(null);

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

  console.log(menuError);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    submit(values);
  }

  return (
    <div className="space-y-8">
      <Card className="relative overflow-hidden border-2 border-primary/20 shadow-lg">
        <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
          <div className="absolute right-0 top-0 h-16 w-16 -translate-y-1/2 translate-x-1/2 rotate-45 bg-primary/10"></div>
        </div>
        <CardHeader className="bg-primary/5 pb-8">
          <CardTitle className="text-2xl font-bold text-primary">
            Extract Vegetarian Menu
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
                    <FormLabel className="font-medium text-primary">
                      Restaurant URL
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="https://restaurant-website.com"
                          className="border-primary/20 pl-10 focus-visible:ring-primary/30"
                          {...field}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                      </div>
                    </FormControl>
                    <FormDescription className="text-muted-foreground/80">
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
                  className="bg-primary hover:bg-primary/90"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Extracting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      Extract Menu
                    </span>
                  )}
                </Button>
                {isLoading && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => stop()}
                    className="border-primary/20 text-primary hover:bg-primary/5 hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <rect width="6" height="16" x="4" y="4" rx="1" />
                      <rect width="6" height="16" x="14" y="4" rx="1" />
                    </svg>
                    Stop
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && !menu && (
        <Card className="border-primary/20 shadow-md">
          <CardHeader>
            <Skeleton className="h-8 w-3/4 bg-primary/10" />
            <Skeleton className="h-4 w-1/2 bg-primary/10" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-6 w-3/4 bg-primary/10" />
                <Skeleton className="h-4 w-full bg-primary/10" />
                <Skeleton className="h-4 w-1/4 bg-primary/10" />
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {error && (
        <Card className="border-red-200 bg-red-50 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
              Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      )}

      {menu && (
        <Card className="overflow-hidden border-primary/20 shadow-md">
          <CardHeader className="border-b border-primary/10 bg-primary/5">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path d="M7 2v20" />
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
              </svg>
              <CardTitle className="text-xl font-bold text-primary">
                {menu?.restaurantName ?? "Loading restaurant name..."}
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              Vegetarian Menu Items
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {!menu?.menuItems || menu.menuItems.length === 0 ? (
                isLoading ? (
                  <div className="flex items-center justify-center py-8 text-muted-foreground">
                    <svg
                      className="mr-2 h-5 w-5 animate-spin text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Extracting menu items...
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-3 text-muted-foreground/50"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="8" x2="16" y1="12" y2="12" />
                    </svg>
                    <p>No vegetarian items found</p>
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
                    className="overflow-hidden rounded-lg border border-primary/10 bg-primary/5 transition-all hover:shadow-md"
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
                  <Skeleton className="h-6 w-3/4 bg-primary/10" />
                  <Skeleton className="h-4 w-full bg-primary/10" />
                  <Skeleton className="h-4 w-1/4 bg-primary/10" />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="border-t border-primary/10 bg-primary/5">
            <div className="flex items-center text-xs text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 text-primary/60"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              {isLoading ? "Extracting menu..." : "Menu extraction complete."}{" "}
              Some items may not be accurately identified as vegetarian.
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
