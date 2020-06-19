const { UserRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { User } = require("../../../src/models");
let {
  UserModelMock: { users, user },
} = require("../../mocks");

describe("User Repository test", () => {
  // TODO: antes de correr los test
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("should return a user by username", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOne");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.getUserByUsername(_user.username);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("should return a user by id", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOne");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.get(_user._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("should return a user collection", async () => {
    users = users.map((user) => {
      delete user.password;
      return user;
    });

    mockingoose(User).toReturn(users, "find");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.getAll();

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(users);
  });

  it("should update an especific user by id", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(_user, "findOneAndUpdate");

    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.update(_user._id, {
      name: "test",
    });

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("should delete an especific user by id", async () => {
    mockingoose(User).toReturn(user, "findOneAndDelete");
    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.delete(user._id);
    expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
  });
});
