# Music File Instructions

To add background music to your portfolio:

## **Required Music Files:**

1. **Main Background Music** - `/public/assets/background-music.mp3`
   - User-controlled music (play/pause manually)
   - Full volume control

2. **Automatic Background Music** - `/public/assets/autobackground-music.mp3`
   - Auto-plays on first user interaction
   - Plays at 50% volume of main music
   - Can be toggled on/off

## **File Locations:**
```
portfolio-complete/
└── public/
    └── assets/
        ├── background-music.mp3       <-- Add your main music file here
        └── autobackground-music.mp3   <-- Add your auto music file here
```

## **Music Player Features:**

### **Mini Player Mode:**
- ✅ **Circular music icon** - Floating in bottom-right corner
- ✅ **Auto-music indicator** - Shows if auto music is enabled
- ✅ **Pulsing animation** - Visual feedback

### **Expanded Player Mode:**
- ✅ **Play/Pause button** - Control main music manually
- ✅ **Auto-music toggle** - Enable/disable automatic music
- ✅ **Volume slider** - Control both music volumes
- ✅ **Minimize button** - Return to mini mode

### **Smart Features:**
- ✅ **Auto-play detection** - Starts auto music on first user interaction
- ✅ **Volume balancing** - Auto music plays at 50% volume
- ✅ **Cross-page persistence** - Music continues across all pages
- ✅ **Browser compliance** - Handles autoplay restrictions

## **How to Use:**

1. **Mini Mode** - Small music icon shows auto-music status
2. **Click Icon** - Expands to full player with controls
3. **Auto Music** - Starts automatically (blue button)
4. **Manual Music** - Use play button for main music (purple button)
5. **Volume Control** - Slider affects both music tracks
6. **Toggle Auto** - Click auto-music button to enable/disable

## **Recommended Music:**

### **Main Music (background-music.mp3):**
- Lo-fi beats
- Ambient instrumental
- Light electronic music
- User choice tracks

### **Auto Music (autobackground-music.mp3):**
- Subtle ambient sounds
- Gentle background music
- Non-distracting instrumental
- Continuous atmosphere music

## **Technical Details:**

- **Supported formats:** .mp3, .wav, .ogg
- **Recommended file size:** Under 5MB each
- **Auto-music volume:** 50% of main volume
- **Browser compatibility:** Handles autoplay policies
- **Mobile responsive:** Optimized for all devices

**Note:** The music player is ready to use once you add both music files to the assets folder. Auto music will start automatically on first user interaction!
