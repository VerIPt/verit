import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AugustusHTML = () => {
    const navigate = useNavigate();
    const [showBackButton, setShowBackButton] = useState(true);
    
    const goBack = () => {
        navigate('/');
    };

    // Höre auf Nachrichten vom iframe
    useEffect(() => {
        const handleMessage = (event) => {
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
            {/* Back Button - nur im Hauptmenü anzeigen */}
            {showBackButton && (
                <button 
                    onClick={goBack}
                    style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    zIndex: 10000,
                    background: 'linear-gradient(135deg,rgb(69, 69, 69),rgb(39, 39, 39))',
                    border: 'none',
                    borderRadius: '50px',
                    padding: window.innerWidth <= 768 ? '12px 20px' : '15px 25px',
                    color: 'white',
                    fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(243, 159, 159, 0.3)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: window.innerWidth <= 768 ? '8px' : '10px'
                }}
                onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(243, 159, 159, 0.4)';
                }}
                onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(243, 159, 159, 0.3)';
                }}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                {window.innerWidth <= 768 ? 'Zurück' : 'Zurück zur Website'}
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
