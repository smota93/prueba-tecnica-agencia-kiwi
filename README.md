# Prueba Técnica - Agencia Kiwi

This is a [Next.js](https://nextjs.org) project, initialized using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

To begin, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

You can start editing the main page by modifying `app/page.tsx`. The page will automatically update as you make changes to the file.

This project utilizes [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for automatic optimization and loading of [Geist](https://vercel.com/font), a new font family provided by Vercel.

# Software Development Decisions

Given my limited experience with the Next.js framework, I leveraged components from the official Next.js course to expedite the development of the dashboard. In contrast, the login section was developed entirely from scratch to ensure it meticulously matched the design specifications.

## Responsiveness

I adopted a 'Mobile First' design approach to guarantee that all components are 100% responsive. This was achieved by effectively utilizing Tailwind CSS's breakpoint-based styling capabilities.

## Component Structure

The project's architecture is organized around its two main sections: 'login' and 'dashboard'. Within these, dedicated folders were created to logically group components and other utilities, ensuring a clean and maintainable structure.

## Data Mocking

I based the data generation strategy on the methods used in the Next.js course, making specific adjustments to avoid direct database queries for this project.

## AI Tools Utilized

During development, I utilized Cursor's integrated autocomplete and chat features to accelerate development and quickly resolve framework-related queries. Additionally, I employed Gemini 2.5 Flash to review and refine the grammar and phrasing of this README file.
