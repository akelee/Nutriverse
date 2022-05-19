function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
}

export function getDummyUsers() {
  sleep(1000);
  return [
    {
      id: 1,
      username: "alexis-lee",
      name: "Alexis Lee",
      display_name: "Alexis",
      email: "alexis-lee@nutriverse.com",
      password: "password",
    },
    {
      id: 2,
      username: "patricia-santos",
      name: "Patricia Buchner Santos",
      display_name: "Patricia",
      email: "patricia-santos@nutriverse.com",
      password: "password",
    },
    {
      id: 3,
      username: "zoe-b-scott",
      name: "Zoe Scott",
      display_name: "Zoe",
      email: "zoe-scott@nutriverse.com",
      password: "password",
    },
  ];
}

const endpoint = "http://localhost:8080";
export const localEndpoint = "http://localhost:8080";

export async function getUsers() {
  try {
    // Like `response = requests.get(...)` in Python
    const response = await fetch(`${endpoint}/users`);
    // Like `return response.json()` in Python
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function signIn() {
  try {
    // Like `response = requests.get(...)` in Python
    const response = await fetch(`${endpoint}/signin`);
    // Like `return response.json()` in Python
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function signUp() {
  // Like `response = requests.get(...)` in Python
  const response = await fetch(`${endpoint}/signup`);
  // Like `return response.json()` in Python
  return await response.json();
}
