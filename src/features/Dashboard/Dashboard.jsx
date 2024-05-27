import { DashboardSection } from "./DashboardSection";

export const Dashboard = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-y-4">
      <h1>Recommended for you</h1>
      <div className="space-y-4">
        <DashboardSection />
        <DashboardSection />
        <DashboardSection />
      </div>
    </div>
  );
};
