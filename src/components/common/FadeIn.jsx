import React, { useEffect, useRef } from 'react';

const FadeIn = ({ children, selector }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                  } else {
                    // entry.target.classList.remove('is-visible');
                  }
                });
        }, {
            // IntersectionObserver options
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={elementRef} className={selector}>
            {children}
        </div>
    );
};

export default FadeIn;
