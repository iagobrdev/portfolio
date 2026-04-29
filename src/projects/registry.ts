import type { ComponentType } from "react";
import type { ProjectDetail } from "./types";
import { FxEventPlatformDetailSections } from "./fx-event-platform/FxEventPlatformDetailSections";

type ProjectDetailRendererProps = {
  detail: ProjectDetail;
};

const PROJECT_DETAIL_RENDERERS: Record<
  string,
  ComponentType<ProjectDetailRendererProps>
> = {
  "fx-event-platform": FxEventPlatformDetailSections,
};

export function getProjectDetailRenderer(projectId: string) {
  return PROJECT_DETAIL_RENDERERS[projectId];
}
