function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
}

export function getUsersDummyData() {
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

export async function getUsers() {
  // Like `response = requests.get(...)` in Python
  const response = await fetch("http://127.0.0.1:5000/users");
  // Like `return response.json()` in Python
  return await response.json();
}

export async function signUp() {
  // Like `response = requests.get(...)` in Python
  const response = await fetch("http://127.0.0.1:5000/signup");
  // Like `return response.json()` in Python
  return await response.json();
}

export const localEndpoint = "http://localhost:8080";
