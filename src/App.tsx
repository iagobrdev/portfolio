/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-surface selection-cyan overflow-x-hidden">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-8 overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Shell>
            <HomePage />
          </Shell>
        }
      />
      <Route
        path="/projects"
        element={
          <Shell>
            <ProjectsPage />
          </Shell>
        }
      />
    </Routes>
  );
}
