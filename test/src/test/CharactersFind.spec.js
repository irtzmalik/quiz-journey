 let CharactersDAO = require('../main/daos/CharactersDAO');


jest.mock('../main/models/characters', () => () => {
    const SequelizeMock = require("sequelize-mock");
    const dbMock = new SequelizeMock();
//   return dbMock.define('characters',  {
//     id: 1,
//     points: 10,
//     user_id: 1
  
//   })
    var a= 0;
    var  Characters = dbMock.define('characters');
    Characters.$queueResult([
    Characters.build({
        id: 1,
        points: 10,
        user_id: 1
    }),
    Characters.build({
        id: 2,
        points: 100,
        user_id: 4
    }),
    Characters.build({
        id: 3,
        points: 60,
        user_id: 7
    }),
    Characters.build({
        id: 4,
        points: 70,
        user_id: 9
    })
    ]);


return  Characters;

});

// Characters.findAll().then(function (characters) {
//     console.log("character length", characters.length);
//    // return jest.fn(() => characters.length); 
//    characters.length;
//   //  return a;
    
// });


describe("Get Location Mock test", () => {  
  it("It should get 4 as length in mock database", async () => {
    const chr = await CharactersDAO.getCharacters();
    expect(chr.length).toEqual(4);
  })
})
  