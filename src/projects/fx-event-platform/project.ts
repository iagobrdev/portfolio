import type { Project } from "../types";

export const fxEventPlatformProject: Project = {
  id: "fx-event-platform",
  name: "FX Event Platform",
  whatItIs:
    "An event-driven platform for foreign-exchange rates with near real-time updates.",
  whatItDoes: [
    "Fetches latest rates from a public provider on a schedule.",
    "Processes updates through an event pipeline and stores snapshots.",
    "Exposes read-only APIs for latest rates, listings, and conversion.",
  ],
  summary:
    "A near–real-time foreign-exchange stack built with Java and Spring Boot. It polls a public Brazilian rates provider on a schedule, turns each refresh into events on Kafka, and materializes the latest quotes in MongoDB so reads stay fast and predictable. A dedicated API gateway serves clients only from that stored snapshot: latest rate by pair, paginated listings, and cross-currency conversion by walking the graph of available pairs—so ingestion and serving stay decoupled and the live feed never has to sit in the request path.",
  href: "https://github.com/iagobrdev/fx-event-platform",
  language: "Java",
  liveFxRates: true,
  detail: {
    overview:
      "A small platform for near–real-time foreign-exchange data. It continuously refreshes rates from an external Brazilian FX source, pushes changes through an event pipeline, and serves them to clients through a dedicated API. The goal is a clear split between “getting data in” and “serving data out,” so ingestion and reads can evolve independently.",
    architecture:
      "The design is event-driven and split into three Spring Boot applications. Ingestion never calls your public API directly—the outside provider is polled on your side, updates flow as messages, and the HTTP surface reads from a stored snapshot. That keeps traffic patterns predictable and isolates the live feed from how clients query rates.",
    howItWorks: [
      "On a schedule, the ingestion side pulls the latest quotes from the external FX API.",
      "Each meaningful change is emitted as an event on a shared message channel.",
      "A consumer applies those events and updates the database that holds the current rates.",
      "Clients only talk to the gateway: they can fetch a pair, browse paginated lists, or convert an amount using the stored graph of pairs.",
    ],
    services: [
      {
        title: "Exchange rate service",
        description:
          "The only part that talks to the public FX provider. It runs on a timer, batches requests sensibly, keeps recent state in memory, and publishes rate updates for the rest of the system.",
      },
      {
        title: "FX processing service",
        description:
          "Subscribes to those updates, normalizes them, and writes the latest values into persistent storage so the gateway always reads a consistent picture.",
      },
      {
        title: "API gateway",
        description:
          "The customer-facing layer: read-only REST endpoints for latest rates and conversion. It reads from the database and figures out cross rates when two currencies are not stored as a single pair.",
      },
    ],
  },
};
