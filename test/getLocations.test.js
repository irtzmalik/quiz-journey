const controllers = require('../controllers/index');

test('The location in the Database should be a string', () => {
    expect.assertions(1);
    return controllers.getLocations(1).then(data => {
        expect(typeof 'data[0].name').toBe('string');
    });
})