import { useState, useEffect, useRef } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

export function useKonamiCode(onSuccess) {
  const bufferRef = useRef([]);
  const [isHackerMode, setIsHackerMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't listen inside forms
      if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;

      const key = e.key;
      bufferRef.current = [...bufferRef.current, key].slice(-KONAMI_CODE.length);
      const match = bufferRef.current.every((val, index) => val.toLowerCase() === KONAMI_CODE[index].toLowerCase());
      if (match) {
        setIsHackerMode(true);
        if (onSuccess) onSuccess();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSuccess]);

  const deactivate = () => setIsHackerMode(false);

  return { isHackerMode, deactivate };
}
