import React from 'react';
import './index.scss';

const BackgroundWaves = () => {
    return (
        <div className="background-waves">
            <svg className="wave-svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
                <path 
                    className="wave-line" 
                    d="M0,150 C360,100 720,200 1440,150"
                    fill="none"
                />
                <path 
                    className="wave-line" 
                    d="M0,250 C480,200 960,300 1440,250"
                    fill="none"
                />
                <path 
                    className="wave-line" 
                    d="M0,350 C320,300 640,400 1440,350"
                    fill="none"
                />
                <path 
                    className="wave-line" 
                    d="M0,450 C540,400 1080,500 1440,450"
                    fill="none"
                />
                <path 
                    className="wave-line" 
                    d="M0,550 C240,500 480,600 720,550 C960,500 1200,600 1440,550"
                    fill="none"
                />
                <path 
                    className="wave-line" 
                    d="M0,650 C600,600 840,700 1440,650"
                    fill="none"
                />
            </svg>
        </div>
    );
};

export default BackgroundWaves;
