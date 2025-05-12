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
        mouseControls: true,
        touchControls: true,
        highlightColor: 0xff00c8,
        midtoneColor: 0x00f0ff,
        lowlightColor: 0x111111,
        baseColor: 0x000000,
        blurFactor: 0.8,
        speed: 1.5,
        zoom: 0.8
    });

    return () => {
        if (effect && effect.destroy) effect.destroy();
    };
    }, []);

    return (
    <div ref={vantaRef} className="home-screen">
        <button className="start-button" onClick={onStart}>Niveau 1</button>
    </div>
    );
}

export default HomeScreen;