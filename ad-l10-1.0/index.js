const itemsContainer = document.querySelector("#list-items")
const statusMessage = document.querySelector("#status-message")
const loadButton = document.querySelector("#load-colors")
const clearButton = document.querySelector("#clear-colors")
const STORAGE_KEY = "colors"

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card color-card"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.textContent = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.textContent = `Código Pantone: ${item.pantone_value}`
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.className = "color-swatch"
  colourCardColour.style.backgroundColor = item.color
  colourCardColour.textContent = item.color
  colourCardBody.append(colourCardColour)
}

function renderColors(colors) {
  // Limpiar antes de pintar evita tarjetas duplicadas al cargar desde la API
  // varias veces o al cambiar entre los datos locales y los remotos.
  itemsContainer.replaceChildren()
  colors.forEach(addItem)
}

async function fetchColorsList() {
  // Task 1 y Task 2: Fetch obtiene la respuesta completa y cada elemento
  // recibido se entrega a addItem mediante renderColors para mostrarlo.
  statusMessage.textContent = "Cargando colores..."

  const response = await fetch("https://reqres.in/api/unknown")
  if (!response.ok) {
    throw new Error(`La API respondió con el estado ${response.status}`)
  }

  const result = await response.json()
  if (!Array.isArray(result.data)) {
    throw new Error("La respuesta de la API no contiene una lista de colores")
  }

  // Task 3: Guardar la lista original permite reutilizarla aunque no haya red.
  localStorage.setItem(STORAGE_KEY, JSON.stringify(result.data))
  renderColors(result.data)
  statusMessage.textContent = `${result.data.length} colores cargados desde la API.`
  return result.data
}

function loadColorsFromStorage() {
  // Task 4: Recuperar y validar el JSON guardado antes de renderizarlo evita
  // que datos corruptos del navegador rompan la aplicación.
  const storedColors = localStorage.getItem(STORAGE_KEY)
  if (!storedColors) {
    return []
  }

  let colors
  try {
    colors = JSON.parse(storedColors)
  } catch (error) {
    // Si el JSON fue alterado manualmente, se elimina solo esa entrada y se
    // informa el problema para que la carga inicial pueda continuar.
    localStorage.removeItem(STORAGE_KEY)
    statusMessage.textContent = "Los datos guardados no son válidos; se solicitarán de nuevo."
    console.error("No se pudo leer la lista guardada.", error)
    return []
  }

  if (!Array.isArray(colors)) {
    localStorage.removeItem(STORAGE_KEY)
    statusMessage.textContent = "Los datos guardados no contienen una lista válida."
    return []
  }

  renderColors(colors)
  statusMessage.textContent = `${colors.length} colores cargados desde el almacenamiento local.`
  return colors
}

function clearColors() {
  // Task 5: Borrar la clave y el contenido visual mantiene sincronizada
  // la interfaz con el almacenamiento local.
  localStorage.removeItem(STORAGE_KEY)
  itemsContainer.replaceChildren()
  statusMessage.textContent = "La lista de colores está vacía."
}

loadButton.addEventListener("click", () => {
  // Task 6: El botón vuelve a consultar la API y reemplaza la lista actual.
  fetchColorsList().catch((error) => {
    statusMessage.textContent = `No se pudieron cargar los colores: ${error.message}`
    console.error(error)
  })
})

clearButton.addEventListener("click", clearColors)

// Primero se intenta usar la copia local; solo se consulta la API si aún no
// existe información almacenada, evitando solicitudes innecesarias al iniciar.
const storedColors = loadColorsFromStorage()
if (storedColors.length === 0) {
  fetchColorsList().catch((error) => {
    statusMessage.textContent = `No se pudieron cargar los colores: ${error.message}`
    console.error(error)
  })
}