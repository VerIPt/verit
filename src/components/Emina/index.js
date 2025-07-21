import React, { useRef, useEffect, useState } from 'react';
import TriangularGridBackground from '../TriangularGridBackground';

function Emina() {

    const redL = 247;
    const greenL = 177;
    const blueL = 0;

    const redC = 255;
    const greenC = 255;
    const blueC = 255;

    let colorCircuit = getRGBACircuit(1);
    let colorChip = getRGBACircuit(0.3);

    function getRGBALogo(alpha) {
        return `rgba(${redL}, ${greenL}, ${blueL}, ${alpha})`;
    }
    function getRGBACircuit(alpha) {
        return `rgba(${redC}, ${greenC}, ${blueC}, ${alpha})`;
    }
    const canvasRef = useRef(null);

    const animStateRef = useRef({
        arcs: [
            {
                color: getRGBALogo(0.7), radius: 170, lineWidth: 15,
                angle: 0, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: -2.2, targetRadius: 170
            },
            {
                color: getRGBALogo(0.3), radius: 150, lineWidth: 15,
                angle: 1, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: -1.5, targetRadius: 150
            },
            {
                color: getRGBALogo(0.5), radius: 130, lineWidth: 15,
                angle: 2, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: -0.8, targetRadius: 130
            },
            {
                color: getRGBALogo(0.4), radius: 110, lineWidth: 15,
                angle: 3, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: 0.2, targetRadius: 110
            },
            {
                color: getRGBALogo(0.7), radius: 90, lineWidth: 15,
                angle: 4, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: 1.44, targetRadius: 90
            },
            {
                color: getRGBALogo(0.8), radius: 70, lineWidth: 15,
                angle: 5, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: 2.29, targetRadius: 70
            },
            {
                color: getRGBALogo(1), radius: 50, lineWidth: 15,
                angle: 6, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: 3.14, targetRadius: 50
            }
        ],
        circuitLines: [
            {
                startX: 610, startY: 680, color: colorChip, width: 6,
                segments: [
                    { length: 15, angleDeg: 0 },
                    { length: 5, angleDeg: 45 },
                    { length: 45, angleDeg: 90 },
                    { length: 5, angleDeg: 135 },
                    { length: 150, angleDeg: 180 },
                    { length: 5, angleDeg: 225 },
                    { length: 13, angleDeg: 270 },
                    { length: 110, angleDeg: 0 },
                    { length: 45, angleDeg: -45 },
                    { length: 10, angleDeg: 0 },
                    { length: 43, angleDeg: 90 },
                    { length: 146, angleDeg: 180 },
                    { length: 6, angleDeg: 270 },
                    { length: 107, angleDeg: 0 },
                    { length: 50, angleDeg: -45 },
                    { length: 36, angleDeg: 90 },
                    { length: 30, angleDeg: 180 },
                    { length: 34, angleDeg: -45 },
                    { length: 18, angleDeg: 90 },
                    { length: 10, angleDeg: 180 },
                    { length: 15, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            //chip1
            {
                startX: 290, startY: 200, color: colorChip, width: 6,
                segments: [
                    { length: 70, angleDeg: 0 },
                    { length: 5, angleDeg: -45 },
                    { length: 44, angleDeg: -90 },
                    { length: 20, angleDeg: -180 },
                    { length: 59, angleDeg: -225 },
                    { length: 56, angleDeg: 0 },
                    { length: 36, angleDeg: -90 },
                    { length: 12, angleDeg: -180 },
                    { length: 48, angleDeg: -225 },
                    { length: 43, angleDeg: 0 },
                    { length: 31, angleDeg: -90 },
                    { length: 5, angleDeg: -180 },
                    { length: 35, angleDeg: -225 },
                    { length: 25, angleDeg: 0 },
                    { length: 17, angleDeg: -90 },
                    { length: 17, angleDeg: -225 },
                    { length: 10, angleDeg: 0 },
                    { length: 5, angleDeg: -90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 580, startY: 300, color: colorCircuit, width: 4,
                segments: [
                    { length: 170, angleDeg: 45 },
                    { length: 170, angleDeg: 90 },
                    { length: 170, angleDeg: 135 },
                    { length: 170, angleDeg: 180 },
                    { length: 170, angleDeg: 225 },
                    { length: 170, angleDeg: 270 },
                    { length: 170, angleDeg: 315 },
                    { length: 170, angleDeg: 360 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 640, startY: 150, color: colorCircuit, width: 4,
                segments: [
                    { length: 300, angleDeg: 45 },
                    { length: 300, angleDeg: 90 },
                    { length: 300, angleDeg: 135 },
                    { length: 300, angleDeg: 180 },
                    { length: 300, angleDeg: 225 },
                    { length: 300, angleDeg: 270 },
                    { length: 300, angleDeg: 315 },
                    { length: 300, angleDeg: 360 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 700, startY: 500, color: colorCircuit, width: 2,
                segments: [
                    { length: 70, angleDeg: 0 },
                    { length: 20, angleDeg: 45 },
                    { length: 40, angleDeg: 90 },
                    { length: 96, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 633, startY: 323, color: colorCircuit, width: 2,
                segments: [
                    { length: 43, angleDeg: -90 },
                    { length: 37, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 615, startY: 305, color: colorCircuit, width: 2,
                segments: [
                    { length: 30, angleDeg: -90 },
                    { length: 28, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            //schräge durchgangslinien rechts
            {
                startX: 770, startY: 280, color: colorCircuit, width: 2,
                segments: [
                    { length: 130, angleDeg: 90 },
                    { length: 60, angleDeg: 45 },
                    { length: 113, angleDeg: 90 },
                    { length: 15, angleDeg: 45 },
                    { length: 27, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 780, startY: 290, color: colorCircuit, width: 2,
                segments: [
                    { length: 115, angleDeg: 90 },
                    { length: 60, angleDeg: 45 },
                    { length: 110, angleDeg: 90 },
                    { length: 10, angleDeg: 45 },
                    { length: 23, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 790, startY: 300, color: colorCircuit, width: 2,
                segments: [
                    { length: 100, angleDeg: 90 },
                    { length: 60, angleDeg: 45 },
                    { length: 105, angleDeg: 90 },
                    { length: 7, angleDeg: 45 },
                    { length: 15, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 800, startY: 310, color: colorCircuit, width: 2,
                segments: [
                    { length: 85, angleDeg: 90 },
                    { length: 60, angleDeg: 45 },
                    { length: 100, angleDeg: 90 }
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            // schräge durchgangslinien rechts ende

            // kurzlinien innerhalb der durchgangslinien
            {
                startX: 810, startY: 335, color: colorCircuit, width: 2,
                segments: [
                    { length: 45, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 810, startY: 355, color: colorCircuit, width: 2,
                segments: [
                    { length: 45, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 810, startY: 370, color: colorCircuit, width: 2,
                segments: [
                    { length: 45, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 810, startY: 390, color: colorCircuit, width: 2,
                segments: [
                    { length: 45, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            // kurzlinien ende

            //links von schrägen durchgangslinien

            {
                startX: 800, startY: 550, color: colorCircuit, width: 2,
                segments: [
                    { length: 50, angleDeg: -90 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 800, startY: 480, color: colorCircuit, width: 2,
                segments: [
                    { length: 25, angleDeg: -90 },
                    { length: 45, angleDeg: -135 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 840, startY: 590, color: colorCircuit, width: 2,
                segments: [
                    { length: 17, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: false
            },
            //links von schrägen durchgangslinien ende
            {
                startX: 640, startY: 340, color: colorCircuit, width: 2,
                segments: [
                    { length: 25, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 760, startY: 340, color: colorCircuit, width: 2,
                segments: [
                    { length: 55, angleDeg: -225 },
                    { length: 25, angleDeg: -270 },
                    { length: 65, angleDeg: -315 },
                    { length: 30, angleDeg: -270 },
                    { length: 10, angleDeg: -225 },
                    { length: 45, angleDeg: -180 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 780, startY: 460, color: colorCircuit, width: 2,
                segments: [
                    { length: 30, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 760, startY: 360, color: colorCircuit, width: 2,
                segments: [
                    { length: 33, angleDeg: 135 },
                    { length: 10, angleDeg: 90 },
                    { length: 25, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 683, startY: 277, color: colorCircuit, width: 2,
                segments: [
                    { length: 30, angleDeg: -45 },
                    { length: 25, angleDeg: -90 },
                    { length: 112, angleDeg: -135 }
                ],
                progress: 0,
                startPoint: true,
                endPoint: false
            },
            {
                startX: 720, startY: 290, color: colorCircuit, width: 2,
                segments: [
                    { length: 25, angleDeg: 0 },
                    { length: 5, angleDeg: 45 },
                    { length: 15, angleDeg: 90 },
                    { length: 45, angleDeg: 135 },
                    { length: 15, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 730, startY: 305, color: colorCircuit, width: 2,
                segments: [
                    { length: 45, angleDeg: 135 },
                    { length: 5, angleDeg: 90 },
                    { length: 30, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 680, startY: 340, color: colorCircuit, width: 2,
                segments: [
                    { length: 40, angleDeg: 90 },
                    { length: 40, angleDeg: 45 },

                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 693, startY: 353, color: colorCircuit, width: 2,
                segments: [
                    { length: 20, angleDeg: 90 },
                    { length: 23, angleDeg: 45 },

                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 700, startY: 430, color: colorCircuit, width: 2,
                segments: [
                    { length: 25, angleDeg: 0 },
                    { length: 40, angleDeg: 45 },
                    { length: 10, angleDeg: 90 },
                    { length: 5, angleDeg: 135 },
                    { length: 35, angleDeg: 180 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 700, startY: 445, color: colorCircuit, width: 2,
                segments: [
                    { length: 20, angleDeg: 0 },
                    { length: 20, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 680, startY: 230, color: colorCircuit, width: 2,
                segments: [
                    { length: 15, angleDeg: 135 },
                    { length: 45, angleDeg: 180 },
                    { length: 35, angleDeg: 135 },
                    { length: 55, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: false
            },
            {
                startX: 660, startY: 230, color: colorCircuit, width: 2,
                segments: [

                    { length: 40, angleDeg: 180 },
                    { length: 45, angleDeg: 135 },
                    { length: 48, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: false
            },
            {
                startX: 660, startY: 215, color: colorCircuit, width: 2,
                segments: [

                    { length: 45, angleDeg: 180 },
                    { length: 55, angleDeg: 135 },
                    { length: 45, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: false
            },
            {
                startX: 605, startY: 160, color: colorCircuit, width: 2,
                segments: [

                    { length: 50, angleDeg: 45 },
                    { length: 5, angleDeg: 90 },
                    { length: 5, angleDeg: 135 },
                    { length: 40, angleDeg: 180 },
                    { length: 5, angleDeg: 225 },
                    { length: 40, angleDeg: 270 },
                    { length: 5, angleDeg: 315 },
                    { length: 5, angleDeg: 360 },
                    { length: 5, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 660, startY: 200, color: colorCircuit, width: 2,
                segments: [

                    { length: 70, angleDeg: -135 },

                ],
                progress: 0,
                startPoint: true,
                endPoint: false
            },
            {
                startX: 580, startY: 150, color: colorCircuit, width: 2,
                segments: [

                    { length: 60, angleDeg: 90 },
                    { length: 5, angleDeg: 45 },
                    { length: 10, angleDeg: 0 },
                    { length: 5, angleDeg: 90 },
                    { length: 50, angleDeg: 135 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 500, startY: 300, color: colorCircuit, width: 2,
                segments: [

                    { length: 43, angleDeg: -90 },
                    { length: 5, angleDeg: -45 },
                    { length: 40, angleDeg: 0 },

                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 490, startY: 300, color: colorCircuit, width: 2,
                segments: [

                    { length: 55, angleDeg: -90 },
                    { length: 5, angleDeg: -45 },
                    { length: 60, angleDeg: 0 },
                    { length: 20, angleDeg: -45 },
                    { length: 78, angleDeg: -90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 480, startY: 300, color: colorCircuit, width: 2,
                segments: [

                    { length: 65, angleDeg: -90 },
                    { length: 5, angleDeg: -45 },
                    { length: 67, angleDeg: 0 },
                    { length: 10, angleDeg: -45 },
                    { length: 75, angleDeg: -90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 470, startY: 300, color: colorCircuit, width: 2,
                segments: [

                    { length: 75, angleDeg: -90 },
                    { length: 5, angleDeg: -45 },
                    { length: 70, angleDeg: 0 },
                    { length: 5, angleDeg: -45 },
                    { length: 70, angleDeg: -90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 530, startY: 165, color: colorCircuit, width: 2,
                segments: [
                    { length: 30, angleDeg: 90 },
                    { length: 20, angleDeg: 135 },
                    { length: 40, angleDeg: 180 },
                    { length: 63, angleDeg: 225 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 450, startY: 165, color: colorCircuit, width: 2,
                segments: [
                    { length: 40, angleDeg: 45 },
                    { length: 30, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 470, startY: 165, color: colorCircuit, width: 2,
                segments: [
                    { length: 20, angleDeg: 45 },
                    { length: 25, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 515, startY: 265, color: colorCircuit, width: 2,
                segments: [

                    { length: 25, angleDeg: 0 },
                    { length: 10, angleDeg: 45 },
                    { length: 15, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 515, startY: 280, color: colorCircuit, width: 2,
                segments: [

                    { length: 20, angleDeg: 0 },
                    { length: 10, angleDeg: 45 },
                    { length: 20, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 670, startY: 290, color: colorCircuit, width: 2,
                segments: [
                    { length: 15, angleDeg: -225 },
                    { length: 20, angleDeg: 90 },
                    { length: 10, angleDeg: 45 },
                    { length: 10, angleDeg: 0 },
                    { length: 40, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 670, startY: 390, color: colorCircuit, width: 2,
                segments: [
                    { length: 40, angleDeg: -90 },
                    { length: 30, angleDeg: -135 },
                    { length: 40, angleDeg: -90 },
                    { length: 50, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 740, startY: 340, color: colorCircuit, width: 2,
                segments: [
                    { length: 30, angleDeg: -45 },
                    { length: 30, angleDeg: -90 },
                    { length: 25, angleDeg: -135 },
                    { length: 30, angleDeg: -180 },
                    { length: 50, angleDeg: -225 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 725, startY: 255, color: colorCircuit, width: 2,
                segments: [
                    { length: 23, angleDeg: -90 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: false
            },

            // umrahmung
            {
                startX: 380, startY: 150, color: colorCircuit, width: 2,
                segments: [
                    { length: 60, angleDeg: 90 },
                    { length: 10, angleDeg: 135 },
                    { length: 100, angleDeg: 180 },

                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            // pins up - down
            {
                startX: 380, startY: 160, color: colorCircuit, width: 2,
                segments: [
                    { length: 10, angleDeg: 0 },
                    { length: 12, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 160, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 170, color: colorCircuit, width: 2,
                segments: [
                    { length: 15, angleDeg: 0 },
                    { length: 25, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 170, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 180, color: colorCircuit, width: 2,
                segments: [
                    { length: 20, angleDeg: 0 },
                    { length: 40, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 180, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 190, color: colorCircuit, width: 2,
                segments: [
                    { length: 25, angleDeg: 0 },
                    { length: 20, angleDeg: -45 },
                    { length: 5, angleDeg: 0 },
                    { length: 50, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 380, startY: 190, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 200, color: colorCircuit, width: 2,
                segments: [
                    { length: 30, angleDeg: 0 },
                    { length: 10, angleDeg: -45 },
                    { length: 5, angleDeg: 0 },
                    { length: 50, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 380, startY: 200, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            // right to left
            {
                startX: 360, startY: 217, color: colorCircuit, width: 2,
                segments: [
                    { length: 30, angleDeg: 90 },
                    { length: 10, angleDeg: 45 },
                    { length: 15, angleDeg: 0 },
                    { length: 50, angleDeg: 45 },
                    { length: 15, angleDeg: 0 },
                    { length: 35, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 360, startY: 217, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 350, startY: 217, color: colorCircuit, width: 2,
                segments: [
                    { length: 40, angleDeg: 90 },
                    { length: 15, angleDeg: 45 },
                    { length: 15, angleDeg: 0 },
                    { length: 48, angleDeg: 45 },

                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 350, startY: 217, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 340, startY: 217, color: colorCircuit, width: 2,
                segments: [
                    { length: 50, angleDeg: 90 },
                    { length: 20, angleDeg: 45 },
                    { length: 15, angleDeg: 0 },
                    { length: 43, angleDeg: 45 },

                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 340, startY: 217, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 330, startY: 217, color: colorCircuit, width: 2,
                segments: [
                    { length: 120, angleDeg: 90 },
                    { length: 15, angleDeg: 45 },
                    { length: 23, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 330, startY: 217, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 320, startY: 217, color: colorCircuit, width: 2,
                segments: [
                    { length: 100, angleDeg: 90 },
                    { length: 25, angleDeg: 135 },
                    { length: 55, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 320, startY: 217, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 310, startY: 217, color: colorCircuit, width: 2,
                segments: [
                    { length: 90, angleDeg: 90 },
                    { length: 35, angleDeg: 135 },
                    { length: 75, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 310, startY: 217, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 300, startY: 217, color: colorCircuit, width: 2,
                segments: [
                    { length: 70, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 300, startY: 217, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 290, startY: 217, color: colorCircuit, width: 2,
                segments: [
                    { length: 80, angleDeg: 90 },
                    { length: 10, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 290, startY: 217, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 280, startY: 217, color: colorCircuit, width: 2,
                segments: [
                    { length: 60, angleDeg: 90 },
                    { length: 70, angleDeg: 135 },
                    { length: 130, angleDeg: 90 },

                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 280, startY: 217, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 270, startY: 222, color: colorCircuit, width: 2,
                segments: [
                    { length: 50, angleDeg: 90 },
                    { length: 70, angleDeg: 135 },
                    { length: 140, angleDeg: 90 },
                    { length: 60, angleDeg: 135 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 270, startY: 222, color: colorCircuit, width: 4,
                segments: [
                    { length: 5, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 260, startY: 250, color: colorCircuit, width: 2,
                segments: [
                    { length: 55, angleDeg: 135 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 260, startY: 265, color: colorCircuit, width: 2,
                segments: [
                    { length: 55, angleDeg: 135 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 280, startY: 320, color: colorCircuit, width: 2,
                segments: [
                    { length: 15, angleDeg: -90 },
                    { length: 5, angleDeg: -135 },
                    { length: 5, angleDeg: -180 },
                    { length: 45, angleDeg: -225 },
                    { length: 15, angleDeg: -270 },
                    { length: 5, angleDeg: -315 },
                    { length: 5, angleDeg: -360 },
                    { length: 45, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 290, startY: 500, color: colorCircuit, width: 2,
                segments: [
                    { length: 30, angleDeg: -180 },
                    { length: 40, angleDeg: -135 },
                    { length: 5, angleDeg: -180 },

                    { length: 139, angleDeg: -225 },


                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            // chip2

            {
                startX: 620, startY: 670, color: colorCircuit, width: 2,
                segments: [
                    { length: 10, angleDeg: 0 },
                    { length: 15, angleDeg: 45 },
                    { length: 52, angleDeg: 90 },
                    { length: 18, angleDeg: 135 },
                    { length: 156, angleDeg: 180 },
                    { length: 18, angleDeg: 225 },
                    { length: 20, angleDeg: 270 },

                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            // pin 2 up down right
            {
                startX: 640, startY: 690, color: colorCircuit, width: 2,
                segments: [
                    { length: 30, angleDeg: 0 },
                    { length: 95, angleDeg: -45 },
                    { length: 60, angleDeg: 0 },
                    { length: 25, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 640, startY: 690, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },

            {
                startX: 640, startY: 700, color: colorCircuit, width: 2,
                segments: [
                    { length: 35, angleDeg: 0 },
                    { length: 95, angleDeg: -45 },
                    { length: 80, angleDeg: 0 },
                    { length: 25, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 640, startY: 700, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 640, startY: 710, color: colorCircuit, width: 2,
                segments: [
                    { length: 50, angleDeg: 0 },
                    { length: 35, angleDeg: 45 },
                    { length: 67, angleDeg: 0 },

                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 640, startY: 710, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 640, startY: 720, color: colorCircuit, width: 2,
                segments: [
                    { length: 45, angleDeg: 0 },
                    { length: 35, angleDeg: 45 },
                    { length: 40, angleDeg: 0 },
                    { length: 14, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 640, startY: 720, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 620, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 39, angleDeg: 90 },
                    { length: 35, angleDeg: 45 },
                    { length: 40, angleDeg: 0 },
                    { length: 35, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 620, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 610, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 44, angleDeg: 90 },
                    { length: 45, angleDeg: 45 },
                    { length: 40, angleDeg: 0 },
                    { length: 5, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 610, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 600, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 50, angleDeg: 90 },
                    { length: 45, angleDeg: 45 },
                    { length: 44, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 600, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 590, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 55, angleDeg: 90 },
                    { length: 45, angleDeg: 45 },
                    { length: 39, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 590, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 580, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 60, angleDeg: 90 },
                    { length: 45, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 580, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 570, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 65, angleDeg: 90 },
                    { length: 38, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 570, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 560, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 70, angleDeg: 90 },
                    { length: 52, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 560, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 550, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 75, angleDeg: 90 },
                    { length: 65, angleDeg: 45 },
                    { length: 12.5, angleDeg: 0 },
                    { length: 5, angleDeg: -45 },
                    { length: 10, angleDeg: -90 },

                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 550, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 540, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 45, angleDeg: 90 },
                    { length: 25, angleDeg: 135 },
                    { length: 30, angleDeg: 90 },
                    { length: 10, angleDeg: 45 },
                    { length: 30, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 540, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 530, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 40, angleDeg: 90 },
                    { length: 25, angleDeg: 135 },
                    { length: 35, angleDeg: 90 },
                    { length: 10, angleDeg: 135 },
                    { length: 30, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 530, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 520, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 35, angleDeg: 90 },
                    { length: 25, angleDeg: 135 },
                    { length: 30, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 520, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 510, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 30, angleDeg: 90 },
                    { length: 25, angleDeg: 135 },
                    { length: 78, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 510, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 500, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 25, angleDeg: 90 },
                    { length: 25, angleDeg: 135 },
                    { length: 83, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 500, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 490, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 20, angleDeg: 90 },
                    { length: 85, angleDeg: 135 },
                    { length: 20, angleDeg: 90 },
                    { length: 25, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 490, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 480, startY: 746, color: colorCircuit, width: 2,
                segments: [
                    { length: 15, angleDeg: 90 },
                    { length: 85, angleDeg: 135 },
                    { length: 45, angleDeg: 180 },
                    { length: 35, angleDeg: 135 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 480, startY: 746, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 460, startY: 720, color: colorCircuit, width: 2,
                segments: [
                    { length: 35, angleDeg: 180 },
                    { length: 65, angleDeg: 135 },
                    { length: 25, angleDeg: 180 },
                    { length: 35, angleDeg: 135 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 460, startY: 720, color: colorCircuit, width: 4,
                segments: [
                    { length: 10, angleDeg: 180 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 415, startY: 710, color: colorCircuit, width: 2,
                segments: [
                    { length: 35, angleDeg: 135 },
                    { length: 15, angleDeg: 180 },
                    { length: 15, angleDeg: 135 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 400, startY: 700, color: colorCircuit, width: 2,
                segments: [
                    { length: 65, angleDeg: 180 },
                    { length: 45, angleDeg: 225 },
                    { length: 25, angleDeg: 180 },
                    { length: 15, angleDeg: 135 },
                    { length: 25, angleDeg: 180 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 390, startY: 690, color: colorCircuit, width: 2,
                segments: [
                    { length: 50, angleDeg: 180 },
                    { length: 45, angleDeg: 225 },
                    { length: 40, angleDeg: 180 },
                    { length: 15, angleDeg: 135 },
                    { length: 25, angleDeg: 180 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            }
        ],
        phase: 0,
        pulseStartTime: 0,
        pulseDuration: 500,
        finalMoveStartTime: 0,
        finalMoveDuration: 2000,
        finalDoneTime: 0,
        circuitStartTime: 0,
        circuitDuration: 1500
    });

    // Einfache Canvas-Initialisierung für bessere Schärfe
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // High-DPI Support für schärfere Darstellung
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);

        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';
    }, []);

    useEffect(() => {

        animStateRef.current.arcs[0].color = getRGBALogo(0.7);
        animStateRef.current.arcs[1].color = getRGBALogo(0.3);
        animStateRef.current.arcs[2].color = getRGBALogo(0.5);
        animStateRef.current.arcs[3].color = getRGBALogo(0.4);
        animStateRef.current.arcs[4].color = getRGBALogo(0.7);
        animStateRef.current.arcs[5].color = getRGBALogo(0.8);
        animStateRef.current.arcs[6].color = getRGBALogo(1);

        animStateRef.current.circuitLines.forEach((line) => {
            line.color = getRGBACircuit(1);
        });
        animStateRef.current.circuitLines[0].color = getRGBACircuit(0.3);
        animStateRef.current.circuitLines[1].color = getRGBACircuit(0.3);

    });

    function drawRotatedArc(ctx, x, y, radius, lineWidth, glowColor, angleOffset) {
        ctx.beginPath();
        ctx.arc(
            x, y, radius,
            Math.PI + angleOffset,
            2 * Math.PI + angleOffset
        );
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = glowColor;
        ctx.shadowBlur = 30;
        ctx.shadowColor = glowColor;
        ctx.stroke();
    }

    function drawCircuitLines(ctx, lines, scaleX = 1, scaleY = 1, lineScale = 1) {
        lines.forEach(line => {
            ctx.beginPath();
            ctx.lineWidth = line.width * lineScale;
            ctx.strokeStyle = line.color;
            ctx.shadowBlur = 20 * lineScale;
            ctx.shadowColor = line.color;

            // Skalierte Startposition
            let x = line.startX * scaleX;
            let y = line.startY * scaleY;
            ctx.moveTo(x, y);

            const totalLength = line.segments.reduce((sum, seg) => sum + seg.length, 0);
            let visibleLen = line.progress * totalLength;

            for (let seg of line.segments) {
                if (visibleLen <= 0) break;
                const drawLen = Math.min(seg.length, visibleLen);
                const angleRad = seg.angleDeg * Math.PI / 180;
                // Skalierte Segmentlängen
                const newX = x + Math.cos(angleRad) * drawLen * scaleX;
                const newY = y + Math.sin(angleRad) * drawLen * scaleY;
                ctx.lineTo(newX, newY);
                x = newX;
                y = newY;
                visibleLen -= drawLen;
            }
            ctx.stroke();

            // Skalierte Endpunkte
            if (line.startPoint) drawEndpoint(ctx, line.startX * scaleX, line.startY * scaleY, 6 * Math.min(scaleX, scaleY), line.color, lineScale);
            if (line.endPoint) drawEndpoint(ctx, x, y, 6 * Math.min(scaleX, scaleY), line.color, lineScale);
        });
    }

    function drawEndpoint(ctx, cx, cy, r, color, lineScale = 1) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.shadowBlur = 20 * lineScale;
        ctx.shadowColor = color;
        ctx.fill();
    }

    function animate(timestamp) {
        const state = animStateRef.current;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        
        // Clear mit Display-Größe (nicht Canvas-Auflösung wegen DPI-Skalierung)
        ctx.clearRect(0, 0, rect.width, rect.height);

        // Center basierend auf Display-Größe
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Berechne Skalierungsfaktor für Arcs (basierend auf der kleineren Dimension)
        const arcScale = Math.min(rect.width, rect.height) / 1000;

        // 1) Arcs 
        state.arcs.forEach(arc => {
            if (state.phase === 0) {
                arc.angle += arc.rotationSpeed;
            } else if (state.phase === 1) {
                arc.angle += arc.rotationSpeed;
                let elapsed = timestamp - state.pulseStartTime;
                let t = Math.min(elapsed / state.pulseDuration, 1);
                let scale = 1 + 0.3 * Math.sin(t * Math.PI);
                arc._pulseLineWidth = arc.lineWidth * scale;
            } else if (state.phase === 2) {
                let elapsed = timestamp - state.finalMoveStartTime;
                let t = Math.min(elapsed / state.finalMoveDuration, 1);
                let angleDiff = arc.targetAngle - arc.angle;
                arc.angle += angleDiff * 0.08;
                let radiusDiff = arc.targetRadius - arc.radius;
                arc.radius += radiusDiff * 0.08;
            }
            else if (state.phase === 3) {
                let elapsed = timestamp - state.finalDoneTime;
                let floatSpeed = 0.002;
                let floatAmp = 5 * arcScale;
                let pulseSpeed = 0.003;
                let pulseAmp = 0.05;
                let floatOffset = Math.sin(elapsed * floatSpeed) * floatAmp;
                let pulseScale = 1 + pulseAmp * Math.sin(elapsed * pulseSpeed);
                arc._pulseLineWidth = arc.lineWidth * pulseScale * arcScale;

                drawRotatedArc(ctx, centerX, centerY + floatOffset,
                    arc.radius * arcScale,
                    arc._pulseLineWidth || arc.lineWidth * arcScale,
                    arc.color,
                    arc.angle
                );
                return;
            }

            drawRotatedArc(
                ctx, centerX, centerY,
                arc.radius * arcScale,
                (arc._pulseLineWidth ? arc._pulseLineWidth : arc.lineWidth) * arcScale,
                arc.color,
                arc.angle
            );
        });

        if (state.phase === 1) {
            let elapsed = timestamp - state.pulseStartTime;
            if (elapsed > state.pulseDuration) {
                state.phase = 2;
                state.finalMoveStartTime = timestamp;
            }
        }
        else if (state.phase === 2) {
            let elapsed = timestamp - state.finalMoveStartTime;
            if (elapsed > state.finalMoveDuration) {
                state.phase = 4;
                state.circuitStartTime = timestamp;
            }
        }

        if (state.phase === 4) {
            let elapsed = timestamp - state.circuitStartTime;
            let t = Math.min(elapsed / state.circuitDuration, 1);

            state.circuitLines.forEach(line => {
                line.progress = t;
            });
            
            // Berechne Skalierungsfaktoren basierend auf Canvas-Größe
            // Das Original-Design ist für 1000x1000 ausgelegt
            const scaleX = rect.width / 1000;
            const scaleY = rect.height / 1000;
            
            // Linienskalierung basierend auf der kleineren Dimension für bessere mobile Darstellung
            const lineScale = Math.min(rect.width, rect.height) / 1000;
            
            drawCircuitLines(ctx, state.circuitLines, scaleX, scaleY, lineScale);

        }

        requestAnimationFrame(animate);
    }

    useEffect(() => {
        const id = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(id);
    }, []);

    function handlePulse() {
        const state = animStateRef.current;
        state.phase = 1;
        state.pulseStartTime = performance.now();
    }

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black'
            }}
        >
            {/* Triangular Grid Background */}
            <TriangularGridBackground
                primaryColor={{ r: redL, g: greenL, b: blueL }}
                backgroundColor='auto'
                opacity={1}
            />

            {/* Canvas und Button Container */}
            <div style={{
                position: 'relative',
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                paddingTop: '0px',
                paddingBottom: '50px'
            }}>
                {/* Logo Canvas - mit High-DPI Support für schärfere Darstellung */}
                <canvas 
                    ref={canvasRef} 
                    width={1000} 
                    height={1000} 
                    style={{
                        width: 'min(80vw, 80vh, 800px)',
                        height: 'min(80vw, 80vh, 800px)',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        display: 'block',
                        margin: '0 auto',
                    }}
                />

                <button
                    onClick={handlePulse}
                    style={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '49%',
                        transform: 'translateX(-50%)',
                        padding: '18px 40px',
                        fontSize: '16px',
                        fontWeight: '600',
                        border: `2px solid rgba(${redL}, ${greenL}, ${blueL}, 0.3)`,
                        background: `linear-gradient(135deg, 
            rgba(${redL}, ${greenL}, ${blueL}, 0.1) 0%, 
            rgba(${redL}, ${greenL}, ${blueL}, 0.05) 50%, 
            rgba(${redL}, ${greenL}, ${blueL}, 0.1) 100%)`,
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        color: `rgb(${redL}, ${greenL}, ${blueL})`,
                        borderRadius: '50px',
                        cursor: 'pointer',
                        boxShadow: `
            0 8px 32px rgba(${redL}, ${greenL}, ${blueL}, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1)
        `,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        overflow: 'visible',
                        outline: 'none',
                        zIndex: 25,
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}
                // ← HIER: Alle Event-Handler entfernt, nur onClick bleibt
                >
                    Mehr erfahren
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            marginLeft: '8px',
                            transition: 'transform 0.3s ease'
                        }}
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Emina;