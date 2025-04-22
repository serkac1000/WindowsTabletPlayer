```typescript
// This is a simplified version of the videoStore.ts file
// showing the core functionality of the video player application

import { create } from 'zustand';
import { ScenarioSetting } from '@shared/schema';
import { apiRequest } from './queryClient';

interface VideoState {
  scenarios: ScenarioSetting[];
  currentVideo: {
    url: string;
    title: string;
  };
  isPlaying: boolean;
  playbackSpeed: number;
  fetchScenarios: () => Promise<void>;
  selectScenario: (scenario: ScenarioSetting) => void;
  togglePlayback: () => void;
  setPlaybackSpeed: (speed: number) => void;
  increaseSpeed: () => void;
  decreaseSpeed: () => void;
  updateScenario: (id: number, field: 'title' | 'url', value: string) => void;
  saveScenario: (id: number) => Promise<void>;
  resetScenarios: () => Promise<void>;
}

export const useVideoStore = create<VideoState>()((set, get) => ({
  scenarios: [],
  currentVideo: {
    url: '',
    title: '',
  },
  isPlaying: false,
  playbackSpeed: 1.0,
  
  // Load scenarios from the server
  fetchScenarios: async () => {
    try {
      const scenarios = await apiRequest<ScenarioSetting[]>('/api/scenarios');
      set({ scenarios });
    } catch (error) {
      console.error('Failed to fetch scenarios:', error);
    }
  },
  
  // Select a scenario for playback
  selectScenario: (scenario) => {
    set({
      currentVideo: {
        url: scenario.url,
        title: scenario.title,
      },
      isPlaying: true,
    });
  },
  
  // Toggle play/pause
  togglePlayback: () => {
    set((state) => ({ isPlaying: !state.isPlaying }));
  },
  
  // Set specific playback speed
  setPlaybackSpeed: (speed) => {
    set({ playbackSpeed: speed });
  },
  
  // Increase playback speed (for slow motion analysis)
  increaseSpeed: () => {
    set((state) => ({
      playbackSpeed: Math.min(state.playbackSpeed + 0.25, 2.0),
    }));
  },
  
  // Decrease playback speed (for slow motion analysis)
  decreaseSpeed: () => {
    set((state) => ({
      playbackSpeed: Math.max(state.playbackSpeed - 0.25, 0.25),
    }));
  },
  
  // Update scenario settings locally
  updateScenario: (id, field, value) => {
    set((state) => ({
      scenarios: state.scenarios.map((scenario) =>
        scenario.id === id ? { ...scenario, [field]: value } : scenario
      ),
    }));
  },
  
  // Save scenario settings to the server
  saveScenario: async (id) => {
    const { scenarios } = get();
    const scenario = scenarios.find((s) => s.id === id);
    
    if (!scenario) return;
    
    try {
      await apiRequest('/api/scenarios/' + id, {
        method: 'PATCH',
        body: JSON.stringify({
          title: scenario.title,
          url: scenario.url,
        }),
      });
    } catch (error) {
      console.error('Failed to save scenario:', error);
    }
  },
  
  // Reset all scenarios to default values
  resetScenarios: async () => {
    try {
      await apiRequest('/api/scenarios/reset', {
        method: 'POST',
      });
      get().fetchScenarios();
    } catch (error) {
      console.error('Failed to reset scenarios:', error);
    }
  },
}));
```
