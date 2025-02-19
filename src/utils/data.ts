export const arrivalProbabilities: number[] = [
  0.0094, 0.0094, 0.0094, 0.0094, 0.0094, 0.0094, 0.0094, 0.0094, 0.0283,
  0.0283, 0.0566, 0.0566, 0.0566, 0.0755, 0.0755, 0.0755, 0.1038, 0.1038,
  0.1038, 0.0472, 0.0472, 0.0472, 0.0094, 0.0094
]

export const chargingDemandProbabilities: {
  probability: number
  km: number
}[] = [
  { probability: 0.3431, km: 0 }, // No charge
  { probability: 0.049, km: 5 }, // 5 km
  { probability: 0.098, km: 10 }, // 10 km
  { probability: 0.1176, km: 20 }, // 20 km
  { probability: 0.0882, km: 30 }, // 30 km
  { probability: 0.1176, km: 50 }, // 50 km
  { probability: 0.1078, km: 100 }, // 100 km
  { probability: 0.049, km: 200 }, // 200 km
  { probability: 0.0294, km: 300 } // 300 km
]
