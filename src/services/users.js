const baseURL = "https://desirehealth-production.up.railway.app/api";// Default base URL for local development

// GET USERS
async function getUsers() {
  try {
    const response = await fetch(`${baseURL}/clients`);
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

async function getUser(id) {
  if (!id) {
    throw new Error("User ID is required");
  }
  try {
    const response = await fetch(`${baseURL}/user/${id}`);
    if (!response.ok) {
      throw new Error("Failed to get your data");
    }
    const data = await response.json();
    return data;
  } catch (error) {

    return error;
    
  }
}

export {getUsers, getUser}


