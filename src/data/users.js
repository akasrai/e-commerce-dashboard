const users = [
  {
    id: 1,
    name: "John Doe",
    password: "password123",
    email: "john@mail.com",
    roles: ["USER"],
  },
  {
    id: 2,
    name: "Jane Smith",
    password: "password123",
    email: "jane@mail.com",
    roles: ["ADMIN"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    password: "password123",
    email: "alice@mail.com",
    roles: ["SUPER_ADMIN"],
  },
];

export const getUserByEmail = (email) => {
  return users.find((user) => user.email === email);
};

export const verifyUserCredentials = (email, password) => {
  const user = getUserByEmail(email);

  if (user && user.password === password) {
    delete user.password;

    return user;
  }

  return null;
};
