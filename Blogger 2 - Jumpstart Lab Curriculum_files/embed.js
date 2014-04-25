var Swiftype = window.Swiftype || {};
Swiftype.root_url = Swiftype.root_url || "//api.swiftype.com";
if (typeof Swiftype.renderStyle === 'undefined') {
  Swiftype.renderStyle = 'nocode';
}

Swiftype.isMobile = function() {
  var ua = window.navigator.userAgent;
  if(/iPhone|iPod/.test(ua) && ua.indexOf("AppleWebKit") > -1 ) {
    return true;
  }
  if (/Android/.test(ua) && /Mobile/i.test(ua) && ua.indexOf("AppleWebKit") > -1 ) {
    return true;
  }
  return false;
};

Swiftype.loadScript = function(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = url;

  var entry = document.getElementsByTagName('script')[0];
  entry.parentNode.insertBefore(script, entry);

  if (script.addEventListener) {
    script.addEventListener('load', callback, false);
  } else {
    script.attachEvent('onreadystatechange', function() {
      if (/complete|loaded/.test(script.readyState))
        callback();
    });
  }
};

Swiftype.loadStylesheet = function(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(link);
};

Swiftype.loadSupportingFiles = function(callback) {
  if (Swiftype.renderStyle === false) {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_no_render-1dd9e05ba8d0b3ce2f489e18082babbc.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype-9261e170d74ef8347d54dc5ba07098ad.css");
  } else if (Swiftype.isMobile()) {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_nocode-123d2407c5568e418a26bf5d0372de7e.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype_nocode-c3886df84f1fbe6c1177c96bbf4a40ac.css");
  } else if (Swiftype.renderStyle === 'inline' || Swiftype.renderStyle === 'new_page') {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_onpage-9399814db401306e44d843e95222a677.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype-9261e170d74ef8347d54dc5ba07098ad.css");
  } else {
    Swiftype.loadScript("//s.swiftypecdn.com/assets/swiftype_nocode-123d2407c5568e418a26bf5d0372de7e.js", callback);
    Swiftype.loadStylesheet("//s.swiftypecdn.com/assets/swiftype_nocode-c3886df84f1fbe6c1177c96bbf4a40ac.css");
  }

  Swiftype.loadScript("//s.swiftypecdn.com/te.js", function(){});
};

var Swiftype = (function(window, undefined) {
   Swiftype.loadSupportingFiles(function(){});
   return Swiftype;
})(window);
