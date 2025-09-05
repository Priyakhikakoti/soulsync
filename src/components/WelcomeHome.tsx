import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, MessageCircle, Users, BarChart3, Sparkles } from "lucide-react";
import { SoulSyncLogo } from "./SoulSyncLogo";

interface WelcomeHomeProps {
  setActiveTab: (tab: string) => void;
}

export function WelcomeHome({ setActiveTab }: WelcomeHomeProps) {
  const quickActions = [
    {
      id: "mood",
      title: "Check In",
      description: "How are you feeling today?",
      icon: Heart,
      color: "bg-mint",
      action: () => setActiveTab("mood")
    },
    {
      id: "journal", 
      title: "Journal",
      description: "Share your thoughts",
      icon: BookOpen,
      color: "bg-blush",
      action: () => setActiveTab("journal")
    },
    {
      id: "chat",
      title: "Chat",
      description: "Talk to your AI buddy",
      icon: MessageCircle,
      color: "bg-lavender",
      action: () => setActiveTab("chat")
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-8">
        <div className="floating-animation">
          <SoulSyncLogo size="lg" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Welcome back, Friend
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your safe space for mental wellness, relationship growth, and emotional support. 
            Let's check in with your heart today.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {quickActions.map((action) => (
            <Button
              key={action.id}
              onClick={action.action}
              size="lg"
              className={`${action.color} hover:scale-105 transition-all duration-300 text-white border-none`}
            >
              <action.icon className="mr-2" size={20} />
              {action.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="soul-card hover:scale-105 transition-all duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-mint to-mint-deep rounded-full flex items-center justify-center mx-auto">
              <Heart className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Mood Tracking</h3>
            <p className="text-muted-foreground">
              Daily check-ins with emotion tagging to understand your patterns and growth over time.
            </p>
          </div>
        </Card>

        <Card className="soul-card hover:scale-105 transition-all duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blush to-blush-deep rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Smart Journaling</h3>
            <p className="text-muted-foreground">
              Guided prompts and free writing to help you process thoughts and emotions safely.
            </p>
          </div>
        </Card>

        <Card className="soul-card hover:scale-105 transition-all duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-lavender to-lavender-deep rounded-full flex items-center justify-center mx-auto">
              <MessageCircle className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold">AI Companion</h3>
            <p className="text-muted-foreground">
              24/7 emotional support from your caring AI buddy who listens without judgment.
            </p>
          </div>
        </Card>

        <Card className="soul-card hover:scale-105 transition-all duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-destructive rounded-full flex items-center justify-center mx-auto">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Relationship Insights</h3>
            <p className="text-muted-foreground">
              Track how you feel about important people in your life and improve connections.
            </p>
          </div>
        </Card>

        <Card className="soul-card hover:scale-105 transition-all duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-ring rounded-full flex items-center justify-center mx-auto">
              <BarChart3 className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Personal Analytics</h3>
            <p className="text-muted-foreground">
              Beautiful visualizations of your emotional journey and personal growth trends.
            </p>
          </div>
        </Card>

        <Card className="soul-card hover:scale-105 transition-all duration-300">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-mint to-lavender rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Gentle Reminders</h3>
            <p className="text-muted-foreground">
              Caring notifications to check in with yourself and maintain consistent self-care.
            </p>
          </div>
        </Card>
      </div>

      {/* Encouraging Message */}
      <Card className="soul-card bg-gradient-to-r from-lavender-soft to-blush-soft text-center">
        <div className="space-y-4">
          <Sparkles className="mx-auto text-primary" size={32} />
          <h3 className="text-2xl font-semibold">You're doing great</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Taking time for your mental wellness is a beautiful act of self-love. 
            Every small step counts, and we're here to support you on this journey. 💕
          </p>
        </div>
      </Card>
    </div>
  );
}