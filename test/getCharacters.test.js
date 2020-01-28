const controllers = require('../controllers/index');

test('Charater name should be a string', () => {
    expect.assertions(1);
    return controllers.getCharacters(1).then(data => {
        expect(typeof 'data[0].name').toBe('string');
    });
})

test('Points should not be Null', () => {
    expect.assertions(1);
    return controllers.getCharacters(1).then(data => {
        expect(data[0].points).not.toBeNull();
    });
})
