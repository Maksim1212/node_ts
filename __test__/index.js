process.env.NODE_ENV = 'test';
// ***************************
// * CHECK ALL FILES IS EXISTS
// ***************************
require('./tests/Exists.files.test');

// **********
// * SERVICES
// **********
require('./tests/Post.service.test');

// **************************
// * CONTROLLERS (ROUTES)
// ************************** 
require('./tests/Post.test');
