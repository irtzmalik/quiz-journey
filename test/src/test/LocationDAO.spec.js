let UserDAO = require('../main/daos/LocationDAO');

jest.mock('../main/models/location', () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  return dbMock.define('location',  {
    id: 1,
    name: 'Toronto',
    image: 'abc.jpeg',
    category: 1
  
  })
});


describe("Get Location Mock test", () => {  
  it("It should get Toronto as name in mock database", async () => {
    const location = await UserDAO.getOneLocation();
    expect(location.name).toEqual('Toronto');
  })
})
  