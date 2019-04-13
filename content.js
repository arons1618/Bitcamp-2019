// content.js

if(document.getElementById('buyNow') != null) {
  document.getElementById('buyNow').onclick = function() {
    var node = document.getElementById('buyNow')
    node.parentElement.removeChild(node)
  }
}


if(document.getElementById('addToCart_feature_div') != null) {
  document.getElementById('addToCart_feature_div').onclick = function() {
      return confirm("Are you sure?")
  }
}

if(document.getElementById('sc-buy-box') != null) {
  document.getElementById('sc-buy-box').onclick = function() {
    window.open("https://www.mentalhealthamerica.net/conditions/risky-business-compulsive-buying")
  }
}

if(document.getElementById('huc-v2-subcart-buttons-wrapper') != null) {
  document.getElementById('huc-v2-subcart-buttons-wrapper').onclick = function() {
    window.open("https://www.mentalhealthamerica.net/conditions/risky-business-compulsive-buying")
  }
}
