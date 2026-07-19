import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/clinical-trials")({
  component: () => <Outlet />,
});
