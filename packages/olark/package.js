Package.describe({
  name: 'tkornblit:olark',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Olark Live Chat Service Meteor Package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tkornblit/meteor-olark/',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('olark.js');
});
