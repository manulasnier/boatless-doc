import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function CopyCommand() {
  const cmd = 'npm i boatless --save-dev';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button className={styles.copyCommand} onClick={handleCopy} title="Copy to clipboard">
      <span className={styles.cmdText}>{cmd}</span>
      <span className={styles.copyIcon}>{copied ? '✓' : '⎘'}</span>
    </button>
  );
}

function WaveWithBoat() {
  return (
    <div className={styles.waveContainer}>
      <svg
        className={styles.wave}
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#36a9e1" />
            <stop offset="100%" stopColor="#1d71b8" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGrad)"
          d="M0,160 C180,220 360,80 540,140 C720,200 900,60 1080,120 C1260,180 1380,100 1440,80 L1440,320 L0,320 Z"
        />
      </svg>

      {/* Boat */}
      <svg
        className={styles.boat}
        viewBox="0 0 80 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hull */}
        <path d="M10,42 L70,42 L60,58 L20,58 Z" fill="#b5651d" />
        <path d="M10,42 L70,42 L67,46 L13,46 Z" fill="#8b4513" />
        {/* Mast */}
        <line x1="40" y1="12" x2="40" y2="42" stroke="#8b4513" strokeWidth="2.5" strokeLinecap="round" />
        {/* Sail */}
        <path d="M40,14 L40,40 L16,36 Z" fill="white" opacity="0.92" />
        <path d="M40,14 L40,40 L62,30 Z" fill="#e8f4fb" opacity="0.85" />
        {/* Flag */}
        <path d="M40,12 L52,8 L40,14 Z" fill="#36a9e1" />
      </svg>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      noFooter
      title="LESS CSS starter toolkit"
      description="Open-source LESS CSS toolkit for web integrators: mixins, grid system, helpers, typography and form utilities. Install with npm and import in your LESS project."
    >
      <main className={styles.main}>
        <div className={styles.hero}>
          <img
            src="/img/logo.svg"
            alt="boatless"
            className={styles.logo}
          />
          <p className={styles.tagline}>LESS CSS starter toolkit for web integrators</p>
          <CopyCommand />
          <Link className={styles.cta} to="/docs">
            Get Started
          </Link>
        </div>
        <WaveWithBoat />
      </main>
    </Layout>
  );
}
