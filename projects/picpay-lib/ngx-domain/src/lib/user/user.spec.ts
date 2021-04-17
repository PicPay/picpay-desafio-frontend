import { User } from './user';
import { userOneMock } from './user.mock';

describe('Class: User', () => {
  it('should create a user', () => {
    const instanceClass = new User(userOneMock);

    expect(instanceClass).toBeInstanceOf(User);
    expect(instanceClass.id).toEqual(userOneMock.id);
    expect(instanceClass.img).toEqual(userOneMock.img);
    expect(instanceClass.name).toEqual(userOneMock.name);
    expect(instanceClass.userName).toEqual(userOneMock.userName);
  });
});
