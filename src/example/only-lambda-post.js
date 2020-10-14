exports.handler = async (event) => {
    console.log('received:', event);

    let body = event.body;

    const response = {
        statusCode: 200,
        body
    }

    return response;

}