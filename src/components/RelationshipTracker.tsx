import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Users, Plus, Heart, MessageCircle, Calendar, Trash2, Edit } from "lucide-react";

interface Person {
  id: string;
  name: string;
  relationship: string;
  lastCheckin: Date;
  currentFeeling: string;
  notes: string;
  emoji: string;
}

export function RelationshipTracker() {
  const [people, setPeople] = useState<Person[]>([
    {
      id: "1",
      name: "Alex",
      relationship: "Partner",
      lastCheckin: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      currentFeeling: "Connected and grateful",
      notes: "Had a wonderful conversation about our future plans",
      emoji: "💕"
    },
    {
      id: "2", 
      name: "Mom",
      relationship: "Family",
      lastCheckin: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      currentFeeling: "Loving but worried",
      notes: "She's been stressed about work. Want to call her more often.",
      emoji: "🤗"
    },
    {
      id: "3",
      name: "Sam",
      relationship: "Best Friend",
      lastCheckin: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      currentFeeling: "Miss them",
      notes: "Haven't caught up in a while. Should plan a coffee date!",
      emoji: "😊"
    }
  ]);

  const [newPerson, setNewPerson] = useState({
    name: "",
    relationship: "",
    emoji: "😊"
  });

  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [checkinFeeling, setCheckinFeeling] = useState("");
  const [checkinNotes, setCheckinNotes] = useState("");

  const relationshipTypes = [
    "Partner", "Family", "Best Friend", "Friend", "Colleague", "Mentor", "Other"
  ];

  const feelingEmojis = [
    { emoji: "💕", label: "Love" },
    { emoji: "😊", label: "Happy" },
    { emoji: "🤗", label: "Warm" },
    { emoji: "😐", label: "Neutral" },
    { emoji: "😕", label: "Concerned" },
    { emoji: "😔", label: "Distant" },
    { emoji: "😤", label: "Frustrated" }
  ];

  const addPerson = () => {
    if (!newPerson.name || !newPerson.relationship) return;

    const person: Person = {
      id: Date.now().toString(),
      name: newPerson.name,
      relationship: newPerson.relationship,
      lastCheckin: new Date(),
      currentFeeling: "Just added",
      notes: "",
      emoji: newPerson.emoji
    };

    setPeople([...people, person]);
    setNewPerson({ name: "", relationship: "", emoji: "😊" });
  };

  const updateCheckin = () => {
    if (!selectedPerson || !checkinFeeling) return;

    setPeople(people.map(person => 
      person.id === selectedPerson.id 
        ? { 
            ...person, 
            currentFeeling: checkinFeeling,
            notes: checkinNotes,
            lastCheckin: new Date()
          }
        : person
    ));

    setSelectedPerson(null);
    setCheckinFeeling("");
    setCheckinNotes("");
  };

  const getDaysAgo = (date: Date) => {
    const days = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    return `${days} days ago`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">Your People</h2>
        <p className="text-muted-foreground">Track how you feel about the important people in your life</p>
      </div>

      {/* Add New Person */}
      <Card className="soul-card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Plus className="text-primary" size={20} />
          Add Someone Important
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Input
            placeholder="Name"
            value={newPerson.name}
            onChange={(e) => setNewPerson({...newPerson, name: e.target.value})}
          />
          
          <select 
            className="w-full p-2 border border-border rounded-lg bg-background"
            value={newPerson.relationship}
            onChange={(e) => setNewPerson({...newPerson, relationship: e.target.value})}
          >
            <option value="">Select relationship</option>
            {relationshipTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <div className="flex gap-2">
            <select
              className="w-20 p-2 border border-border rounded-lg bg-background text-center"
              value={newPerson.emoji}
              onChange={(e) => setNewPerson({...newPerson, emoji: e.target.value})}
            >
              {feelingEmojis.map(item => (
                <option key={item.emoji} value={item.emoji}>{item.emoji}</option>
              ))}
            </select>
            <Button onClick={addPerson} className="flex-1">
              Add Person
            </Button>
          </div>
        </div>
      </Card>

      {/* People Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map((person) => (
          <Card 
            key={person.id} 
            className="soul-card hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{person.emoji}</div>
                  <div>
                    <h4 className="font-semibold text-lg">{person.name}</h4>
                    <p className="text-sm text-muted-foreground">{person.relationship}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Last check-in: {getDaysAgo(person.lastCheckin)}
                  </span>
                </div>
                
                <div className="p-3 bg-lavender-soft/20 rounded-lg">
                  <p className="font-medium text-sm mb-1">Current feeling:</p>
                  <p className="text-sm">{person.currentFeeling}</p>
                </div>

                {person.notes && (
                  <div className="p-3 bg-blush-soft/20 rounded-lg">
                    <p className="text-sm">{person.notes}</p>
                  </div>
                )}
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setSelectedPerson(person)}
                  >
                    <Heart size={14} className="mr-2" />
                    Check In
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>How do you feel about {person.name} today?</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Current feeling</label>
                      <Input
                        placeholder="e.g., Grateful, missing them, proud..."
                        value={checkinFeeling}
                        onChange={(e) => setCheckinFeeling(e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Notes (optional)</label>
                      <Textarea
                        placeholder="Any thoughts about your relationship or recent interactions..."
                        value={checkinNotes}
                        onChange={(e) => setCheckinNotes(e.target.value)}
                        className="min-h-[80px]"
                      />
                    </div>

                    <Button 
                      onClick={updateCheckin}
                      disabled={!checkinFeeling}
                      className="w-full"
                    >
                      Save Check-in
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        ))}
      </div>

      {people.length === 0 && (
        <Card className="soul-card text-center py-12">
          <Users className="mx-auto text-muted-foreground mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">No people added yet</h3>
          <p className="text-muted-foreground">
            Start by adding someone important to you above
          </p>
        </Card>
      )}

      <Card className="soul-card bg-mint-soft/20">
        <div className="flex items-start gap-3">
          <MessageCircle className="text-primary mt-1" size={20} />
          <div>
            <h4 className="font-medium mb-1">Weekly Reflection</h4>
            <p className="text-sm text-muted-foreground">
              SoulSync will gently remind you to check in with your relationships weekly. 
              Healthy connections are built through consistent care and attention.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}