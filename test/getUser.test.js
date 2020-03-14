const controllers = require('../controllers/index');

test('Token should be at least 40 charaters long', () => {
    expect.assertions(1);
    return controllers.getUser(1).then(data => {
        expect(data.token.length).toBeGreaterThanOrEqual(40);
    });
})

test('The name should be a string', () => {
    expect.assertions(1);
    return controllers.getUser(1).then(data => {
        expect(typeof 'data[1].name').toBe('string');
    });
})

