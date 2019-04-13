// content.js

if(document.getElementById('buyNow') != null) {
  document.getElementById('buyNow').onclick = function() {
    var node = document.getElementById('buyNow')
    node.parentElement.removeChild(node)
  }
}

if(document.getElementById('addToCart_feature_div') != null) {
  document.getElementById('addToCart_feature_div').onclick = function() {
    return confirm('are you sure?');
  }
}
