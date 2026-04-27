/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Trajectory } from "./components/Trajectory";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection-cyan overflow-x-hidden">
      <Navbar />
      
      <main className="max-w-[1200px] mx-auto px-8 overflow-hidden">
        <Hero />
        <TechStack />
        <Trajectory />
      </main>

      <Footer />
    </div>
  );
}
