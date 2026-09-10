import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Check if the user is using a fine pointer device (mouse) rather than touch
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    const handlePointerChange = (e) => {
      setIsPointerDevice(e.matches);
    };

    mediaQuery.addEventListener('change', handlePointerChange);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return { mousePosition, isHovered, setIsHovered, isPointerDevice };
}
