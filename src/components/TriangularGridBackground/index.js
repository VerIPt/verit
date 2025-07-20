import React, { useState, useEffect, useRef } from 'react';

const TriangularGridBackground = ({ primaryColor = { r: 255, g: 140, b: 0 } }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // 🎨 ZENTRALE FARBKONFIGURATION - Verwendet die übergebene primaryColor
  const colorTheme = {
    // Hauptfarbe - kommt von der übergeordneten Komponente
    primary: primaryColor,
    
    // Automatisch berechnete Farbtöne (basierend auf primary)
    get background() { return `rgb(${Math.max(5, this.primary.r * 0.02)}, ${Math.max(8, this.primary.g * 0.03)}, ${Math.max(15, this.primary.b * 0.05)})`; },
    get baseTone() { return { r: Math.max(20, this.primary.r * 0.08), g: Math.max(30, this.primary.g * 0.12), b: Math.max(50, this.primary.b * 0.2) }; },
    get glowColor() { return `rgba(${this.primary.r}, ${this.primary.g}, ${this.primary.b}, 0.3)`; },
    get glowColorMid() { return `rgba(${this.primary.r}, ${this.primary.g}, ${this.primary.b}, 0.1)`; },
    get textGradientStart() { return `rgb(${Math.min(255, this.primary.r + 50)}, ${Math.min(255, this.primary.g + 50)}, ${Math.min(255, this.primary.b + 50)})`; },
    get textGradientEnd() { return `rgb(${Math.max(100, this.primary.r - 50)}, ${Math.max(100, this.primary.g - 50)}, ${Math.max(100, this.primary.b - 50)})`; }
  };

  // Gitter-Konfiguration
  const triangleSize = 100;
  const rows = 20;
  const cols = 30;

  useEffect(() => {
    let animationFrameId;
    let currentMousePos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        
        // Berechne SVG-Dimensionen
        const svgWidth = cols * triangleSize * 0.866;
        const svgHeight = rows * triangleSize * 0.75 + triangleSize * 0.25;
        
        // Normalisiere Mausposition (0-1) und transformiere in SVG-Koordinaten
        const normalizedX = (e.clientX - rect.left) / rect.width;
        const normalizedY = (e.clientY - rect.top) / rect.height;
        
        currentMousePos = {
          x: normalizedX * svgWidth,
          y: normalizedY * svgHeight
        };

        // Verwende requestAnimationFrame für bessere Performance
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        
        animationFrameId = requestAnimationFrame(() => {
          setMousePos(currentMousePos);
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [cols, rows, triangleSize]);
  
  // Funktion zur Berechnung der Distanz zwischen zwei Punkten
  const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Funktion zur Berechnung der Linien-Farbe basierend auf der Distanz zur Maus
  const getLineColor = (x1, y1, x2, y2) => {
    // Berechne Mittelpunkt der Linie
    const centerX = (x1 + x2) / 2;
    const centerY = (y1 + y2) / 2;
    
    const distance = getDistance(mousePos.x, mousePos.y, centerX, centerY);
    const maxDistance = 200; // Radius des Effekts
    
    // Normalisiere die Distanz (0 = nah, 1 = weit)
    const normalizedDistance = Math.min(distance / maxDistance, 1);
    
    // Berechne die Helligkeit (umgekehrt zur Distanz)
    const brightness = 1 - normalizedDistance;
    
    // Verwende zentrale Farbkonfiguration
    const baseColor = colorTheme.baseTone;
    const highlightColor = colorTheme.primary;
    
    const r = baseColor.r + (highlightColor.r - baseColor.r) * brightness;
    const g = baseColor.g + (highlightColor.g - baseColor.g) * brightness;
    const b = baseColor.b + (highlightColor.b - baseColor.b) * brightness;
    
    // Liniendicke basierend auf Helligkeit
    const strokeWidth = 1 + brightness * 2; // Min 1, Max 3
    const opacity = 0.4 + brightness * 0.6; // Min 0.4, Max 1.0
    
    return {
      color: `rgba(${r}, ${g}, ${b}, ${opacity})`,
      width: strokeWidth
    };
  };

  // Erstelle das Dreiecksgitter mit leuchtenden Linien
  const triangles = [];
  const lines = [];
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Perfekte Tessellierung: Dreiecke liegen direkt aneinander
      const x = col * triangleSize * 0.866; // 0.866 = cos(30°) für perfekte Tessellierung
      const y = row * triangleSize * 0.75;  // 0.75 = 3/4 der Dreieckshöhe
      const offset = row % 2 === 0 ? 0 : triangleSize * 0.433; // 0.433 = sin(30°) * cos(30°)
      
      // Dreieckspunkte berechnen
      const p1 = { x: x + offset, y: y + triangleSize * 0.75 };
      const p2 = { x: x + offset + triangleSize * 0.433, y: y };
      const p3 = { x: x + offset + triangleSize * 0.866, y: y + triangleSize * 0.75 };
      const p4 = { x: x + offset + triangleSize * 0.433, y: y + triangleSize * 1.5 };
      
      // Dreiecke als Füllung (verwendet Theme-Hintergrundfarbe)
      triangles.push(
        <path
          key={`up-${row}-${col}`}
          d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} Z`}
          fill={colorTheme.background}
          stroke="none"
        />
      );
      
      triangles.push(
        <path
          key={`down-${row}-${col}`}
          d={`M ${p1.x} ${p1.y} L ${p3.x} ${p3.y} L ${p4.x} ${p4.y} Z`}
          fill={colorTheme.background}
          stroke="none"
        />
      );
      
      // Leuchtende Linien zwischen den Dreiecken
      // Horizontale Linie oben
      const line1Style = getLineColor(p1.x, p1.y, p3.x, p3.y);
      lines.push(
        <line
          key={`line1-${row}-${col}`}
          x1={p1.x} y1={p1.y}
          x2={p3.x} y2={p3.y}
          stroke={line1Style.color}
          strokeWidth={line1Style.width}
          strokeLinecap="round"
        />
      );
      
      // Linie links
      const line2Style = getLineColor(p1.x, p1.y, p2.x, p2.y);
      lines.push(
        <line
          key={`line2-${row}-${col}`}
          x1={p1.x} y1={p1.y}
          x2={p2.x} y2={p2.y}
          stroke={line2Style.color}
          strokeWidth={line2Style.width}
          strokeLinecap="round"
        />
      );
      
      // Linie rechts
      const line3Style = getLineColor(p3.x, p3.y, p2.x, p2.y);
      lines.push(
        <line
          key={`line3-${row}-${col}`}
          x1={p3.x} y1={p3.y}
          x2={p2.x} y2={p2.y}
          stroke={line3Style.color}
          strokeWidth={line3Style.width}
          strokeLinecap="round"
        />
      );
      
      // Vertikale Mittellinie (für unteres Dreieck)
      if (row < rows - 1) { // Nicht bei der letzten Reihe
        const line4Style = getLineColor(p1.x, p1.y, p4.x, p4.y);
        lines.push(
          <line
            key={`line4-${row}-${col}`}
            x1={p1.x} y1={p1.y}
            x2={p4.x} y2={p4.y}
            stroke={line4Style.color}
            strokeWidth={line4Style.width}
            strokeLinecap="round"
          />
        );
      }
    }
  }

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 1
      }}
    >
      {/* Gradient Overlay für zusätzliche Tiefe */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, transparent, transparent, rgba(0,0,0,0.5))',
        pointerEvents: 'none',
        zIndex: 10
      }} />
      
      {/* SVG mit Dreiecksgitter */}
      <svg 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        viewBox={`0 0 ${cols * triangleSize * 0.866} ${rows * triangleSize * 0.75 + triangleSize * 0.25}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Hintergrund - verwendet Theme-Farbe */}
        <rect width="100%" height="100%" fill={colorTheme.background} />
        
        {/* Dreiecke (dunkle Füllung) */}
        {triangles}
        
        {/* Leuchtende Linien */}
        {lines}
        
        {/* Glow-Effekt an der Mausposition - verwendet Theme-Farben */}
        <defs>
          <radialGradient id={`mouseGlow-${Math.round(mousePos.x)}-${Math.round(mousePos.y)}`}>
            <stop offset="0%" stopColor={colorTheme.glowColor} />
            <stop offset="50%" stopColor={colorTheme.glowColorMid} />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>
        
        <circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="250"
          fill={`url(#mouseGlow-${Math.round(mousePos.x)}-${Math.round(mousePos.y)})`}
          style={{
            mixBlendMode: 'screen',
            pointerEvents: 'none',
          }}
        />
      </svg>
    </div>
  );
};

export default TriangularGridBackground;
