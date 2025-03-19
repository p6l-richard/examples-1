"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export function Form() {
  const [email, setEmail] = useState('');
  const [showChart, setShowChart] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowChart(true);
  };

  if (showChart) {
    return (
      <div className="form-container">
        <h2>Results</h2>
        <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
          {[75, 25, 50].map((value, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                width: '60px',
                background: 'var(--primary-color)',
                borderRadius: '4px 4px 0 0'
              }}
            />
          ))}
        </div>
        <button onClick={() => setShowChart(false)} style={{ marginTop: '1rem' }}>
          Back
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={!email.includes('@')}>
        Show Results
      </button>
    </form>
  );
} 