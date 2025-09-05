import { Heart } from "lucide-react";

interface SoulSyncLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function SoulSyncLogo({ size = "md", showText = true, className = "" }: SoulSyncLogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 40
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Heart 
          size={iconSizes[size]} 
          className="text-primary fill-current pulse-gentle" 
        />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      </div>
      {showText && (
        <span className={`font-poppins font-semibold gradient-text ${sizeClasses[size]}`}>
          SoulSync
        </span>
      )}
    </div>
  );
}