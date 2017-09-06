import * as React from 'react';
import { keyframes, style } from 'typestyle';

const container = style({
    backgroundColor: '#1d3557',
    boxShadow: '0 -2px 10px -1px #777',
    padding: '0.35rem 0.5rem',
});

const link = style({
    color: '#f1faee',
    fontSize: '1.3rem',
    textDecoration: 'none',
});

const jump = keyframes({
    '0%': {
        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    },
    '10%': {
        transform: 'translate3d(0, 0, 0) scale3d(1, 0.8, 1)',
    },
    '20%': {
        transform: 'translate3d(0, -.5rem, 0) scale3d(1, 1, 1)',
    },
    '38%': {
        transform: 'scale3d(1, 0.85, 1)',
    },
    '40%': {
        transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    },
    '100%': {
        transform: 'translate3d(0, 0, 0)',
    },
});

const mapPin = style({
    fontSize: '1.6rem',
});

const mapMarker = style({
    marginTop: '-0.6rem',
    color: '#E67E22',
    animation: jump,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    textShadow: 'rgba(0, 0, 0, 0.4) 1px 1px',
    transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
    transformOrigin: '0 100%',
});

export default () => (
    <div className={container}>
        <a className={link} href="/">
            <div className="fa-stack">
                <i className={mapPin + ' fa fa-stack-1x fa-map-o'} />
                <i className={mapMarker + ' fa fa-stack-1x fa-map-marker'} />
            </div>
            &nbsp;PitStops
        </a>
    </div>
);
