// content.js

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

window.onload = remove();
document.onmousemove = function (){setTimeout(remove())};
function remove(){
  if(document.getElementById('buyNow') != null) {
    var node = document.getElementById('buyNow')
	node.parentElement.removeChild(node)
  }

  if(document.getElementById('sims-fbt') != null) {
    node = document.getElementById('sims-fbt')
		node.parentElement.removeChild(node)
  }

  if(document.getElementById('promotions_feature_div') != null) {
    node = document.getElementById('promotions_feature_div')
    node.parentElement.removeChild(node)
  }

  if(document.getElementById('dpx-btf-hlcx-comparison_feature_div') != null) {
    node = document.getElementById('dpx-btf-hlcx-comparison_feature_div')
		node.parentElement.removeChild(node)
  }

  if(document.getElementById('sp_detail2') != null) {
    node = document.getElementById('sp_detail2')
    node.parentElement.removeChild(node)
  }

  if(document.getElementById('sims-consolidated-1_feature_div') != null) {
    node = document.getElementById('sims-consolidated-1_feature_div')
		node.parentElement.removeChild(node)
  }

  if(document.getElementById('sims-consolidated-2_feature_div')) {
    node = document.getElementById('sims-consolidated-2_feature_div')
		node.parentElement.removeChild(node)
  }

  if(document.getElementById('sims-consolidated-3_feature_div')) {
    node = document.getElementById('sims-consolidated-3_feature_div')
    node.parentElement.removeChild(node)
  }

  if(document.getElementById('sims-consolidated-4_feature_div')) {
    node = document.getElementById('sims-consolidated-4_feature_div')
		node.parentElement.removeChild(node)
  }

  if(document.getElementById('rhf')) {
    node = document.getElementById('rhf')
    node.parentElement.removeChild(node)
  }
}
