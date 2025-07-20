import React from 'react';

const OptimizedWebsiteImage = ({ 
    src, 
    webpSrc, 
    alt, 
    className = '',
    loading = 'lazy',
    ...props 
}) => {
    return (
        <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img 
                src={src} 
                alt={alt} 
                className={className}
                loading={loading}
                {...props}
            />
        </picture>
    );
};

export default OptimizedWebsiteImage;
