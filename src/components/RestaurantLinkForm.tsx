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
  } = useObject<RestaurantMenu>({
    api: "/api/extract-menu",
    schema: restaurantMenuSchema,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setError(null);
    submit(values);
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Extract Vegetarian Menu</CardTitle>
          <CardDescription>
            Enter a restaurant website URL to extract vegetarian menu items
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Restaurant URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://restaurant-website.com"
                        {...field}
                      />
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
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Extracting..." : "Extract Menu"}
                </Button>
                {isLoading && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => stop()}
                  >
                    Stop
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && !menu && (
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-600">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-600">{error}</p>
          </CardContent>
        </Card>
      )}

      {menu && (
        <Card>
          <CardHeader>
            <CardTitle>
              {menu?.restaurantName ?? "Loading restaurant name..."}
            </CardTitle>
            <CardDescription>Vegetarian Menu Items</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!menu?.menuItems || menu.menuItems.length === 0 ? (
              isLoading ? (
                <p className="text-muted-foreground">
                  Extracting menu items...
                </p>
              ) : (
                <p className="text-muted-foreground">
                  No vegetarian items found
                </p>
              )
            ) : (
              menu.menuItems.map((item, index) => (
                <div key={index} className="space-y-1">
                  <h3 className="font-medium">{item?.name}</h3>
                  {item?.description && (
                    <p className="text-sm text-muted-foreground">
                      {item?.description}
                    </p>
                  )}
                  {item?.price && (
                    <p className="text-sm font-medium">{item?.price}</p>
                  )}
                </div>
              ))
            )}
            {isLoading && (
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/4" />
              </div>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              {isLoading ? "Extracting menu..." : "Menu extraction complete."}{" "}
              Some items may not be accurately identified as vegetarian.
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
