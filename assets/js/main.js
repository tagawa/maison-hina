(function() {
  "use strict";

  var lang = (navigator.language || navigator.userLanguage || "").toLowerCase();
  var dest = "/ja/";

  if (lang.indexOf("en") === 0) {
    dest = "/en/";
  }

  window.location.replace(dest);
})();
