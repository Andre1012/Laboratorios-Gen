export function ageCalculator(year, month, day) {
    const fechaActual = new Date()
    const fechaNacimiento = new Date(year, month, day)
    
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
    let mes = fechaActual.getMonth() - fechaNacimiento.getMonth()
    let dia = fechaActual.getDate() - fechaNacimiento.getDate()

    if (mes < 0 || (mes === 0) && (dia < 0)) {
      edad--
    }
    return edad
}