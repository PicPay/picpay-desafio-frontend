import { User } from '@core/domains/user/user.domain';

let id = 0;
const users = [];

for (let i = 10; i > 0; i--) {
  users.push({
    id: id++,
    img: `https://fakeimg.pl/300/`,
    name: `Mock User ${id}`,
    username: `mockuser ${id}`,
  });
}

export const MOCK_USERS: User[] = users;

export const MOCK_USER: User = {
  id: id++,
  img: `https://fakeimg.pl/300/`,
  name: `Mock User ${id}`,
  username: `mockuser ${id}`,
};
