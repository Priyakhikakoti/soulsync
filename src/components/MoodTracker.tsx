import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Sparkles, Cloud, Sun, CloudRain } from "lucide-react";

export function MoodTracker() {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [moodNote, setMoodNote] = useState("");
  const [emotionTags, setEmotionTags] = useState<string[]>([]);

  const moods = [
    { emoji: "😊", label: "Great", color: "bg-mint", value: "great" },
    { emoji: "🙂", label: "Good", color: "bg-mint-soft", value: "good" },
    { emoji: "😐", label: "Okay", color: "bg-cream", value: "okay" },
    { emoji: "😔", label: "Low", color: "bg-blush-soft", value: "low" },
    { emoji: "😢", label: "Sad", color: "bg-blush", value: "sad" },
  ];

  const emotions = [
    "Grateful", "Anxious", "Excited", "Lonely", "Peaceful", "Stressed",
    "Hopeful", "Overwhelmed", "Content", "Frustrated", "Loved", "Worried"
  ];

  const toggleEmotion = (emotion: string) => {
    setEmotionTags(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">How are you feeling today?</h2>
        <p className="text-muted-foreground">Take a moment to check in with yourself</p>
      </div>

      <Card className="soul-card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Heart className="text-primary" size={20} />
          Your Mood
        </h3>
        
        <div className="grid grid-cols-5 gap-4 mb-6">
          {moods.map((mood) => (
            <button
              key={mood.value}
              onClick={() => setSelectedMood(mood.value)}
              className={`mood-circle ${mood.color} ${
                selectedMood === mood.value ? "ring-4 ring-primary/50 scale-110" : ""
              }`}
            >
              <span className="text-2xl">{mood.emoji}</span>
            </button>
          ))}
        </div>

        {selectedMood && (
          <div className="text-center mb-6">
            <p className="text-lg font-medium text-primary">
              You're feeling {moods.find(m => m.value === selectedMood)?.label.toLowerCase()} today
            </p>
          </div>
        )}
      </Card>

      <Card className="soul-card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Sparkles className="text-accent" size={20} />
          Emotion Tags
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {emotions.map((emotion) => (
            <button
              key={emotion}
              onClick={() => toggleEmotion(emotion)}
              className={`emotion-tag ${
                emotionTags.includes(emotion)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-lavender-soft border-border hover:bg-lavender"
              }`}
            >
              {emotion}
            </button>
          ))}
        </div>
      </Card>

      <Card className="soul-card">
        <h3 className="text-xl font-semibold mb-4">What's on your mind?</h3>
        <Textarea
          placeholder="Share what made this mood happen, or just how you're feeling right now..."
          value={moodNote}
          onChange={(e) => setMoodNote(e.target.value)}
          className="min-h-[100px] resize-none border-border/50 focus:border-primary"
        />
      </Card>

      <Button 
        size="lg" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        disabled={!selectedMood}
      >
        Save Today's Check-in ✨
      </Button>
    </div>
  );
}