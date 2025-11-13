import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingDown, TrendingUp, Calendar, Award } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Analytics = () => {
  const weeklyData = [
    { day: "Mon", usage: 85, limit: 100 },
    { day: "Tue", usage: 72, limit: 100 },
    { day: "Wed", usage: 95, limit: 100 },
    { day: "Thu", usage: 68, limit: 100 },
    { day: "Fri", usage: 55, limit: 100 },
    { day: "Sat", usage: 42, limit: 100 },
    { day: "Sun", usage: 38, limit: 100 },
  ];

  const stats = [
    {
      label: "Week Average",
      value: "65 min",
      change: -15,
      icon: TrendingDown,
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      label: "Best Day",
      value: "Sun - 38 min",
      icon: Award,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      label: "Total Saved",
      value: "4.2 hrs",
      change: 28,
      icon: TrendingUp,
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      label: "Days Active",
      value: "12 days",
      icon: Calendar,
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6 rounded-b-3xl shadow-medium">
        <h1 className="text-2xl font-bold mb-1">Your Progress</h1>
        <p className="text-primary-foreground/80 text-sm">
          Track your journey to better habits
        </p>
      </div>

      {/* Stats Grid */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-4 bg-gradient-card border-border">
              <div className={`${stat.bg} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              {stat.change && (
                <div className="flex items-center gap-1 mt-2">
                  <span className={`text-xs font-medium ${stat.color}`}>
                    {stat.change > 0 ? "+" : ""}
                    {stat.change}%
                  </span>
                  <span className="text-xs text-muted-foreground">vs last week</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Weekly Chart */}
        <Card className="p-6 bg-gradient-card border-border">
          <h2 className="font-semibold mb-6">This Week</h2>
          <div className="space-y-4">
            {weeklyData.map((day) => {
              const percentage = (day.usage / day.limit) * 100;
              const isUnderLimit = percentage < 80;
              return (
                <div key={day.day}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{day.day}</span>
                    <span className={isUnderLimit ? "text-success" : "text-warning"}>
                      {day.usage} min
                    </span>
                  </div>
                  <Progress
                    value={percentage}
                    className="h-2"
                  />
                </div>
              );
            })}
          </div>
        </Card>

        {/* Insights */}
        <Card className="p-4 bg-gradient-success text-success-foreground border-0">
          <div className="flex items-start gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Great Progress!</h3>
              <p className="text-sm text-success-foreground/90">
                You've reduced your screen time by 15% this week. Keep it up! 🎉
              </p>
            </div>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Analytics;
