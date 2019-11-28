// Initializes the `contact` service on path `/contacts`
const { Contact } = require('./contact.class');
const hooks = require('./contact.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/contacts', new Contact(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('contacts');

  service.hooks(hooks);
};
