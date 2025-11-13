import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Settings as SettingsIcon,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Smartphone,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6 rounded-b-3xl shadow-medium">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/10 backdrop-blur p-3 rounded-2xl border border-white/20">
            <SettingsIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-primary-foreground/80 text-sm">
              Customize your experience
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Device Connection */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Device
          </h2>
          <Card className="p-4 bg-gradient-card border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Handlock Band</p>
                  <p className="text-xs text-muted-foreground">Connected</p>
                </div>
              </div>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            </div>
            <Button variant="outline" className="w-full">
              Manage Device
            </Button>
          </Card>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Notifications
          </h2>
          <Card className="divide-y bg-gradient-card border-border">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-primary" />
                <Label htmlFor="push-notifications" className="cursor-pointer">
                  Push Notifications
                </Label>
              </div>
              <Switch id="push-notifications" defaultChecked />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-primary" />
                <Label htmlFor="daily-reminders" className="cursor-pointer">
                  Daily Reminders
                </Label>
              </div>
              <Switch id="daily-reminders" defaultChecked />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-primary" />
                <Label htmlFor="achievement-alerts" className="cursor-pointer">
                  Achievement Alerts
                </Label>
              </div>
              <Switch id="achievement-alerts" defaultChecked />
            </div>
          </Card>
        </div>

        {/* Privacy */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Privacy & Security
          </h2>
          <Card className="divide-y bg-gradient-card border-border">
            <button className="p-4 flex items-center justify-between w-full text-left hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span>Privacy Settings</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-4 flex items-center justify-between w-full text-left hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span>Data & Storage</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Support
          </h2>
          <Card className="divide-y bg-gradient-card border-border">
            <button className="p-4 flex items-center justify-between w-full text-left hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-primary" />
                <span>Help Center</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-4 flex items-center justify-between w-full text-left hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-primary" />
                <span>Contact Support</span>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </div>

        {/* Account */}
        <Card className="bg-gradient-card border-border">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10 p-4"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </Button>
        </Card>

        {/* App Version */}
        <p className="text-center text-sm text-muted-foreground">
          Handlock v1.0.0
        </p>
      </div>

      <BottomNav />
    </div>
  );
};

export default Settings;
