# Next.js Webapp Template

A clean, modern boilerplate for building web applications with Next.js 16, React 19, and Tailwind CSS.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Runtime:** [Bun](https://bun.sh/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (based on Radix UI)
- **Language:** TypeScript

## Getting Started

First, install the dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier
- `bun run clean` - Remove build artifacts and cache

## Project Structure

```
src/
├── app/          # Next.js App Router pages and layouts
├── components/   # React components
│   └── ui/       # Shadcn UI components
├── lib/          # Utility functions
└── ...
```
