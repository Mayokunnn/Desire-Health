async function createUser(user) {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const newUser = await response.json();
    console.log("hey");
    return newUser;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// GET USERS
async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export {getUsers, createUser}


