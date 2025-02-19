import { useState } from 'react'
import './Task1.css'

interface SimulationResult {
  totalEnergy: string
  theoreticalMaxPower: string
  actualMaxPower: string
  concurrencyFactor: string
}

const Task1: React.FC = () => {
  const [results, setResults] = useState<SimulationResult | null>(null)

  const runSimulation = () => {
    setResults({
      totalEnergy: 'XX kWh',
      theoreticalMaxPower: '220 kW',
      actualMaxPower: 'YY kW',
      concurrencyFactor: 'ZZ%'
    })
  }

  return (
    <div className="task1 container">
      <h1 className="title">EV Charging Simulation</h1>
      <button className="button" onClick={runSimulation}>
        Run Simulation
      </button>

      {results && (
        <div className="results">
          <p>
            <strong>Total Energy Consumed:</strong> {results.totalEnergy}
          </p>
          <p>
            <strong>Theoretical Max Power Demand:</strong>{' '}
            {results.theoreticalMaxPower}
          </p>
          <p>
            <strong>Actual Max Power Demand:</strong> {results.actualMaxPower}
          </p>
          <p>
            <strong>Concurrency Factor:</strong> {results.concurrencyFactor}
          </p>
        </div>
      )}
    </div>
  )
}

export default Task1
