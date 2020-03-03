var getsocial = require('./src/react-getsocial');

module.exports = {
  getsocial: {
    include: function include(site_id) {
      getsocial("v1", site_id);
    }
  }
};
