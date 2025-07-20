import React, { useEffect, useRef, useState } from 'react';
import './index.scss';

const TriangulationEffect = () => {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const trianglesRef = useRef([]);

    // Dreiecke generieren
    useEffect(() => {
        const generateTriangles = () => {
            const triangles = [];
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const triangleSize = 80; // Basis-Größe der Dreiecke
            
            // Grid von Dreiecken erstellen
            for (let x = 0; x < screenWidth + triangleSize; x += triangleSize) {
                for (let y = 0; y < screenHeight + triangleSize; y += triangleSize) {
                    // Verschiedene Dreieck-Orientierungen für natürlicheres Aussehen
                    const orientations = [
                        // Dreieck nach oben
                        [
                            { x: x + triangleSize/2, y: y },
                            { x: x, y: y + triangleSize },
                            { x: x + triangleSize, y: y + triangleSize }
                        ],
                        // Dreieck nach unten
                        [
                            { x: x, y: y },
                            { x: x + triangleSize, y: y },
                            { x: x + triangleSize/2, y: y + triangleSize }
                        ],
                        // Dreieck nach links
                        [
                            { x: x, y: y + triangleSize/2 },
                            { x: x + triangleSize, y: y },
                            { x: x + triangleSize, y: y + triangleSize }
                        ],
                        // Dreieck nach rechts
                        [
                            { x: x, y: y },
                            { x: x, y: y + triangleSize },
                            { x: x + triangleSize, y: y + triangleSize/2 }
                        ]
                    ];
                    
                    // Zufällige Orientierung wählen
                    const randomOrientation = orientations[Math.floor(Math.random() * orientations.length)];
                    
                    triangles.push({
                        points: randomOrientation,
                        center: {
                            x: x + triangleSize/2,
                            y: y + triangleSize/2
                        }
                    });
                }
            }
            return triangles;
        };

        trianglesRef.current = generateTriangles();
    }, []);

    // Maus-Position verfolgen
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Canvas zeichnen
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const { width, height } = canvas.getBoundingClientRect();
        
        // Canvas-Größe setzen
        canvas.width = width;
        canvas.height = height;

        // Canvas leeren
        ctx.clearRect(0, 0, width, height);

        // Dreiecke zeichnen basierend auf Maus-Position
        trianglesRef.current.forEach(triangle => {
            const distance = Math.sqrt(
                Math.pow(triangle.center.x - mousePos.x, 2) + 
                Math.pow(triangle.center.y - mousePos.y, 2)
            );

            // Nur Dreiecke in der Nähe der Maus zeichnen
            const maxDistance = 150;
            if (distance < maxDistance) {
                // Opacity basierend auf Entfernung berechnen
                const opacity = Math.max(0, 1 - distance / maxDistance);
                
                // Dreieck zeichnen
                ctx.beginPath();
                ctx.moveTo(triangle.points[0].x, triangle.points[0].y);
                ctx.lineTo(triangle.points[1].x, triangle.points[1].y);
                ctx.lineTo(triangle.points[2].x, triangle.points[2].y);
                ctx.closePath();

                // Subtile Schattierung mit Gradient
                const gradient = ctx.createRadialGradient(
                    mousePos.x, mousePos.y, 0,
                    mousePos.x, mousePos.y, maxDistance
                );
                gradient.addColorStop(0, `rgba(243, 159, 159, ${opacity * 0.3})`);
                gradient.addColorStop(1, `rgba(243, 159, 159, ${opacity * 0.05})`);

                ctx.fillStyle = gradient;
                ctx.fill();

                // Optional: Rahmen für bessere Sichtbarkeit
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.1})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        });
    }, [mousePos]);

    return (
        <canvas 
            ref={canvasRef}
            className="triangulation-canvas"
        />
    );
};

export default TriangulationEffect;
