# VEGMENU

VEGMENU is a platform that helps users discover and save vegetarian menu items from restaurant websites. This application uses AI to extract vegetarian menu items from restaurant websites.

## Features

- Extract vegetarian menu items from restaurant websites using AI
- View extracted menu items in a clean, organized interface
- Simple and intuitive user experience

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- pnpm
- PostgreSQL database

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/vegmenu.git
   cd vegmenu
   ```

2. Install dependencies
   ```bash
   nvm use  # Use the Node.js version specified in .nvmrc
   pnpm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file and add your Google API key and other required variables.

4. Start the development server
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter a restaurant website URL in the form
2. Click "Extract Menu" to extract vegetarian menu items
3. View the extracted menu items

## Technologies Used

- Next.js
- TypeScript
- Vercel AI SDK
- Google Generative AI (Gemini)
- Shadcn UI
- Zod for schema validation
- React Hook Form

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This project was created as part of the VEGMENU PRD implementation
- Thanks to Vercel for the AI SDK

---

This project was bootstrapped with [Create T3 App](https://create.t3.gg/).
