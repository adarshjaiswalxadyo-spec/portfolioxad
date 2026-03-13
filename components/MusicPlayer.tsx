import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoMusicEnabled, setAutoMusicEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const autoAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    if (autoAudioRef.current) {
      autoAudioRef.current.volume = volume * 0.5; // Auto music at half volume
    }
  }, [volume]);

  useEffect(() => {
    // Try to auto-play background music on first user interaction
    const handleUserInteraction = () => {
      if (autoMusicEnabled && autoAudioRef.current && !autoAudioRef.current.paused) {
        return;
      }
      
      if (autoMusicEnabled && autoAudioRef.current) {
        autoAudioRef.current.play().catch(error => {
          console.log('Auto-music play failed:', error);
        });
      }
      
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [autoMusicEnabled]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log('Audio play failed:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleAutoMusic = () => {
    if (autoAudioRef.current) {
      if (autoMusicEnabled) {
        autoAudioRef.current.pause();
      } else {
        autoAudioRef.current.play().catch(error => {
          console.log('Auto-music play failed:', error);
        });
      }
      setAutoMusicEnabled(!autoMusicEnabled);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (autoAudioRef.current) {
      autoAudioRef.current.volume = newVolume * 0.5; // Auto music at half volume
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/assets/background-music.mp3"
      />
      
      <audio
        ref={autoAudioRef}
        loop
        src="/assets/autobackground-music.mp3"
      />
      
      <div className={`music-player ${isExpanded ? 'expanded' : 'mini'}`}>
        <div className="music-player-toggle" onClick={toggleExpanded}>
          <i className={`fas ${autoMusicEnabled ? 'fa-music' : 'fa-music-slash'} music-icon`}></i>
        </div>
        
        <div className="music-player-controls">
          <button 
            className="music-play-btn" 
            onClick={togglePlay}
            title={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
          
          <button 
            className="auto-music-btn" 
            onClick={toggleAutoMusic}
            title={autoMusicEnabled ? 'Disable Auto Music' : 'Enable Auto Music'}
          >
            <i className={`fas ${autoMusicEnabled ? 'fa-volume-up' : 'fa-volume-mute'}`}></i>
          </button>
          
          <div className="volume-control">
            <i className="fas fa-volume-down volume-icon"></i>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
            <i className="fas fa-volume-up volume-icon"></i>
          </div>
          
          <button 
            className="music-close-btn" 
            onClick={toggleExpanded}
            title="Minimize Player"
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .music-player {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary));
          border: 1px solid var(--border-color);
          border-radius: 50px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .music-player.mini {
          width: 50px;
          height: 50px;
        }
        
        .music-player.expanded {
          width: 320px;
          padding: 10px 15px;
          border-radius: 25px;
        }
        
        .music-player-toggle {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .music-player.expanded .music-player-toggle {
          display: none;
        }
        
        .music-player-toggle:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: scale(1.1);
        }
        
        .music-icon {
          font-size: 18px;
          color: var(--primary-color);
          animation: musicPulse 2s ease-in-out infinite;
        }
        
        @keyframes musicPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        .music-player-controls {
          display: none;
          align-items: center;
          gap: 8px;
        }
        
        .music-player.expanded .music-player-controls {
          display: flex;
        }
        
        .music-play-btn, .auto-music-btn {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .auto-music-btn {
          background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
        }
        
        .auto-music-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.4);
        }
        
        .music-play-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }
        
        .volume-control {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
        }
        
        .volume-icon {
          color: var(--text-secondary);
          font-size: 12px;
        }
        
        .volume-slider {
          flex: 1;
          height: 4px;
          background: var(--border-color);
          border-radius: 2px;
          outline: none;
          -webkit-appearance: none;
        }
        
        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          background: var(--primary-color);
          border-radius: 50%;
          cursor: pointer;
        }
        
        .volume-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: var(--primary-color);
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
        
        .music-close-btn {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .music-close-btn:hover {
          background: var(--primary-color);
          color: white;
        }
        
        @media (max-width: 768px) {
          .music-player {
            bottom: 15px;
            right: 15px;
          }
          
          .music-player.expanded {
            width: 280px;
          }
        }
      `}</style>
    </>
  );
};

export default MusicPlayer;
