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

export default getUsers;

