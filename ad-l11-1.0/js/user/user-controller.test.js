const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

// Reset the users array before each test
beforeEach(() => {
    userController.users = [];
});

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// Adding a test to check if adding a user with an existing id throws an error
test('add user with existing id throws error', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");
    let user2 = new User(1234, "María", "maria@generation.org");

    userController.add(user1);

    expect(() => {
        userController.add(user2);
    }).toThrow("User with id 1234 already exists.");
});

// Adding a test to check if removing a user that does not exist does not throw an error
test('remove user that does not exist in userController', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");
    let user2 = new User(5678, "Ana", "ana@generation.org");

    userController.add(user1);

    userController.remove(user2);

    expect(userController.getUsers()).toContain(user1);
    expect(userController.getUsers()).toHaveLength(1);
});

// Adding a test to check if findByEmail returns the correct user
test('find user by email in userController', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");
    let user2 = new User(5678, "Ana", "ana@generation.org");

    userController.add(user1);
    userController.add(user2);

    expect(userController.findByEmail("santiago@generation.org")).toBe(user1);
    expect(userController.findByEmail("ana@generation.org")).toBe(user2);
});

// Adding a test to check if findByEmail returns undefined for a non-existent email
test('find user by non-existent email in userController', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user1);

    expect(userController.findByEmail("nonexistent@generation.org")).toBeUndefined();
});

// Adding a test to check if findById returns the correct user
test('find user by id in userController', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");
    let user2 = new User(5678, "Ana", "ana@generation.org");

    userController.add(user1);
    userController.add(user2);

    expect(userController.findById(1234)).toBe(user1);
    expect(userController.findById(5678)).toBe(user2);
});

// Adding a test to check if findById returns undefined for a non-existent id
test('find user by non-existent id in userController', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");

    userController.add(user1);

    expect(userController.findById(5678)).toBeUndefined();
});