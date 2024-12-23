This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run using:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Styles

[TailwindCSS](https://tailwindcss.com/) and [Chakra UI](https://www.chakra-ui.com/) were used to quickly build the components in this app.

Background particle animation based on [this one at CSSCrafter](https://csscrafter.com/css-particle-effects/)

## Charts

Charts are shown using [ChartJS](https://www.chartjs.org/docs/latest/)

## Data

[MockAPI](https://mockapi.io/projects) is used to get the data used in the charts and tables

## Project structure
```
src/
├── app/
│   ├── dashboard/          dashboard page
│   ├── infrastructure/     API fetch
│   ├── tables/             tables page
│   ├── ui/                 styles
│   ├── favicon.ico
│   ├── globals.css         global styles
│   ├── layout.js           shared layout for all pages
│   ├── page.js             homepage
├── components/
│   ├── atomic/             custom components separated by complexity
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   ├── chakra-ui/          chakra ui components
│   ├── tables/             use of chakra ui tables
├── utils/                  reusable small functions (animation, date formatting)

```