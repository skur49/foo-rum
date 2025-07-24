const TestUser1 = {
  username: "demo@example.com",
  password: "password123",
};

const TestUser2 = {
  username: "test@user.com",
  password: "testpass",
};

type Props = {
  username: string;
  password: string;
};

export const checkTestUserLogin = ({ username, password }: Props) => {
  if (
    (username === TestUser1.username && password === TestUser1.password) ||
    (username === TestUser2.username && password === TestUser2.password)
  ) {
    return true;
  }
  return false;
};
