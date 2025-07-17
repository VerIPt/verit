import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
    src, 
    webpSrc, 
    alt, 
    className = '', 
    loading = 'lazy',
    width,
    height,
    ...props 
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleLoad = () => {
        setImageLoaded(true);
    };

    const handleError = () => {
        setImageError(true);
    };

    // Placeholder während des Ladens
    const placeholderStyle = {
        backgroundColor: '#133051',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#f39f9f',
        fontSize: '0.8rem',
        width: width || '100%',
        height: height || 'auto',
        minHeight: '100px',
        borderRadius: '8px'
    };

    if (imageError) {
        return (
            <div style={placeholderStyle} className={className}>
                Bild konnte nicht geladen werden
            </div>
        );
    }

    return (
        <div className={className} style={{ position: 'relative' }}>
            <picture>
                {webpSrc && (
                    <source srcSet={webpSrc} type="image/webp" />
                )}
                <img
                    src={src}
                    alt={alt}
                    loading={loading}
                    onLoad={handleLoad}
                    onError={handleError}
                    width={width}
                    height={height}
                    style={{
                        opacity: imageLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out',
                        width: '100%',
                        height: 'auto'
                    }}
                    {...props}
                />
            </picture>
            {!imageLoaded && !imageError && (
                <div style={{
                    ...placeholderStyle,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}>
                    Laden...
                </div>
            )}
        </div>
    );
};

OptimizedImage.propTypes = {
    src: PropTypes.string.isRequired,
    webpSrc: PropTypes.string,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    loading: PropTypes.oneOf(['lazy', 'eager']),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default OptimizedImage;
