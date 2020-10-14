let { handler } = require('../../../src/example/only-lambda-post');

let event = {
    body: {
        name: 'oscar',
        lastname: 'munoz'
    }
}

test('should to be the same response', async () => {
    
    let result = await handler(event);
    let expectResult = {
        statusCode: 200,
        body: event.body
    }

    expect(result).toEqual(expectResult);

})
