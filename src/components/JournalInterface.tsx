import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Lightbulb, Calendar, Sparkles } from "lucide-react";

export function JournalInterface() {
  const [selectedPrompt, setSelectedPrompt] = useState<string>("");
  const [journalEntry, setJournalEntry] = useState("");
  const [customEntry, setCustomEntry] = useState(false);

  const journalPrompts = [
    {
      id: "smile",
      icon: "😊",
      title: "What made you smile today?",
      prompt: "Think about those little moments that brought joy to your day..."
    },
    {
      id: "grateful",
      icon: "🙏",
      title: "What are you grateful for?",
      prompt: "List three things you're thankful for right now..."
    },
    {
      id: "challenge",
      icon: "💪",
      title: "What challenge did you face?",
      prompt: "Reflect on how you handled difficulties today..."
    },
    {
      id: "avoiding",
      icon: "🤔",
      title: "Is there something you're avoiding?",
      prompt: "Sometimes we put off things that matter. What's on your mind?"
    },
    {
      id: "growth",
      icon: "🌱",
      title: "How did you grow today?",
      prompt: "What did you learn about yourself or the world?"
    },
    {
      id: "tomorrow",
      icon: "🌅",
      title: "What are you looking forward to?",
      prompt: "Think about what excites you about tomorrow or the future..."
    }
  ];

  const handlePromptSelect = (prompt: any) => {
    setSelectedPrompt(prompt.prompt);
    setCustomEntry(false);
  };

  const startCustomEntry = () => {
    setSelectedPrompt("");
    setCustomEntry(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">Your Journal Space</h2>
        <p className="text-muted-foreground">A safe place for your thoughts and reflections</p>
      </div>

      {!selectedPrompt && !customEntry ? (
        <div className="space-y-6">
          <Card className="soul-card text-center">
            <BookOpen className="mx-auto text-primary mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">Choose your writing style</h3>
            <p className="text-muted-foreground mb-6">
              Start with a guided prompt or write freely
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={startCustomEntry}
                className="border-primary/50 hover:bg-primary/10"
              >
                <Lightbulb className="mr-2" size={16} />
                Free Writing
              </Button>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {journalPrompts.map((prompt) => (
              <Card 
                key={prompt.id}
                className="journal-prompt cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => handlePromptSelect(prompt)}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{prompt.icon}</div>
                  <h4 className="font-semibold mb-2">{prompt.title}</h4>
                  <p className="text-sm text-muted-foreground">{prompt.prompt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <Card className="soul-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="text-primary" size={20} />
                Today's Entry
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setSelectedPrompt("");
                  setCustomEntry(false);
                  setJournalEntry("");
                }}
              >
                Choose Different Prompt
              </Button>
            </div>

            {selectedPrompt && (
              <div className="bg-lavender-soft/30 p-4 rounded-xl mb-4">
                <p className="text-primary font-medium">{selectedPrompt}</p>
              </div>
            )}

            <Textarea
              placeholder={customEntry ? "What's on your mind today? Let your thoughts flow..." : "Start writing your response..."}
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              className="min-h-[300px] resize-none border-border/50 focus:border-primary text-base leading-relaxed"
            />

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/50">
              <span className="text-sm text-muted-foreground">
                {journalEntry.length} characters
              </span>
              
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={journalEntry.trim().length < 10}
              >
                <Sparkles className="mr-2" size={16} />
                Save Entry
              </Button>
            </div>
          </Card>

          <Card className="soul-card bg-mint-soft/20">
            <div className="text-center">
              <Lightbulb className="mx-auto text-accent mb-2" size={24} />
              <p className="text-sm text-muted-foreground">
                <strong>Writing tip:</strong> Don't worry about grammar or structure. 
                This is your space to be authentic and honest with yourself.
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}