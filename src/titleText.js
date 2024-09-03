import React from 'react';
import './textAnimation.css';
const LoadingText = () => (
    <div className="waviy inline-block">
        <span style={{ '--i': 1 }}>A</span>
        <span style={{ '--i': 2 }}>B</span>
        <span style={{ '--i': 3 }}>O</span>
        <span style={{ '--i': 4 }}>U</span>
        <span style={{ '--i': 5 }}>T</span>
        <span style={{ '--i': 6 }}>&nbsp;</span>
        <span style={{ '--i': 7 }}>M</span>
        <span style={{ '--i': 8 }}>E</span>
        <span style={{ '--i': 9 }}>.</span>
    </div>
);

export default LoadingText;
