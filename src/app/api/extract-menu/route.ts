import { google } from "@ai-sdk/google";
import { streamObject } from "ai";
import { restaurantMenuSchema } from "@/lib/schema";

export async function POST(req: Request) {
  try {
    const body = await req.json() as { url?: string };
    const { url } = body;

    if (!url) {
      return Response.json({ error: "URL is required" }, { status: 400 });
    }

    // Fetch the content of the URL
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return Response.json(
          { error: "Failed to fetch the restaurant website" },
          { status: 500 }
        );
      }

      const html = await response.text();

      // Use Gemini to extract the menu with streaming
      const result = streamObject({
        model: google("gemini-2.0-flash-001"),
        schema: restaurantMenuSchema,
        prompt: `
          You are a helpful assistant that extracts vegetarian menu items from restaurant websites.
          
          Given the HTML content of a restaurant website, extract the restaurant name and all vegetarian menu items.
          
          For each menu item, provide:
          1. The name of the dish
          2. A description if available
          3. The price if available
          
          Only include items that are clearly vegetarian or can be made vegetarian.
          If you're unsure if an item is vegetarian, include it and note this in the description.
          
          HTML content:
          ${html}
        `,
      });

      // Return a streaming response
      return result.toTextStreamResponse();
    } catch (fetchError) {
      console.error("Error fetching or processing URL:", fetchError);
      return Response.json(
        { error: "Failed to process the restaurant website" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error extracting menu:", error);
    return Response.json(
      { error: "Failed to extract menu" },
      { status: 500 }
    );
  }
} 