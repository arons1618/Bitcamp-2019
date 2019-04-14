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

	if(document.getElementById('quickPromoBucketContent') != null) {
		node = document.getElementById('quickPromoBucketContent')
		node.parentElement.removeChild(node)
	}
  if(document.getElementById('promotions_feature_div') != null) {
    node = document.getElementById('promotions_feature_div')
    node.parentElement.removeChild(node)
  }

	if(document.getElementById('cart-item-recs') != null) {
		node = document.getElementById('cart-item-recs')
		node.parentElement.removeChild(node)
	}

	if(document.getElementById('cart-recs-carousel') != null) {
		node = document.getElementById('cart-recs-carousel')
		node.parentElement.removeChild(node)
	}

	if(document.getElementById('huc-first-upsell-row') != null) {
		node = document.getElementById('huc-first-upsell-row')
		node.parentElement.removeChild(node)
	}

  if(document.getElementById('dpx-btf-hlcx-comparison_feature_div') != null) {
    node = document.getElementById('dpx-btf-hlcx-comparison_feature_div')
		node.parentElement.removeChild(node)
  }

	if(document.getElementById('p13n-m-desktop-dp-sims_purchase-similarities-sims-feature-3') != null) {
		node = document.getElementById('p13n-m-desktop-dp-sims_purchase-similarities-sims-feature-3')
		node.parentElement.removeChild(node)
	}

	if(document.getElementById('desktop-dp-sims_session-similarities-sims-feature') != null) {
    node = document.getElementById('desktop-dp-sims_session-similarities-sims-feature')
		node.parentElement.removeChild(node)
  }

	if(document.getElementById('desktop-dp-sims_purchase-similarities-sims-feature') != null) {
    node = document.getElementById('desktop-dp-sims_purchase-similarities-sims-feature')
		node.parentElement.removeChild(node)
  }

	if(document.getElementById('HLCXComparisonWidget_feature_div') != null) {
    node = document.getElementById('HLCXComparisonWidget_feature_div')
    node.parentElement.removeChild(node)
  }

	if(document.getElementById('sp_detail') != null) {
    node = document.getElementById('sp_detail')
    node.parentElement.removeChild(node)
  }

  if(document.getElementById('sp_detail2') != null) {
    node = document.getElementById('sp_detail2')
    node.parentElement.removeChild(node)
  }

	if(document.getElementById('view_to_purchase-sims-feature') != null) {
		node = document.getElementById('view_to_purchase-sims-feature')
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

	var elements = document.getElementsByClassName('a-row a-spacing-small a-size-large huc-v2-upsell-title');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
	 elements = document.getElementsByClassName('a-row huc-v2-upsell-row');
	    while(elements.length > 0){
	        elements[0].parentNode.removeChild(elements[0]);
	    }

};
