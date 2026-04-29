import { fxEventPlatformProject } from "./fx-event-platform/project";
import type { Project } from "./types";

export const PROJECTS: Project[] = [fxEventPlatformProject];

export function getProjectById(projectId: string) {
  return PROJECTS.find((project) => project.id === projectId);
}

export type { Project, ProjectDetail, ProjectServiceBrief } from "./types";
