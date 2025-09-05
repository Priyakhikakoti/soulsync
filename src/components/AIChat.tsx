import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, Heart, Sparkles } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi there! I'm your SoulSync buddy 💕 I'm here to listen, support, and chat about whatever's on your heart. How are you feeling today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Mock AI responses for demo
  const aiResponses = [
    "I hear you, and what you're feeling is completely valid. It's okay to have difficult days. 💙",
    "That sounds really meaningful to you. Tell me more about what made that moment special? ✨",
    "I'm so glad you shared that with me. It takes courage to be vulnerable, and I appreciate you trusting me. 🌟",
    "It sounds like you're going through a lot right now. Remember that it's okay to take things one step at a time. 🌱",
    "That's wonderful! I love hearing about the things that bring you joy. Those moments matter so much. 😊",
    "Thank you for being so open with me. Your feelings are important, and I'm here to support you through this. 💜"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[600px] flex flex-col">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold gradient-text mb-2">Chat with SoulSync</h2>
        <p className="text-muted-foreground">Your supportive AI companion is here to listen</p>
      </div>

      <Card className="soul-card flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/50">
          <div className="w-10 h-10 bg-gradient-to-br from-lavender to-blush rounded-full flex items-center justify-center">
            <Heart size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold">SoulSync AI</h3>
            <p className="text-sm text-muted-foreground">Your caring companion</p>
          </div>
          <div className="ml-auto">
            <div className="w-3 h-3 bg-mint rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-lavender-soft text-foreground"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="Share what's on your mind..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border-border/50 focus:border-primary"
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send size={18} />
          </Button>
        </div>
      </Card>

      <Card className="soul-card mt-4 bg-cream-warm/30">
        <div className="flex items-start gap-3">
          <Sparkles className="text-accent mt-1" size={20} />
          <div>
            <h4 className="font-medium mb-1">Remember</h4>
            <p className="text-sm text-muted-foreground">
              I'm here to provide emotional support and a listening ear. For serious mental health concerns, 
              please reach out to a qualified professional or crisis helpline.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}