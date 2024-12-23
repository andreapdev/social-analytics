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

## Process

Branding: https://camaleonicanalytics.com/

### Wireframe

Figma: https://www.figma.com/design/FtbL8COgWGnWhe2KdWP2va/Social-Media-Analytics?node-id=5-2&t=IEsSBSOGJbxMRVs8-1

<img width="702" alt="image" src="https://github.com/user-attachments/assets/435de24a-972f-429c-ac76-d416214e494a" />

### End result

#### Homepage

<img width="201" alt="image" src="https://github.com/user-attachments/assets/d89ab387-105e-4f66-a1b8-93c756eaba21" />
<img width="200" alt="image" src="https://github.com/user-attachments/assets/7a9478ca-2f28-4ac6-b68d-8e05cbd2945a" />

#### Dashboard
<img width="198" alt="image" src="https://github.com/user-attachments/assets/0fc266ef-3f3c-4281-be88-bd7da31629f9" />
<img width="202" alt="image" src="https://github.com/user-attachments/assets/d1d9d5cd-86cc-4aa4-9c7e-8b1aa91363b8" />

#### Tables
<img width="198" alt="image" src="https://github.com/user-attachments/assets/b903114d-74c5-4303-8852-2254bb7b6146" />
<img width="202" alt="image" src="https://github.com/user-attachments/assets/9a317e97-76f1-4bdd-9498-b5331701015b" />


