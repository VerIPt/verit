import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AugustusHTML = () => {
    const navigate = useNavigate();
    const [showBackButton, setShowBackButton] = useState(true); // Startet mit true (Hauptmenü)
    
    const goBack = () => {
        navigate('/');
    };

    useEffect(() => {
        const handleMessage = (event) => {
            // Button nur im Hauptmenü anzeigen, nicht in der Timeline
            if (event.data.type === 'AUGUSTUS_MENU_STATE') {
                setShowBackButton(event.data.showMainMenu);
            }
        };

        window.addEventListener('message', handleMessage);
        
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <div style={{ 
            width: '100vw', 
            height: '100vh', 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            zIndex: 9999,
            backgroundColor: '#000'
        }}>
            {/* Zurück Button - nur im Hauptmenü sichtbar */}
            {showBackButton && (
                <button 
                    onClick={goBack}
                    style={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px',
                    zIndex: 999999,
                    background: 'rgba(80, 80, 80, 0.9)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '25px',
                    padding: '12px 20px',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backdropFilter: 'blur(10px)'
                }}
                onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.background = 'rgba(100, 100, 100, 0.9)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.6)';
                }}
                onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.background = 'rgba(80, 80, 80, 0.9)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
                }}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                Zurück zur Website
            </button>
            )}
            
            <iframe 
                src="/augustus/index.html"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    margin: 0,
                    padding: 0
                }}
                title="Augustus Timeline"
            />
        </div>
    );
};

export default AugustusHTML;
