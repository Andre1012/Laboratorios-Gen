
// const amount = process.argv[2]

// console.log(costCalculator(amount))

export function costCalculator(amount) {
    return Number(amount) + (Number(amount) * 0.01) + 3
}

