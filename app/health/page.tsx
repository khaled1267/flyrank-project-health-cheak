import { HealthStatus } from "@/components/health-status";

export const metadata = { title: "Health check" };

export default function HealthPage() {
  return <HealthStatus />;
}
