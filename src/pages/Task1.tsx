import { useState } from 'react'
import './Task1.css'
import {
  runSimulation,
  SimulationConfig,
  SimulationResult
} from '../utils/simulation'

const config: SimulationConfig = {
  numChargepoints: 20,
  chargingPowerKW: 11,
  totalTicks: 365 * 24 * 4, // 35,040 ticks (15-min intervals in a year)
  arrivalProbabilityMultiplier: 1.0, // 100%
  energyConsumptionPerCar: 18 // 18 kWh
}

const Task1: React.FC = () => {
  const [results, setResults] = useState<SimulationResult | null>(null)

  return (
    <div className="task1 container">
      <h1 className="title">EV Charging Simulation</h1>
      <button
        className="button"
        onClick={() => runSimulation(config, setResults)}
      >
        Run Simulation
      </button>

      {results && (
        <div className="results">
          <p>
            <strong>Total Energy Consumed:</strong> {results.totalEnergy} kWh
          </p>
          <p>
            <strong>Theoretical Max Power Demand:</strong>{' '}
            {results.theoreticalMaxPower} kW
          </p>
          <p>
            <strong>Actual Max Power Demand:</strong> {results.actualMaxPower}{' '}
            kW
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
