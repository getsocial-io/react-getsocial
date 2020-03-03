module.exports = function(version, site_id) {
  if (document.querySelector("script[src*='api.at.getsocial.io'][src*='" + site_id + "'][src*='/gs_async.js']") || window.GSvars) {
    console.warn("react-getsocial: GetSocial lib already included");
    return;
  }

  var elem = document.createElement("script");
  elem.type = "text/javascript";
  elem.async = true;
  elem.src = "https://api.at.getsocial.io/get/" + version + "/" + site_id + "/gs_async.js";

  document.head.appendChild(elem);
};
