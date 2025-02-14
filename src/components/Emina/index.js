import React, { useRef, useEffect } from 'react';

function Emina() {
    const canvasRef = useRef(null);

    const animStateRef = useRef({
        arcs: [
            {
                color: "rgba(0, 255, 255, 0.7)", radius: 170, lineWidth: 15,
                angle: 0, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: -2.2, targetRadius: 170
            },
            {
                color: "rgba(0, 255, 255, 0.3)", radius: 150, lineWidth: 15,
                angle: 1, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: -1.5, targetRadius: 150
            },
            {
                color: "rgba(0, 255, 255, 0.5)", radius: 130, lineWidth: 15,
                angle: 2, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: -0.8, targetRadius: 130
            },
            {
                color: "rgba(0, 255, 255, 0.4)", radius: 110, lineWidth: 15,
                angle: 3, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: 0.2, targetRadius: 110
            },
            {
                color: "rgba(0, 255, 255, 0.7)", radius: 90, lineWidth: 15,
                angle: 4, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: 1.44, targetRadius: 90
            },
            {
                color: "rgba(0, 255, 255, 0.8)", radius: 70, lineWidth: 15,
                angle: 5, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: 2.29, targetRadius: 70
            },
            {
                color: "rgba(0, 255, 255, 1)", radius: 50, lineWidth: 15,
                angle: 6, rotationSpeed: (Math.random() * 0.04) - 0.02, targetAngle: 3.14, targetRadius: 50
            }
        ],
        circuitLines: [
            {
                startX: 580, startY: 300, color: 'cyan', width: 4,
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
                startX: 640, startY: 150, color: 'cyan', width: 4,
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
                startX: 700, startY: 500, color: 'cyan', width: 2,
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
                startX: 633, startY: 323, color: 'cyan', width: 2,
                segments: [
                    { length: 43, angleDeg: -90 },
                    { length: 37, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 615, startY: 305, color: 'cyan', width: 2,
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
                startX: 770, startY: 280, color: 'cyan', width: 2,
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
                startX: 780, startY: 290, color: 'cyan', width: 2,
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
                startX: 790, startY: 300, color: 'cyan', width: 2,
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
                startX: 800, startY: 310, color: 'cyan', width: 2,
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
                startX: 810, startY: 335, color: 'cyan', width: 2,
                segments: [
                    { length: 45, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 810, startY: 355, color: 'cyan', width: 2,
                segments: [
                    { length: 45, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 810, startY: 370, color: 'cyan', width: 2,
                segments: [
                    { length: 45, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 810, startY: 390, color: 'cyan', width: 2,
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
                startX: 800, startY: 550, color: 'cyan', width: 2,
                segments: [
                    { length: 50, angleDeg: -90 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 800, startY: 480, color: 'cyan', width: 2,
                segments: [
                    { length: 25, angleDeg: -90 },
                    { length: 45, angleDeg: -135 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 840, startY: 590, color: 'cyan', width: 2,
                segments: [
                    { length: 17, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: false
            },
            //links von schrägen durchgangslinien ende
            {
                startX: 640, startY: 340, color: 'cyan', width: 2,
                segments: [
                    { length: 25, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 760, startY: 340, color: 'cyan', width: 2,
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
                startX: 780, startY: 460, color: 'cyan', width: 2,
                segments: [
                    { length: 30, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 760, startY: 360, color: 'cyan', width: 2,
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
                startX: 683, startY: 277, color: 'cyan', width: 2,
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
                startX: 720, startY: 290, color: 'cyan', width: 2,
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
                startX: 730, startY: 305, color: 'cyan', width: 2,
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
                startX: 680, startY: 340, color: 'cyan', width: 2,
                segments: [
                    { length: 40, angleDeg: 90 },
                    { length: 40, angleDeg: 45 },

                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 693, startY: 353, color: 'cyan', width: 2,
                segments: [
                    { length: 20, angleDeg: 90 },
                    { length: 23, angleDeg: 45 },

                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 700, startY: 430, color: 'cyan', width: 2,
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
                startX: 700, startY: 445, color: 'cyan', width: 2,
                segments: [
                    { length: 20, angleDeg: 0 },
                    { length: 20, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 680, startY: 230, color: 'cyan', width: 2,
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
                startX: 660, startY: 230, color: 'cyan', width: 2,
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
                startX: 660, startY: 215, color: 'cyan', width: 2,
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
                startX: 605, startY: 160, color: 'cyan', width: 2,
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
                startX: 660, startY: 200, color: 'cyan', width: 2,
                segments: [

                    { length: 70, angleDeg: -135 },

                ],
                progress: 0,
                startPoint: true,
                endPoint: false
            },
            {
                startX: 580, startY: 150, color: 'cyan', width: 2,
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
                startX: 500, startY: 300, color: 'cyan', width: 2,
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
                startX: 490, startY: 300, color: 'cyan', width: 2,
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
                startX: 480, startY: 300, color: 'cyan', width: 2,
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
                startX: 470, startY: 300, color: 'cyan', width: 2,
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
                startX: 530, startY: 165, color: 'cyan', width: 2,
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
                startX: 450, startY: 165, color: 'cyan', width: 2,
                segments: [
                    { length: 40, angleDeg: 45 },
                    { length: 30, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 470, startY: 165, color: 'cyan', width: 2,
                segments: [
                    { length: 20, angleDeg: 45 },
                    { length: 25, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 515, startY: 265, color: 'cyan', width: 2,
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
                startX: 515, startY: 280, color: 'cyan', width: 2,
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
                startX: 670, startY: 290, color: 'cyan', width: 2,
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
                startX: 670, startY: 390, color: 'cyan', width: 2,
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
                startX: 740, startY: 340, color: 'cyan', width: 2,
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
                startX: 725, startY: 255, color: 'cyan', width: 2,
                segments: [
                    { length: 23, angleDeg: -90 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: false
            },
            //chip1
            {
                startX: 290, startY: 200, color: 'rgba(0, 255, 255, 0.3)', width: 6,
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
            // umrahmung
            {
                startX: 380, startY: 150, color: 'cyan', width: 2,
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
                startX: 380, startY: 160, color: 'cyan', width: 2,
                segments: [
                    { length: 10, angleDeg: 0 },
                    { length: 12, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 160, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 170, color: 'cyan', width: 2,
                segments: [
                    { length: 15, angleDeg: 0 },
                    { length: 25, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 170, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 180, color: 'cyan', width: 2,
                segments: [
                    { length: 20, angleDeg: 0 },
                    { length: 40, angleDeg: -45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 180, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 190, color: 'cyan', width: 2,
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
                startX: 380, startY: 190, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 380, startY: 200, color: 'cyan', width: 2,
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
                startX: 380, startY: 200, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            // right to left
            {
                startX: 360, startY: 217, color: 'cyan', width: 2,
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
                startX: 360, startY: 217, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 350, startY: 217, color: 'cyan', width: 2,
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
                startX: 350, startY: 217, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 340, startY: 217, color: 'cyan', width: 2,
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
                startX: 340, startY: 217, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 330, startY: 217, color: 'cyan', width: 2,
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
                startX: 330, startY: 217, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 320, startY: 217, color: 'cyan', width: 2,
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
                startX: 320, startY: 217, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 310, startY: 217, color: 'cyan', width: 2,
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
                startX: 310, startY: 217, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 300, startY: 217, color: 'cyan', width: 2,
                segments: [
                    { length: 70, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 300, startY: 217, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 290, startY: 217, color: 'cyan', width: 2,
                segments: [
                    { length: 80, angleDeg: 90 },
                    { length: 10, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 290, startY: 217, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 280, startY: 217, color: 'cyan', width: 2,
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
                startX: 280, startY: 217, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 270, startY: 222, color: 'cyan', width: 2,
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
                startX: 270, startY: 222, color: 'cyan', width: 4,
                segments: [
                    { length: 5, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 260, startY: 250, color: 'cyan', width: 2,
                segments: [
                    { length: 55, angleDeg: 135 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 260, startY: 265, color: 'cyan', width: 2,
                segments: [
                    { length: 55, angleDeg: 135 },
                ],
                progress: 0,
                startPoint: true,
                endPoint: true
            },
            {
                startX: 280, startY: 320, color: 'cyan', width: 2,
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
                startX: 290, startY: 500, color: 'cyan', width: 2,
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
                startX: 610, startY: 680, color: 'rgba(0, 255, 255, 0.3)', width: 6,
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
            {
                startX: 620, startY: 670, color: 'cyan', width: 2,
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
                startX: 640, startY: 690, color: 'cyan', width: 2,
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
                startX: 640, startY: 690, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },

            {
                startX: 640, startY: 700, color: 'cyan', width: 2,
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
                startX: 640, startY: 700, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 640, startY: 710, color: 'cyan', width: 2,
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
                startX: 640, startY: 710, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 640, startY: 720, color: 'cyan', width: 2,
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
                startX: 640, startY: 720, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 0 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 620, startY: 746, color: 'cyan', width: 2,
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
                startX: 620, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 610, startY: 746, color: 'cyan', width: 2,
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
                startX: 610, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 600, startY: 746, color: 'cyan', width: 2,
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
                startX: 600, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 590, startY: 746, color: 'cyan', width: 2,
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
                startX: 590, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 580, startY: 746, color: 'cyan', width: 2,
                segments: [
                    { length: 60, angleDeg: 90 },
                    { length: 45, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 580, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 570, startY: 746, color: 'cyan', width: 2,
                segments: [
                    { length: 65, angleDeg: 90 },
                    { length: 38, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 570, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 560, startY: 746, color: 'cyan', width: 2,
                segments: [
                    { length: 70, angleDeg: 90 },
                    { length: 52, angleDeg: 45 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: true
            },
            {
                startX: 560, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 550, startY: 746, color: 'cyan', width: 2,
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
                startX: 550, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 540, startY: 746, color: 'cyan', width: 2,
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
                startX: 540, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 530, startY: 746, color: 'cyan', width: 2,
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
                startX: 530, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 520, startY: 746, color: 'cyan', width: 2,
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
                startX: 520, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 510, startY: 746, color: 'cyan', width: 2,
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
                startX: 510, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 500, startY: 746, color: 'cyan', width: 2,
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
                startX: 500, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 490, startY: 746, color: 'cyan', width: 2,
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
                startX: 490, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 480, startY: 746, color: 'cyan', width: 2,
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
                startX: 480, startY: 746, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 90 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 460, startY: 720, color: 'cyan', width: 2,
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
                startX: 460, startY: 720, color: 'cyan', width: 4,
                segments: [
                    { length: 10, angleDeg: 180 },
                ],
                progress: 0,
                startPoint: false,
                endPoint: false
            },
            {
                startX: 415, startY: 710, color: 'cyan', width: 2,
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
                startX: 400, startY: 700, color: 'cyan', width: 2,
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
                startX: 390, startY: 690, color: 'cyan', width: 2,
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

    function drawCircuitLines(ctx, lines) {
        lines.forEach(line => {
            ctx.beginPath();
            ctx.lineWidth = line.width;
            ctx.strokeStyle = line.color;
            ctx.shadowBlur = 20;
            ctx.shadowColor = line.color;

            let x = line.startX;
            let y = line.startY;
            ctx.moveTo(x, y);

            const totalLength = line.segments.reduce((sum, seg) => sum + seg.length, 0);
            let visibleLen = line.progress * totalLength;

            for (let seg of line.segments) {
                if (visibleLen <= 0) break;
                const drawLen = Math.min(seg.length, visibleLen);
                const angleRad = seg.angleDeg * Math.PI / 180;
                const newX = x + Math.cos(angleRad) * drawLen;
                const newY = y + Math.sin(angleRad) * drawLen;
                ctx.lineTo(newX, newY);
                x = newX;
                y = newY;
                visibleLen -= drawLen;
            }
            ctx.stroke();

            if (line.startPoint) drawEndpoint(ctx, line.startX, line.startY, 6, line.color);
            if (line.endPoint) drawEndpoint(ctx, x, y, 6, line.color);
        });
    }

    function drawEndpoint(ctx, cx, cy, r, color) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = color;
        ctx.fill();
    }

    function animate(timestamp) {
        const state = animStateRef.current;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

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
                let floatAmp = 5;
                let pulseSpeed = 0.003;
                let pulseAmp = 0.05;
                let floatOffset = Math.sin(elapsed * floatSpeed) * floatAmp;
                let pulseScale = 1 + pulseAmp * Math.sin(elapsed * pulseSpeed);
                arc._pulseLineWidth = arc.lineWidth * pulseScale;

                drawRotatedArc(ctx, centerX, centerY + floatOffset,
                    arc.radius,
                    arc._pulseLineWidth || arc.lineWidth,
                    arc.color,
                    arc.angle
                );
                return;
            }

            drawRotatedArc(
                ctx, centerX, centerY,
                arc.radius,
                arc._pulseLineWidth ? arc._pulseLineWidth : arc.lineWidth,
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
            drawCircuitLines(ctx, state.circuitLines);

            //   if (t >= 1) {
            //     state.phase = 3;
            //     state.finalDoneTime = timestamp;
            //   }
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
    function handleDownload() {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dataUrl = canvas.toDataURL('image/png');

        const link = document.createElement('a');
        link.download = 'emina_logo.png';
        link.href = dataUrl;
        link.click();
    }

    return (
        <div 
        style={{
            width: '100%',
            height: '100vh',
            background: 'black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <canvas ref={canvasRef} width={1000} height={1000} />
           <div
           style={{
            position: 'relative'
        }}>
            <button
                onClick={handlePulse}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    border: 'none',
                    background: 'cyan',
                    color: 'black',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                logo
            </button>
            <button
                onClick={handleDownload}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    border: 'none',
                    background: 'cyan',
                    color: 'black',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Download
            </button>
            </div>
        </div>
    );
}

export default Emina;