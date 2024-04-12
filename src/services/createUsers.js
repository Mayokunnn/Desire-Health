async function createUser(user) {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin":  'http://localhost:5173',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error(error);
    return null;
  }
}



export { createUser };
