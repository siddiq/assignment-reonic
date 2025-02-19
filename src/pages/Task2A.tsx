import { useState } from 'react'
import './Task2A.css'

const Task2A: React.FC = () => {
  const [numChargepoints, setNumChargepoints] = useState<number>(20)
  const [arrivalMultiplier, setArrivalMultiplier] = useState<number>(100)
  const [consumptionOfTheCars, setConsumptionOfTheCars] = useState<number>(18)
  const [chargingPower, setChargingPower] = useState<number>(11)

  return (
    <div className="task2a container">
      <h1 className="title">Charging Simulation Settings</h1>

      <div className="space-y-4">
        <label className="label">
          Number of Chargepoints:
          <input
            type="number"
            className="input"
            value={numChargepoints}
            onChange={(e) => setNumChargepoints(Number(e.target.value))}
          />
        </label>

        <label className="label">
          Arrival Multiplier (%):
          <input
            type="number"
            className="input"
            value={arrivalMultiplier}
            onChange={(e) => setArrivalMultiplier(Number(e.target.value))}
          />
        </label>

        <label className="label">
          Consumption of the Cars (kWh):
          <input
            type="number"
            className="input"
            value={consumptionOfTheCars}
            onChange={(e) => setConsumptionOfTheCars(Number(e.target.value))}
          />
        </label>

        <label className="label">
          Charging Power (kW):
          <input
            type="number"
            className="input"
            value={chargingPower}
            onChange={(e) => setChargingPower(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  )
}

export default Task2A
