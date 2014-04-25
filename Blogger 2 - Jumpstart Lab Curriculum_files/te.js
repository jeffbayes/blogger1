(function(){
  if (Swiftype && Swiftype.disableEmbedTracking === true) {
    return;
  }

  var i = document.createElement('iframe'),
    params = '#host=' + encodeURIComponent(window.location.hostname);
  i.style.display = 'none';
  i.onload = function() { i.parentNode.removeChild(i); };
  i.src = "//s.swiftypecdn.com/te" + params;
  document.body.appendChild(i);
})();
