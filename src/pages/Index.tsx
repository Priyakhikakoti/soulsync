import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { WelcomeHome } from "@/components/WelcomeHome";
import { MoodTracker } from "@/components/MoodTracker";
import { JournalInterface } from "@/components/JournalInterface";
import { AIChat } from "@/components/AIChat";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "mood":
        return <MoodTracker />;
      case "journal":
        return <JournalInterface />;
      case "chat":
        return <AIChat />;
      case "relationships":
        return (
          <div className="max-w-2xl mx-auto text-center py-16">
            <h2 className="text-3xl font-bold gradient-text mb-4">Relationship Tracker</h2>
            <p className="text-muted-foreground">Coming soon - Track your connections with important people</p>
          </div>
        );
      case "insights":
        return (
          <div className="max-w-2xl mx-auto text-center py-16">
            <h2 className="text-3xl font-bold gradient-text mb-4">Personal Insights</h2>
            <p className="text-muted-foreground">Coming soon - Beautiful analytics of your emotional journey</p>
          </div>
        );
      default:
        return <WelcomeHome setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {renderActiveTab()}
      </main>
    </div>
  );
};

export default Index;
