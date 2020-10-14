const { GitHub } = require('../common-resources-layer');

exports.handler = async (event) => {
    // All log statements are written to CloudWatch
    console.info('received:', event);   
   
    let user = event.pathParameters.user;

    let gitUser = await GitHub(user);
    console.info('****************', process.env.STAGE);

    const item = {
        description: 'only a lambda without api gateway',
        datos: gitUser
    };
    
    const response = {
      statusCode: 200,
      body: JSON.stringify(item)
    };
   
    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
  }