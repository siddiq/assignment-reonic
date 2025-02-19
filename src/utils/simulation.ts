import { arrivalProbabilities, chargingDemandProbabilities } from './data'

export interface SimulationConfig {
  numChargepoints: number
  chargingPowerKW: number
  totalTicks: number
  arrivalProbabilityMultiplier: number
  energyConsumptionPerCar: number
}

export interface SimulationResult {
  totalEnergy: number
  theoreticalMaxPower: number
  actualMaxPower: number
  concurrencyFactor: number
}

// Function to select charge demand based on probability distribution
const getChargingDemand = (): number => {
  const rand = Math.random()
  let cumulative = 0
  for (const { probability, km } of chargingDemandProbabilities) {
    cumulative += probability
    if (rand < cumulative) return km
  }
  return 0
}

export const runSimulation = (
  config: SimulationConfig,
  setResults: (results: SimulationResult) => void
) => {
  const {
    numChargepoints,
    chargingPowerKW,
    totalTicks,
    arrivalProbabilityMultiplier,
    energyConsumptionPerCar
  } = config

  const theoreticalMaxPower = numChargepoints * chargingPowerKW
  let totalEnergyConsumed = 0
  let actualMaxPowerDemand = 0

  const chargepoints: (number | null)[] = new Array(numChargepoints).fill(null)

  for (let tick = 0; tick < totalTicks; tick++) {
    const hour = Math.floor((tick % 1440) / 60) // Get current hour from ticks
    const arrivalProbability =
      arrivalProbabilities[hour] * arrivalProbabilityMultiplier

    let powerUsedThisTick = 0

    for (let j = 0; j < numChargepoints; j++) {
      if (chargepoints[j] === null && Math.random() < arrivalProbability) {
        const chargeDistance = getChargingDemand()
        if (chargeDistance > 0) {
          const energyNeeded = (chargeDistance / 100) * energyConsumptionPerCar
          const chargingTimeTicks = Math.ceil(energyNeeded / chargingPowerKW)
          chargepoints[j] = chargingTimeTicks
          totalEnergyConsumed += energyNeeded
        }
      }
    }

    for (let j = 0; j < numChargepoints; j++) {
      if (chargepoints[j] !== null) {
        powerUsedThisTick += chargingPowerKW
        chargepoints[j]! -= 1
        if (chargepoints[j] === 0) chargepoints[j] = null
      }
    }

    actualMaxPowerDemand = Math.max(actualMaxPowerDemand, powerUsedThisTick)
  }

  const concurrencyFactor = actualMaxPowerDemand / theoreticalMaxPower

  setResults({
    totalEnergy: Math.round(totalEnergyConsumed),
    theoreticalMaxPower: theoreticalMaxPower,
    actualMaxPower: actualMaxPowerDemand,
    concurrencyFactor: Math.round(concurrencyFactor * 100) / 100
  })
}
