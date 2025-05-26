
'use client';

import { useEffect, useRef, useState } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min.js';
import * as THREE from 'three';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Effect to get initial theme and set up observer for theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDarkTheme(document.documentElement.classList.contains('dark'));
    };

    if (typeof window !== "undefined") {
      checkTheme(); // Initial check

      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target === document.documentElement) {
            checkTheme();
          }
        }
      });
      observer.observe(document.documentElement, { attributes: true });

      return () => observer.disconnect();
    }
  }, []);

  // Effect to initialize/destroy Vanta based on theme
  useEffect(() => {
    if (!vantaRef.current) return;

    // Destroy existing effect if it exists
    if (vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null); 
    }

    // Common options for Vanta
    const commonOptions = {
      el: vantaRef.current,
      THREE, // Pass the THREE object
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
    };

    // Theme-specific options for Birds effect
    const birdsOptions = isDarkTheme
      ? { // Dark Theme
          backgroundColor: 0x1a202c, // Dark slate
          color1: 0x4fd1c5,         // Teal variant
          color2: 0x81e6d9,         // Lighter teal variant
          birdSize: 1.0,
          wingSpan: 25.00,
          speedLimit: 4.00,
          separation: 20.00,
          alignment: 25.00,
          cohesion: 25.00,
          quantity: 3.00,
          backgroundAlpha: 1.00
        }
      : { // Light Theme
          backgroundColor: 0xe5e8e8, // Existing theme's light gray
          color1: 0x64ccc5,         // Existing theme's soft teal (primary)
          color2: 0xa3e4d7,         // Existing theme's muted seafoam (accent)
          birdSize: 1.0,
          wingSpan: 25.00,
          speedLimit: 4.00,
          separation: 20.00,
          alignment: 25.00,
          cohesion: 25.00,
          quantity: 3.00,
          backgroundAlpha: 1.00
        };
    
    // Initialize Vanta effect
    const newEffect = BIRDS({
      ...commonOptions,
      ...birdsOptions
    });
    setVantaEffect(newEffect);

    // Cleanup function to destroy Vanta effect on component unmount or before re-initialization
    return () => {
      if (newEffect && typeof newEffect.destroy === 'function') {
        newEffect.destroy();
      }
    };
  }, [isDarkTheme]); // Re-run this effect when isDarkTheme changes

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1, // Ensure it's behind all other content
      }}
    />
  );
};

export default VantaBackground;
