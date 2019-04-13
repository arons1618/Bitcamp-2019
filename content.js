// content.js

window.onload = function() {
	var node = document.getElementById('buyNow')
  node.parentElement.removeChild(node)

}

document.getElementById("addToCart_feature_div").onclick = function () {
      alert("Are you sure?");
};
