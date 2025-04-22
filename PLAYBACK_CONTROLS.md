```typescript
// PlaybackControls.tsx - component to control video playback and speed

import { Play, Pause, FastForward, Rewind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PlaybackControlsProps {
  title: string;
  isPlaying: boolean;
  playbackSpeed: number;
  togglePlayback: () => void;
  increaseSpeed: () => void;
  decreaseSpeed: () => void;
}

const PlaybackControls = ({
  title,
  isPlaying,
  playbackSpeed,
  togglePlayback,
  increaseSpeed,
  decreaseSpeed
}: PlaybackControlsProps) => {
  return (
    <div className="p-4 bg-card border-t shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex-1 text-center md:text-left truncate">
          <h2 className="text-lg font-semibold truncate">{title || 'No video selected'}</h2>
        </div>
        
        <div className="flex items-center justify-center gap-2">
          {/* Slow Down Button */}
          <Button 
            variant="outline" 
            size="icon"
            onClick={decreaseSpeed}
            disabled={playbackSpeed <= 0.25}
            title="Slow down"
          >
            <Rewind className="h-4 w-4" />
          </Button>
          
          {/* Current Speed Indicator */}
          <Badge variant="outline" className="min-w-[70px] flex justify-center">
            {playbackSpeed.toFixed(2)}x
          </Badge>
          
          {/* Speed Up Button */}
          <Button 
            variant="outline" 
            size="icon"
            onClick={increaseSpeed}
            disabled={playbackSpeed >= 2}
            title="Speed up"
          >
            <FastForward className="h-4 w-4" />
          </Button>
          
          {/* Play/Pause Button */}
          <Button 
            variant="default" 
            size="icon"
            onClick={togglePlayback}
            className="ml-2"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaybackControls;
```
