// src/components/HomeScreen.js
import React, { useEffect, useRef } from 'react';
import './HomeScreen.css';

function HomeScreen({ onStart }) {
    const vantaRef = useRef(null);

    useEffect(() => {
    if (!window.VANTA || !window.THREE) {
        console.warn('VANTA or THREE not loaded');
        return;
    }

    const effect = window.VANTA.FOG({
        el: vantaRef.current,
        highlightColor: 0xff0000,
        midtoneColor: 0xff9911,
        lowlightColor: 0x111111,
        baseColor: 0x000000,
        blurFactor: 0.8,
        speed: 1.3,
        zoom: 0.8
    });

    return () => {
        if (effect && effect.destroy) effect.destroy(); // Cleanup Vanta effect
    };
    }, []);

    return (
    <div ref={vantaRef} className="home-screen">
        <div className="home-content">
            <h1>Welcome to GeoGamer</h1>
            <p>Guess the game then try to guess the spot</p>
            <button className="start-button" onClick={onStart}>Niveau 1</button>
        </div>
    </div>
    );
}

export default HomeScreen;