import { SimulationResult } from '../utils/simulation'

interface ResultsProps {
  results: SimulationResult | null
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  if (!results) return null

  return (
    <div className="results">
      <p>
        <strong>Total Energy Consumed:</strong>{' '}
        {results.totalEnergy.toLocaleString()} kWh
      </p>
      <p>
        <strong>Theoretical Max Power Demand:</strong>{' '}
        {results.theoreticalMaxPower} kW
      </p>
      <p>
        <strong>Actual Max Power Demand:</strong> {results.actualMaxPower} kW
      </p>
      <p>
        <strong>Concurrency Factor:</strong> {results.concurrencyFactor * 100}%
      </p>
    </div>
  )
}

export default Results
