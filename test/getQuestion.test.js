const controllers = require('../controllers/index');

test('Location should be Geography and Difficulty is Hard', () => {
    expect.assertions(2);
    return controllers.getQuestions('geography', 'hard').then(data => {
        expect(data[1].category).toEqual('Geography');
        expect(data[1].difficulty).toEqual('hard');
    });
});
