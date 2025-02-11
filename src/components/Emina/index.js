import { useRef, useEffect, useState } from "react";

function Emina() {
  const canvasRef = useRef(null);

  // Phasen, Zeitwerte usw. können wir in useRef speichern,
  // damit sie beim Rendern nicht immer neu erzeugt werden
  const animationStateRef = useRef({
    arcs: [
      {
        color: "rgba(0, 255, 255, 0.7)",
        radius: 170,
        lineWidth: 15,
        angle: 0,
        rotationSpeed: Math.random() * 0.04 - 0.02,
        targetAngle: -2.2,
        targetRadius: 170,
      },
      {
        color: "rgba(0, 255, 255, 0.3)",
        radius: 150,
        lineWidth: 15,
        angle: 1,
        rotationSpeed: Math.random() * 0.04 - 0.02,
        targetAngle: -1.5,
        targetRadius: 150,
      },
      {
        color: "rgba(0, 255, 255, 0.5)",
        radius: 130,
        lineWidth: 15,
        angle: 2,
        rotationSpeed: Math.random() * 0.04 - 0.02,
        targetAngle: -0.8,
        targetRadius: 130,
      },
      {
        color: "rgba(0, 255, 255, 0.4)",
        radius: 110,
        lineWidth: 15,
        angle: 3,
        rotationSpeed: Math.random() * 0.04 - 0.02,
        targetAngle: 0.2,
        targetRadius: 110,
      },
      {
        color: "rgba(0, 255, 255, 0.7)",
        radius: 90,
        lineWidth: 15,
        angle: 4,
        rotationSpeed: Math.random() * 0.04 - 0.02,
        targetAngle: 1.44,
        targetRadius: 90,
      },
      {
        color: "rgba(0, 255, 255, 0.8)",
        radius: 70,
        lineWidth: 15,
        angle: 5,
        rotationSpeed: Math.random() * 0.04 - 0.02,
        targetAngle: 2.29,
        targetRadius: 70,
      },
      {
        color: "rgba(0, 255, 255, 1)",
        radius: 50,
        lineWidth: 15,
        angle: 6,
        rotationSpeed: Math.random() * 0.04 - 0.02,
        targetAngle: 3.14,
        targetRadius: 50,
      }
    ],
    phase: 0,                 // Startphase
    pulseStartTime: 0,
    pulseDuration: 500,
    finalMoveStartTime: 0,
    finalMoveDuration: 2000,
    finalDoneTime: 0,
    animationFrameId: null,   // Speichert die requestAnimationFrame-Id
  });

  // Zeichnet einen Halbkreis
  function drawRotatedArc(ctx, x, y, radius, lineWidth, glowColor, angleOffset) {
    ctx.beginPath();
    ctx.arc(
      x, y, radius,
      Math.PI + angleOffset,    // Start: 180° + Offset
      2 * Math.PI + angleOffset // End:   360° + Offset
    );
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = glowColor;
    ctx.shadowBlur = 30;
    ctx.shadowColor = glowColor;
    ctx.stroke();
  }

  // Unsere Animations-Schleife
  function animate(timestamp) {
    const {
      arcs,
      phase,
      pulseStartTime,
      pulseDuration,
      finalMoveStartTime,
      finalMoveDuration,
      finalDoneTime
    } = animationStateRef.current;

    const canvas = canvasRef.current;
    if (!canvas) return; // Sicherheitscheck
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    arcs.forEach(arc => {
      // Verschiedene Phasen
      if (phase === 0) {
        arc.angle += arc.rotationSpeed;
      } else if (phase === 1) {
        arc.angle += arc.rotationSpeed; 
        let elapsed = timestamp - pulseStartTime;
        let t = Math.min(elapsed / pulseDuration, 1);
        let scale = 1 + 0.3 * Math.sin(t * Math.PI); 
        arc._pulseLineWidth = arc.lineWidth * scale;
      } else if (phase === 2) {
        let elapsed = timestamp - finalMoveStartTime;
        let t = Math.min(elapsed / finalMoveDuration, 1);

        let angleDiff = arc.targetAngle - arc.angle;
        arc.angle += angleDiff * 0.08; 

        let radiusDiff = arc.targetRadius - arc.radius;
        arc.radius += radiusDiff * 0.08; 
      } else if (phase === 3) {
        let elapsed = timestamp - finalDoneTime;

        let floatSpeed = 0.002;
        let floatAmp   = 5;
        let pulseSpeed = 0.003;
        let pulseAmp   = 0.05;
        let floatOffset = Math.sin(elapsed * floatSpeed) * floatAmp;
        let pulseScale = 1 + pulseAmp * Math.sin(elapsed * pulseSpeed);

        arc._pulseLineWidth = arc.lineWidth * pulseScale;
        drawRotatedArc(
          ctx,
          centerX, 
          centerY + floatOffset, 
          arc.radius, 
          arc._pulseLineWidth || arc.lineWidth, 
          arc.color, 
          arc.angle
        );
        return;
      }

      // Default Draw (wenn Phase != 3)
      drawRotatedArc(
        ctx,
        centerX, centerY,
        arc.radius,
        arc._pulseLineWidth ? arc._pulseLineWidth : arc.lineWidth,
        arc.color,
        arc.angle
      );
    });

    // Phasen-Übergänge prüfen
    if (animationStateRef.current.phase === 1) {
      let elapsed = timestamp - animationStateRef.current.pulseStartTime;
      if (elapsed > pulseDuration) {
        animationStateRef.current.phase = 2;
        animationStateRef.current.finalMoveStartTime = timestamp;
      }
    } else if (animationStateRef.current.phase === 2) {
      let elapsed = timestamp - animationStateRef.current.finalMoveStartTime;
      if (elapsed > finalMoveDuration) {
        // Wenn du irgendwann Phase 3 aktivieren willst:
        // animationStateRef.current.phase = 3;
        animationStateRef.current.finalDoneTime = timestamp;
      }
    }

    // Nächsten Frame anfordern
    animationStateRef.current.animationFrameId = requestAnimationFrame(animate);
  }

  // Starte die Animation einmalig beim Mounten
  useEffect(() => {
    const start = performance.now();
    animationStateRef.current.animationFrameId = requestAnimationFrame(animate);

    // Falls du aufräumen willst, wenn die Komponente unmountet:
    return () => {
      const { animationFrameId } = animationStateRef.current;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []); // Leeres Array => nur beim ersten Rendern ausführen

  // Button-Handler in React
  function handleLogo() {
    // => entspricht phase = 1
    animationStateRef.current.phase = 1;
    animationStateRef.current.pulseStartTime = performance.now();
  }
  function handleRotate() {
    // => entspricht phase = 0
    animationStateRef.current.phase = 0;
    animationStateRef.current.pulseStartTime = performance.now();
  }

  return (
    <div>
      <canvas ref={canvasRef} width={600} height={600} />
      <button onClick={handleLogo}>logo</button>
      <button onClick={handleRotate}>rotate</button>
    </div>
  );
}

export default Emina;
