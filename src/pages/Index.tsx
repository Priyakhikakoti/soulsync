import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { WelcomeHome } from "@/components/WelcomeHome";
import { MoodTracker } from "@/components/MoodTracker";
import { JournalInterface } from "@/components/JournalInterface";
import { AIChat } from "@/components/AIChat";
import { RelationshipTracker } from "@/components/RelationshipTracker";
import { PersonalInsights } from "@/components/PersonalInsights";

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
        return <RelationshipTracker />;
      case "insights":
        return <PersonalInsights />;
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
