// Task 4: delUser(number)
export async function delUser(number) {
    const response = await fetch(`http://localhost:3000/users/${number}`, {
        method: "DELETE"
    });

    if (response.ok) {
        console.log(`User ${number} deleted successfully`);
    } else {
        console.log(`Could not delete user ${number}`);
    }
}
