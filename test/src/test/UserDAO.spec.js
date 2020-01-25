let UserDAO = require('../main/daos/UserDAO');

jest.mock('../main/models/users', () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  return dbMock.define('user',  {
    id: 1,
    name: 'Test',
    token: 'Test token',
  
  })
});


describe("Get User Mock test", () => {  
  it("It should get Test as name in mock database", async () => {
    const user = await UserDAO.getOneUser();
    expect(user.id).toEqual('Test');
  })
})


// describe("Get User by id Mock test", () => {  
//   it("It should get 1 as id in mock database", async () => {
//     const user1 = await UserDAO.getUserbyId(1);
//     expect(user1.id).toEqual(1);
//   })
// })
  