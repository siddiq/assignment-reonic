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

  // Array to track the chargepoints (each slot holds the remaining charge time)
  let chargepoints: (number | null)[] = new Array(numChargepoints).fill(null)

  for (let tick = 0; tick < totalTicks; tick++) {
    // Simulate number of EVs arriving at this tick (random probability)
    const numArrivingEVs =
      Math.random() < 0.1 * arrivalProbabilityMultiplier
        ? Math.floor(Math.random() * 3)
        : 0

    let powerUsedThisTick = 0

    for (let i = 0; i < numArrivingEVs; i++) {
      if (Math.random() < 0.5) {
        // 50% probability the EV actually needs charging

        // Determine energy demand (random between 10 - 50 kWh)
        const energyNeeded = 10 + Math.random() * 40

        // Find an available chargepoint
        const availableIndex = chargepoints.findIndex((t) => t === null)

        if (availableIndex !== -1) {
          const chargingTimeTicks = Math.ceil(energyNeeded / chargingPowerKW)
          chargepoints[availableIndex] = chargingTimeTicks // Assign charge duration
          totalEnergyConsumed += energyNeeded
        }
      }
    }

    // Update chargepoints (reduce remaining charge time)
    for (let j = 0; j < numChargepoints; j++) {
      if (chargepoints[j] !== null) {
        powerUsedThisTick += chargingPowerKW
        chargepoints[j]! -= 1
        if (chargepoints[j] === 0) chargepoints[j] = null // Free up chargepoint
      }
    }

    // Track peak power demand
    if (powerUsedThisTick > actualMaxPowerDemand) {
      actualMaxPowerDemand = powerUsedThisTick
    }
  }

  // Calculate concurrency factor
  const concurrencyFactor = actualMaxPowerDemand / theoreticalMaxPower

  setResults({
    totalEnergy: Math.round(totalEnergyConsumed),
    theoreticalMaxPower: theoreticalMaxPower,
    actualMaxPower: actualMaxPowerDemand,
    concurrencyFactor: Math.round(concurrencyFactor * 100) / 100 // Rounded to 2 decimals
  })
}
