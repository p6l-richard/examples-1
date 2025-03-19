'use client'

import { useState } from 'react'
import { hydrate } from '@parcel/rsc/client'

hydrate()

export function FormClient() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  // Simple bar chart using divs
  const Chart = () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end', height: '200px', marginTop: '20px' }}>
      {[60, 120, 80].map((height, i) => (
        <div
          key={i}
          style={{
            width: '50px',
            height: `${height}px`,
            backgroundColor: '#0070f3',
            transition: 'height 0.5s ease-in-out'
          }}
        />
      ))}
    </div>
  )

  if (step === 2) {
    return (
      <div>
        <h3>Thanks {formData.name}!</h3>
        <p>We'll contact you at {formData.email}</p>
        <Chart />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />
      </div>
      <button type="submit">Next</button>
    </form>
  )
}