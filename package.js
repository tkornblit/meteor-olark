Package.describe({
  summary: "Port of Olark chat."
});

Package.on_use(function (api) {

  api.add_files(['olark.js'], 'client');
  
  if (typeof api.export !== 'undefined') {
    api.export(['Olark'], 'client');
  }
});