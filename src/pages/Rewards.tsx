import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Gift, Star, Lock } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Rewards = () => {
  const currentPoints = 1250;
  const nextRewardPoints = 2000;
  const progress = (currentPoints / nextRewardPoints) * 100;

  const achievements = [
    {
      id: 1,
      title: "First Step",
      description: "Complete your first day",
      points: 50,
      unlocked: true,
      icon: "🎯",
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "Maintain a 7-day streak",
      points: 200,
      unlocked: true,
      icon: "⚔️",
    },
    {
      id: 3,
      title: "Month Master",
      description: "Complete 30 days",
      points: 500,
      unlocked: false,
      icon: "👑",
    },
    {
      id: 4,
      title: "Habit Hero",
      description: "Track 5 different habits",
      points: 300,
      unlocked: false,
      icon: "🦸",
    },
  ];

  const vouchers = [
    {
      id: 1,
      title: "Coffee Reward",
      brand: "Starbucks",
      points: 500,
      discount: "$5 Off",
      available: true,
    },
    {
      id: 2,
      title: "Movie Night",
      brand: "Cinema",
      points: 800,
      discount: "Free Ticket",
      available: true,
    },
    {
      id: 3,
      title: "Premium Upgrade",
      brand: "Handlock Pro",
      points: 2000,
      discount: "1 Month Free",
      available: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6 rounded-b-3xl shadow-medium">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold mb-1">Rewards</h1>
            <p className="text-primary-foreground/80 text-sm">
              Celebrate your progress
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur p-4 rounded-2xl border border-white/20">
            <Trophy className="w-8 h-8 text-warning" />
          </div>
        </div>

        <Card className="bg-white/10 backdrop-blur border-white/20 p-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-3xl font-bold">{currentPoints}</p>
              <p className="text-sm text-primary-foreground/80">Total Points</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-primary-foreground/80">Next reward at</p>
              <p className="text-lg font-semibold">{nextRewardPoints}</p>
            </div>
          </div>
          <Progress value={progress} className="h-2 bg-white/20" />
        </Card>
      </div>

      <div className="p-6 space-y-6">
        {/* Achievements */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-warning" />
            <h2 className="text-lg font-semibold">Achievements</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={`p-4 ${
                  achievement.unlocked
                    ? "bg-gradient-card border-border"
                    : "bg-muted/50 border-border"
                }`}
              >
                <div className="text-center">
                  <div className={`text-4xl mb-2 ${!achievement.unlocked && "grayscale opacity-50"}`}>
                    {achievement.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    {achievement.unlocked ? (
                      <>
                        <Trophy className="w-3 h-3 text-warning" />
                        <span className="text-xs font-medium text-warning">
                          +{achievement.points}
                        </span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {achievement.points} pts
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Vouchers */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Gift className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold">Available Vouchers</h2>
          </div>
          <div className="space-y-3">
            {vouchers.map((voucher) => (
              <Card
                key={voucher.id}
                className={`p-4 ${
                  voucher.available
                    ? "bg-gradient-card border-border"
                    : "bg-muted/50 border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Gift className={`w-4 h-4 ${voucher.available ? "text-accent" : "text-muted-foreground"}`} />
                      <h3 className="font-semibold">{voucher.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{voucher.brand}</p>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {voucher.discount}
                    </div>
                  </div>
                  <div className="text-right">
                    <Button
                      size="sm"
                      disabled={!voucher.available}
                      variant={voucher.available ? "default" : "secondary"}
                    >
                      {voucher.available ? "Redeem" : "Locked"}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      {voucher.points} points
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <Card className="bg-gradient-secondary text-secondary-foreground p-4 border-0">
          <h3 className="font-semibold mb-2">💡 Earn More Points</h3>
          <ul className="text-sm text-secondary-foreground/90 space-y-1">
            <li>• Maintain daily streaks (+10 pts/day)</li>
            <li>• Stay under time limits (+50 pts/habit)</li>
            <li>• Complete achievements (+50-500 pts)</li>
          </ul>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
};

export default Rewards;
