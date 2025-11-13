import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus, Trophy, Flame, Target, TrendingUp } from "lucide-react";

interface Habit {
  id: string;
  name: string;
  type: string;
  icon: string;
  timeLimit: number;
  timeUsed: number;
  streak: number;
  intensity: "mild" | "vibration";
}

const Dashboard = () => {
  const [habits] = useState<Habit[]>([
    {
      id: "1",
      name: "Instagram",
      type: "Social Media",
      icon: "📱",
      timeLimit: 60,
      timeUsed: 42,
      streak: 5,
      intensity: "vibration",
    },
    {
      id: "2",
      name: "Gaming",
      type: "Entertainment",
      icon: "🎮",
      timeLimit: 120,
      timeUsed: 95,
      streak: 3,
      intensity: "mild",
    },
  ]);

  const totalPoints = 1250;
  const currentStreak = 12;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6 rounded-b-3xl shadow-medium">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Welcome back!</h1>
            <p className="text-primary-foreground/80 text-sm">Keep up the great work</p>
          </div>
          <Link to="/rewards">
            <Button variant="secondary" size="sm" className="gap-2">
              <Trophy className="w-4 h-4" />
              {totalPoints}
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-white/10 backdrop-blur border-white/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Flame className="w-5 h-5 text-warning" />
              <span className="text-sm text-primary-foreground/80">Streak</span>
            </div>
            <p className="text-2xl font-bold">{currentStreak} days</p>
          </Card>
          <Card className="bg-white/10 backdrop-blur border-white/20 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-success" />
              <span className="text-sm text-primary-foreground/80">On Track</span>
            </div>
            <p className="text-2xl font-bold">{habits.length}/3</p>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Today's Progress */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Today's Habits
            </h2>
            <Link to="/add-habit">
              <Button size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Add
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {habits.map((habit) => (
              <Link key={habit.id} to={`/habit/${habit.id}`}>
                <Card className="p-4 hover:shadow-medium transition-shadow cursor-pointer bg-gradient-card border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{habit.icon}</div>
                      <div>
                        <h3 className="font-semibold">{habit.name}</h3>
                        <p className="text-xs text-muted-foreground">{habit.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-success/10 text-success px-2 py-1 rounded-full">
                      <Flame className="w-3 h-3" />
                      <span className="text-xs font-medium">{habit.streak}d</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {habit.timeUsed} / {habit.timeLimit} min
                      </span>
                      <span className="font-medium">
                        {Math.round((habit.timeUsed / habit.timeLimit) * 100)}%
                      </span>
                    </div>
                    <Progress
                      value={(habit.timeUsed / habit.timeLimit) * 100}
                      className="h-2"
                    />
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="capitalize bg-muted px-2 py-0.5 rounded">
                        {habit.intensity}
                      </span>
                      <span>•</span>
                      <span>{habit.timeLimit - habit.timeUsed} min remaining</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Tip */}
        <Card className="bg-gradient-secondary text-secondary-foreground p-4 border-0">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            💡 Daily Tip
          </h3>
          <p className="text-sm text-secondary-foreground/90">
            Taking short breaks every 30 minutes helps maintain focus and reduces screen fatigue.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
