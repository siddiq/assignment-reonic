import { runSimulation, SimulationConfig, SimulationResult } from './simulation'

describe('runSimulation', () => {
  it('should run the simulation and validate the results', () => {
    const config: SimulationConfig = {
      numChargepoints: 20,
      chargingPowerKW: 11,
      totalTicks: 365 * 24 * 4,
      arrivalProbabilityMultiplier: 1.0,
      energyConsumptionPerCar: 18
    }

    const setResults = (results: SimulationResult) => {
      expect(results).not.toBeNull()

      expect(results.concurrencyFactor).toBeGreaterThanOrEqual(0.35)
      expect(results.concurrencyFactor).toBeLessThanOrEqual(0.55)
      expect(results.actualMaxPower).toBeGreaterThanOrEqual(77)
      expect(results.actualMaxPower).toBeLessThanOrEqual(121)
      expect(results.theoreticalMaxPower).toBe(
        config.numChargepoints * config.chargingPowerKW
      )
    }

    runSimulation(config, setResults)
  })
})
