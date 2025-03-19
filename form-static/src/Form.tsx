import { FormClient } from './FormClient'
import './styles.css'

export default function Form() {
  return (
    <div className="form-widget">
      <h1>Form Widget</h1>
      <div className="form-container">
        <FormClient />
      </div>
    </div>
  )
} 