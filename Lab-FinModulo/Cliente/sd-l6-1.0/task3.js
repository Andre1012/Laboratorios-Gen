// Task 3: addUser(first_name, last_name, email)
export async function addUser(first_name, last_name, email) {
    
    // Obtener los usuarios actuales con el endpoint de users
    const response = await fetch("http://localhost:3000/users");
    // Convirtiendo la respuesta JSON a un objeto de JS
    const users = await response.json();

    // Encontrando el ID más alto usando un map
    const highestId = users.reduce((max, user) => {
        return Math.max(max, user.id);
    }, 0);

    // Creando el nuevo usuario
    const newUser = {
        id: highestId + 1,
        first_name: first_name,
        last_name: last_name,
        email: email
    };

    // Enviando el nuevo usuario al JSON Server con una petición POST
    const createResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });

    const createdUser = await createResponse.json();
}
