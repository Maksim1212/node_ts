process.env.NODE_ENV = 'test';
// ***************************
// * CHECK ALL FILES IS EXISTS
// ***************************
require('./tests/exists_files.test');

// **********
// * SERVICES
// **********
require('./tests/post_service.test');
require('./tests/сomment_service.test');

// **************************
// * CONTROLLERS (ROUTES)
// ************************** 
require('./tests/post.test')
