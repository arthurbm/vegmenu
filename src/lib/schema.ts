import { z } from "zod";

export const menuItemSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.string().optional(),
  isVegetarian: z.boolean().default(true),
});

export const restaurantMenuSchema = z.object({
  restaurantName: z.string(),
  menuItems: z.array(menuItemSchema),
});

export type MenuItem = z.infer<typeof menuItemSchema>;
export type RestaurantMenu = z.infer<typeof restaurantMenuSchema>; 