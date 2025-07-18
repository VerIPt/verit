import React from 'react';

const AugustusHTML = () => {
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
