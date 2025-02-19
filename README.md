# EV Charging Simulation

This project simulates the energy consumption and power demand of electric vehicle (EV) charging stations.

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Run the development server:**

   ```sh
   npm run dev
   ```

3. **Build the project:**

   ```sh
   npm run build
   ```

4. **Preview the build:**
   ```sh
   npm run preview
   ```

## Simulation

The simulation logic is implemented in [`src/utils/simulation.ts`](src/utils/simulation.ts). It calculates the total energy consumed, theoretical max power demand, actual max power demand, and concurrency factor.

## Frontend

The frontend is built with React. The main pages are:

- [`Home`](src/pages/Home.tsx)
- [`Task1`](src/pages/Task1.tsx)
- [`Task2A`](src/pages/Task2A.tsx)

## Decisions

- React is used for simplicity/familiarity.
- I choosed Vite to bootstrap the React + Typescript project.
- I first choosed Tailwind CSS but the package was kinda broken so I didnt invested much time fixing the flow. I rather used simple css, organised in separate files.
- Task1 and Task2A are implemented, Task2B was skipped to save time.
- Only basic test are added
