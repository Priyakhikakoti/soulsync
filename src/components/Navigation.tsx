import { Heart, Home, BookOpen, MessageCircle, Users, BarChart3, User } from "lucide-react";
import { SoulSyncLogo } from "./SoulSyncLogo";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "mood", label: "Mood", icon: Heart },
    { id: "journal", label: "Journal", icon: BookOpen },
    { id: "chat", label: "Chat", icon: MessageCircle },
    { id: "relationships", label: "People", icon: Users },
    { id: "insights", label: "Insights", icon: BarChart3 },
  ];

  return (
    <div className="bg-card/80 backdrop-blur-sm border-b border-border/50 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <SoulSyncLogo size="sm" />
        
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-lavender-soft/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button className="p-2 rounded-xl hover:bg-lavender-soft/50 transition-colors">
          <User size={20} className="text-muted-foreground" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mt-3">
        <div className="flex overflow-x-auto gap-2 pb-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-300 ${
                  activeTab === item.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-lavender-soft/50 text-muted-foreground"
                }`}
              >
                <Icon size={16} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}