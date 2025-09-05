import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Heart, BookOpen, Users, Calendar, Sparkles } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

export function PersonalInsights() {
  // Mock data for demonstration
  const moodTrendData = [
    { date: "Mon", mood: 4, journalEntries: 1 },
    { date: "Tue", mood: 3, journalEntries: 0 },
    { date: "Wed", mood: 5, journalEntries: 2 },
    { date: "Thu", mood: 4, journalEntries: 1 },
    { date: "Fri", mood: 5, journalEntries: 1 },
    { date: "Sat", mood: 4, journalEntries: 0 },
    { date: "Sun", mood: 4, journalEntries: 1 }
  ];

  const emotionData = [
    { emotion: "Grateful", count: 12, color: "#A7C7E7" },
    { emotion: "Happy", count: 8, color: "#FFB6C1" },
    { emotion: "Peaceful", count: 6, color: "#98FB98" },
    { emotion: "Anxious", count: 4, color: "#DDA0DD" },
    { emotion: "Excited", count: 7, color: "#F0E68C" }
  ];

  const relationshipData = [
    { person: "Alex", sentiment: 5, interactions: 8 },
    { person: "Mom", sentiment: 4, interactions: 5 },
    { person: "Sam", sentiment: 4, interactions: 3 },
    { person: "Work Team", sentiment: 3, interactions: 12 }
  ];

  const weeklyStats = {
    averageMood: 4.1,
    journalEntries: 6,
    checkins: 7,
    relationshipCheckins: 3,
    improvementTrend: "+12%"
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">Your Personal Insights</h2>
        <p className="text-muted-foreground">Beautiful visualizations of your emotional journey and growth</p>
      </div>

      {/* Weekly Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="soul-card text-center">
          <Heart className="mx-auto text-primary mb-2" size={24} />
          <div className="text-2xl font-bold text-primary">{weeklyStats.averageMood}</div>
          <p className="text-sm text-muted-foreground">Avg Mood</p>
          <div className="text-xs text-mint-deep mt-1">{weeklyStats.improvementTrend} from last week</div>
        </Card>

        <Card className="soul-card text-center">
          <BookOpen className="mx-auto text-accent mb-2" size={24} />
          <div className="text-2xl font-bold text-accent">{weeklyStats.journalEntries}</div>
          <p className="text-sm text-muted-foreground">Journal Entries</p>
          <div className="text-xs text-mint-deep mt-1">Great consistency!</div>
        </Card>

        <Card className="soul-card text-center">
          <Calendar className="mx-auto text-blush-deep mb-2" size={24} />
          <div className="text-2xl font-bold text-blush-deep">{weeklyStats.checkins}</div>
          <p className="text-sm text-muted-foreground">Daily Check-ins</p>
          <div className="text-xs text-mint-deep mt-1">Perfect week!</div>
        </Card>

        <Card className="soul-card text-center">
          <Users className="mx-auto text-lavender-deep mb-2" size={24} />
          <div className="text-2xl font-bold text-lavender-deep">{weeklyStats.relationshipCheckins}</div>
          <p className="text-sm text-muted-foreground">Relationship Check-ins</p>
          <div className="text-xs text-muted-foreground mt-1">Stay connected</div>
        </Card>
      </div>

      {/* Mood Trend Chart */}
      <Card className="soul-card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="text-primary" size={20} />
          7-Day Mood Trend
        </h3>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={moodTrendData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="date" axisLine={false} tickLine={false} />
              <YAxis domain={[1, 5]} axisLine={false} tickLine={false} />
              <Line 
                type="monotone" 
                dataKey="mood" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, fill: "hsl(var(--accent))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 p-3 bg-mint-soft/20 rounded-lg">
          <p className="text-sm">
            <strong>Insight:</strong> Your mood has been wonderfully stable this week! 
            Friday was your highest day - what made it special? 💫
          </p>
        </div>
      </Card>

      {/* Emotion Distribution */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="soul-card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="text-accent" size={20} />
            Emotion Tags This Week
          </h3>
          
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emotionData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="emotion" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Bar dataKey="count" fill="hsl(var(--lavender))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 p-3 bg-lavender-soft/20 rounded-lg">
            <p className="text-sm">
              <strong>Beautiful pattern:</strong> "Grateful" is your most frequent emotion! 
              Gratitude is strongly linked to happiness and life satisfaction. 🙏
            </p>
          </div>
        </Card>

        {/* Relationship Sentiment */}
        <Card className="soul-card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Users className="text-blush-deep" size={20} />
            Relationship Feelings
          </h3>
          
          <div className="space-y-3">
            {relationshipData.map((person) => (
              <div key={person.person} className="flex items-center justify-between p-3 bg-cream/50 rounded-lg">
                <div>
                  <span className="font-medium">{person.person}</span>
                  <div className="flex items-center gap-1 mt-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Heart 
                        key={i} 
                        size={12} 
                        className={`${i < person.sentiment ? 'text-blush fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{person.interactions} interactions</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-blush-soft/20 rounded-lg">
            <p className="text-sm">
              <strong>Relationship insight:</strong> Your connections with loved ones are strong! 
              Consider reaching out to Sam - they could use some extra love. 💕
            </p>
          </div>
        </Card>
      </div>

      {/* Journaling Insights */}
      <Card className="soul-card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="text-primary" size={20} />
          Journaling Journey
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-mint-soft/20 rounded-lg">
            <div className="text-2xl font-bold text-mint-deep">47</div>
            <p className="text-sm text-muted-foreground">Total Entries</p>
          </div>
          <div className="text-center p-4 bg-lavender-soft/20 rounded-lg">
            <div className="text-2xl font-bold text-lavender-deep">6</div>
            <p className="text-sm text-muted-foreground">This Week</p>
          </div>
          <div className="text-center p-4 bg-blush-soft/20 rounded-lg">
            <div className="text-2xl font-bold text-blush-deep">18</div>
            <p className="text-sm text-muted-foreground">Day Streak</p>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gradient-to-r from-lavender-soft/20 to-blush-soft/20 rounded-lg">
          <h4 className="font-semibold mb-2">Your Most Meaningful Entry This Week:</h4>
          <p className="text-sm italic text-muted-foreground">
            "Today I realized how much I've grown in my ability to handle stress. 
            Six months ago, this situation would have overwhelmed me, but today I felt calm and capable..."
          </p>
        </div>
      </Card>

      {/* Encouraging Message */}
      <Card className="soul-card bg-gradient-to-r from-mint-soft/20 to-lavender-soft/20 text-center">
        <div className="space-y-4">
          <div className="flex justify-center gap-2">
            <Sparkles className="text-primary animate-pulse" size={24} />
            <Heart className="text-accent animate-pulse" size={24} />
            <Sparkles className="text-primary animate-pulse" size={24} />
          </div>
          <h3 className="text-xl font-semibold gradient-text">You're Growing Beautifully</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your consistency in self-reflection and emotional awareness is incredible. 
            Every check-in, every journal entry, every moment of mindfulness is contributing to your wellbeing. 
            Keep nurturing this beautiful relationship with yourself. 🌱✨
          </p>
          <Button variant="outline" className="mt-4">
            <Calendar className="mr-2" size={16} />
            View Monthly Report
          </Button>
        </div>
      </Card>
    </div>
  );
}