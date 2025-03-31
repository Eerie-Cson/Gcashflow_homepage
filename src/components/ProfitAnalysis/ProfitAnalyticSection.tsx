import React from "react";
import { PieChart, BarChart2, Activity, ChevronRight } from "lucide-react";

interface ReportCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

interface MetricCardProps {
  label: string;
  value: string;
  isProfit?: boolean;
}

interface ProgressMetricCardProps {
  label: string;
  value: string;
  percentage: number;
  color: string;
}
const MetricCard = ({ label, value, isProfit = false }: MetricCardProps) => (
  <div className="bg-gray-800/80 p-4 rounded-xl">
    <div className="flex justify-between items-center">
      <span className="text-gray-300">{label}</span>
      <span
        className={`font-bold ${isProfit ? "text-green-400" : "text-white"}`}
      >
        {value}
      </span>
    </div>
  </div>
);

// Reusable component for progress bars
const ProgressMetricCard = ({
  label,
  value,
  percentage,
  color,
}: ProgressMetricCardProps) => (
  <div className="bg-gray-800/80 p-4 rounded-xl">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-300">{label}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
      <div
        className={`h-full ${color} rounded-full`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

// Reusable action button component
const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button className="mt-6 w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 py-3 rounded-xl font-medium transition-colors flex items-center justify-center">
    <span>{children}</span>
    <ChevronRight className="h-4 w-4 ml-1" />
  </button>
);

// Individual report card components
const DailyReportCard = () => (
  <ReportCard title="Daily Report" icon={<PieChart className="h-5 w-5" />}>
    <MetricCard label="Total Transactions" value="42" />
    <MetricCard label="Total Profit" value="₱845.00" isProfit={true} />
    <MetricCard label="Avg. Profit per Transaction" value="₱20.12" />
    <ActionButton>View Full Report</ActionButton>
  </ReportCard>
);

const WeeklyReportCard = () => (
  <ReportCard title="Weekly Report" icon={<BarChart2 className="h-5 w-5" />}>
    <ProgressMetricCard
      label="Cash-In Profit"
      value="₱2,450.00"
      percentage={65}
      color="bg-blue-500"
    />
    <ProgressMetricCard
      label="Cash-Out Profit"
      value="₱1,320.00"
      percentage={35}
      color="bg-purple-500"
    />
    <MetricCard label="Total Weekly Profit" value="₱3,770.00" isProfit={true} />
    <ActionButton>View Full Report</ActionButton>
  </ReportCard>
);

const MonthlyInsightCard = () => (
  <ReportCard title="Monthly Insight" icon={<Activity className="h-5 w-5" />}>
    <MetricCard
      label="Month-to-Date Profit"
      value="₱12,450.00"
      isProfit={true}
    />
    <MetricCard label="Profit Growth" value="+18.5%" isProfit={true} />
    <MetricCard label="Best Performing Day" value="Monday" />
    <ActionButton>View Full Report</ActionButton>
  </ReportCard>
);

const ReportCard = ({ title, icon, children }: ReportCardProps) => (
  <div className="relative p-0.5 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 transform hover:scale-105 transition-all duration-300">
    <div className="bg-gray-900 rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="bg-blue-900/30 p-2 rounded-lg text-blue-400">
          {icon}
        </div>
      </div>
      <div className="space-y-4 flex-grow">{children}</div>
    </div>
  </div>
);

const ProfitAnalyticsSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-black via-blue-900/5 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DailyReportCard />
          <WeeklyReportCard />
          <MonthlyInsightCard />
        </div>
      </div>
    </section>
  );
};

const SectionHeader = () => (
  <div className="text-center mb-16">
    <h2 className="inline-block text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Smart Profit Analytics
    </h2>
    <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
      Track your business performance with detailed reports and visual analytics
    </p>
  </div>
);

export default ProfitAnalyticsSection;
