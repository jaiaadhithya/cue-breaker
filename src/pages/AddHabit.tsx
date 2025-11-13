import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Zap, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const categories = [
  { emoji: "📱", label: "Social Media", color: "bg-blue-500/10 text-blue-500" },
  { emoji: "🎮", label: "Gaming", color: "bg-purple-500/10 text-purple-500" },
  { emoji: "🚬", label: "Smoking", color: "bg-red-500/10 text-red-500" },
  { emoji: "🍺", label: "Drinking", color: "bg-amber-500/10 text-amber-500" },
  { emoji: "🍔", label: "Snacking", color: "bg-orange-500/10 text-orange-500" },
  { emoji: "🎯", label: "Other", color: "bg-gray-500/10 text-gray-500" },
];

const AddHabit = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [habitName, setHabitName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [timeLimit, setTimeLimit] = useState("60");
  const [intensity, setIntensity] = useState<"mild" | "vibration">("vibration");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!habitName || !selectedCategory) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Habit added! 🎉",
      description: `${habitName} tracking is now active`,
    });
    
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="text-primary-foreground hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold">Add New Habit</h1>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Habit Name */}
        <div className="space-y-2">
          <Label htmlFor="habit-name">Habit or App Name</Label>
          <Input
            id="habit-name"
            placeholder="e.g., Instagram, YouTube, Smoking"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            className="h-12"
          />
        </div>

        {/* Category */}
        <div className="space-y-3">
          <Label>Category</Label>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <Card
                key={cat.label}
                className={`p-4 cursor-pointer transition-all hover:shadow-medium ${
                  selectedCategory === cat.label
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover:bg-muted"
                }`}
                onClick={() => setSelectedCategory(cat.label)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{cat.emoji}</div>
                  <p className="text-xs font-medium">{cat.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Time Limit */}
        <div className="space-y-2">
          <Label htmlFor="time-limit">Daily Time Limit (minutes)</Label>
          <Input
            id="time-limit"
            type="number"
            min="1"
            placeholder="60"
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            className="h-12"
          />
          <p className="text-xs text-muted-foreground">
            You'll be reminded when this limit is reached
          </p>
        </div>

        {/* Reminder Intensity */}
        <div className="space-y-3">
          <Label>Reminder Type</Label>
          <RadioGroup value={intensity} onValueChange={(value: any) => setIntensity(value)}>
            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="vibration" id="vibration" />
                <Label htmlFor="vibration" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted p-2 rounded-lg">
                      <Bell className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Vibration</p>
                      <p className="text-xs text-muted-foreground">Gentle reminder</p>
                    </div>
                  </div>
                </Label>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="mild" id="mild" />
                <Label htmlFor="mild" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="bg-warning/10 p-2 rounded-lg">
                      <Zap className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <p className="font-medium">Mild Jolt</p>
                      <p className="text-xs text-muted-foreground">
                        Stronger alert (requires device)
                      </p>
                    </div>
                  </div>
                </Label>
              </div>
            </Card>
          </RadioGroup>
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full h-12 text-base" size="lg">
          Add Habit
        </Button>
      </form>
    </div>
  );
};

export default AddHabit;
