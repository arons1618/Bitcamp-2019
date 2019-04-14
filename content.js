// content.js

var buyNow
    var priceVal
    var priceValBuyBox
    var priceWholeSpan
    var priceRow
    var priceRowFraction
    var priceRowSymbol
    var sizeBaseColor
    var cartTotal

if (document.getElementById('addToCart_feature_div') != null) {
    document.getElementById('addToCart_feature_div').onclick = function() {
        return confirm("Are you sure?")
    }
}
if (document.getElementById('sc-buy-box') != null) {
    document.getElementById('sc-buy-box').onclick = function() {
      
        window.open("https://www.mentalhealthamerica.net/conditions/risky-business-compulsive-buying")
      
    }
}


if (document.getElementById('huc-v2-subcart-buttons-wrapper') != null) {
    document.getElementById('huc-v2-subcart-buttons-wrapper').onclick = function() {
        
          window.open("https://www.mentalhealthamerica.net/conditions/risky-business-compulsive-buying")
        
    }
}

if(window.localStorage.getItem('demo3') === null) {
  window.localStorage.setItem('demo3', '1')
} else {
  value = Number(window.localStorage.getItem('demo3'))
  curr = window.location.href
  if(curr.indexOf("amazon") != -1) {
    window.localStorage.setItem('demo3', ++value)
    value = Number(window.localStorage.getItem('demo3'))
    if(value % 3 === 0) {
      alert("You are spending too much time on Amazon.com!!!")
    }
  }
}

window.onload = function() {
    remove()
    changePrices("Big Macs", 3.99)
}

document.onmousemove = function() {
    setTimeout(remove())
    setTimeout(changeSamePrices("Big Macs", 3.99), 5000)
};

function remove() {

    if (document.getElementById('buyNow') != null) {
        var node = document.getElementById('buyNow')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('sims-fbt') != null) {
        node = document.getElementById('sims-fbt')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('quickPromoBucketContent') != null) {
        node = document.getElementById('quickPromoBucketContent')
        node.parentElement.removeChild(node)
    }
    if (document.getElementById('promotions_feature_div') != null) {
        node = document.getElementById('promotions_feature_div')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('cart-item-recs') != null) {
        node = document.getElementById('cart-item-recs')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('cart-recs-carousel') != null) {
        node = document.getElementById('cart-recs-carousel')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('huc-first-upsell-row') != null) {
        node = document.getElementById('huc-first-upsell-row')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('dpx-btf-hlcx-comparison_feature_div') != null) {
        node = document.getElementById('dpx-btf-hlcx-comparison_feature_div')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('p13n-m-desktop-dp-sims_purchase-similarities-sims-feature-3') != null) {
        node = document.getElementById('p13n-m-desktop-dp-sims_purchase-similarities-sims-feature-3')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('desktop-dp-sims_session-similarities-sims-feature') != null) {
        node = document.getElementById('desktop-dp-sims_session-similarities-sims-feature')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('desktop-dp-sims_purchase-similarities-sims-feature') != null) {
        node = document.getElementById('desktop-dp-sims_purchase-similarities-sims-feature')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('HLCXComparisonWidget_feature_div') != null) {
        node = document.getElementById('HLCXComparisonWidget_feature_div')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('sp_detail') != null) {
        node = document.getElementById('sp_detail')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('sp_detail2') != null) {
        node = document.getElementById('sp_detail2')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('view_to_purchase-sims-feature') != null) {
        node = document.getElementById('view_to_purchase-sims-feature')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('sims-consolidated-1_feature_div') != null) {
        node = document.getElementById('sims-consolidated-1_feature_div')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('sims-consolidated-2_feature_div')) {
        node = document.getElementById('sims-consolidated-2_feature_div')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('sims-consolidated-3_feature_div')) {
        node = document.getElementById('sims-consolidated-3_feature_div')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('sims-consolidated-4_feature_div')) {
        node = document.getElementById('sims-consolidated-4_feature_div')
        node.parentElement.removeChild(node)
    }

    if (document.getElementById('rhf')) {
        node = document.getElementById('rhf')
        node.parentElement.removeChild(node)
    }

    if(document.getElementById('moreBuyingChoices_feature_div')) {
        node = document.getElementById('moreBuyingChoices_feature_div')
        node.parentElement.removeChild(node)
    }
    
    if(document.getElementById('desktop-1')) {
        node = document.getElementById('desktop-1')
        node.parentElement.removeChild(node)
    }

    var elements = document.getElementsByClassName('a-row a-spacing-small a-size-large huc-v2-upsell-title');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    elements = document.getElementsByClassName('a-row huc-v2-upsell-row');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }

}

function changePrices(itemReplace, itemPrice) {

    if (document.getElementById('buyNow') !== null) {
        buyNow = document.getElementById('buyNow')
        buyNow.parentElement.removeChild(buyNow)
    }

    // if (document.getElementById('priceblock_ourprice') !== null) {
    //     priceVal = document.getElementById('priceblock_ourprice')
    //     priceVal.innerText = Math.ceil(parseFloat(priceVal.innerText.substring(1)) / itemPrice).toString() + " " + itemReplace
    // }

    // if (document.getElementById('price_inside_buybox') !== null) {
    //     priceValBuyBox = document.getElementById('price_inside_buybox')
    //     priceValBuyBox.innerText = Math.ceil(parseFloat(priceValBuyBox.innerText.substring(1)) / itemPrice).toString() + " " + itemReplace
        
    // }

    convertDivToUnit(itemReplace, itemPrice, 'price_inside_buybox')
    convertDivToUnit(itemReplace, itemPrice, 'priceblock_ourprice')

    if (document.getElementsByClassName('a-row') !== null) {
        priceRow = document.getElementsByClassName('a-price-whole')
        priceRowFraction = document.getElementsByClassName('a-price-fraction')
        priceRowSymbol = document.getElementsByClassName('a-price-symbol')

        for (var i = 0; i < priceRow.length; i++) {

            priceRow[i].innerText = Math.ceil(parseFloat(priceRow[i].innerText.replace(',', '').toString()) / itemPrice).toString() + " " + itemReplace
            
            if (i < priceRowFraction.length) {
                priceRowFraction[i].innerText = ""
            }
            if (i < priceRowSymbol.length) {
                priceRowSymbol[i].innerText = ""
            }
        }
    }

    if (document.getElementsByClassName('a-size-base a-color-secondary') !== null) {
        sizeBaseColor = document.getElementsByClassName('a-size-base a-color-secondary')

        for (var i = 0; i < sizeBaseColor.length; i++) {
            sizeBaseColor[i].innerText = ""
        }
    }


    if (document.getElementsByClassName('ewc-subtotal-price ewc-price ewc-color-price') !== null) {
        cartTotal = document.getElementsByClassName('ewc-subtotal-price ewc-price ewc-color-price')
        // alert(cartTotal.length)
        for (var i = 0; i < cartTotal.length; i++) {
            cartTotal[i].innerText = Math.ceil(parseFloat(cartTotal[i].innerText.toString().replace('$', '')) / itemPrice).toString() + " " + itemReplace
        }
    }

   // convertSpanToUnit(itemReplace, itemPrice, 'ewc-subtotal-price ewc-price ewc-color-price')
   // if (document.getElementsByClassName('ewc-subtotal-price ewc-price ewc-color-price') !== null) {
   //      var arr = document.getElementsByClassName('ewc-subtotal-price ewc-price ewc-color-price')
   //      // alert(arr[0].innerText)
   //      for (var i = 0; i < arr.length; i++) {

   //          arr[i].innerText = Math.ceil(parseFloat(arr[i].innerText.replace(',', '').toString().replace('$', '')) / itemPrice).toString() + " " + itemReplace
   //      }
   //  }

    //convertSpanToUnit(itemReplace, itemPrice, 'ewc-subtotal-price ewc-price ewc-color-price')
    convertSpanToUnit(itemReplace, itemPrice, 'a-size-base a-color-price header-price a-text-norma')
    convertSpanToUnit(itemReplace, itemPrice, 'a-size-mini twisterSwatchPrice')
   // convertSpanToUnit(itemReplace, itemPrice, 'a-size-medium a-color-price sc-price sc-white-space-nowrap sc-product-price sc-price-sign a-text-bold')
    convertSpanToUnit(itemReplace, itemPrice, 'a-size-medium a-color-price sc-price sc-white-space-nowrap sc-price-sign')
    convertSpanToUnit(itemReplace, itemPrice, 'a-color-price abb-option-buying-pric)')

}

function convertSpanToUnit(unit, itemPrice, classIDPath) {
  if (document.getElementsByClassName(classIDPath) !== null) {
        var arr = document.getElementsByClassName(classIDPath)
        // alert(arr[0].innerText)
        for (var i = 0; i < arr.length; i++) {
          arr[i].innerText = Math.ceil(parseFloat(arr[i].innerText.replace(',', '').toString().replace('$', '')) / itemPrice).toString() + " " + unit
        }
    }
}

function convertDivToUnit(unit, itemPrice, classIDPath) {
  if (document.getElementById(classIDPath) !== null) {
    var elt = document.getElementById(classIDPath)
    //alert(elt.innerText)
        
        elt.innerText = Math.ceil(parseFloat(elt.innerText.replace(',', '').replace('$', '')) / itemPrice).toString() + " " + unit
        
    }
}

function changeSamePrices(itemReplace, itemPrice) {

    if (document.getElementById('buyNow') !== null) {
        buyNow = document.getElementById('buyNow')
        buyNow.parentElement.removeChild(buyNow)
    }

    // if (document.getElementById('priceblock_ourprice') !== null) {
    //     priceVal = document.getElementById('priceblock_ourprice')
    //     priceVal.innerText = Math.ceil(parseFloat(priceVal.innerText.substring(1)) / itemPrice).toString() + " " + itemReplace
    // }

    // if (document.getElementById('price_inside_buybox') !== null) {
    //     priceValBuyBox = document.getElementById('price_inside_buybox')
    //     priceValBuyBox.innerText = Math.ceil(parseFloat(priceValBuyBox.innerText.substring(1)) / itemPrice).toString() + " " + itemReplace
        
    // }

    convertDivToSameUnit(itemReplace, itemPrice, 'price_inside_buybox')
    convertDivToSameUnit(itemReplace, itemPrice, 'priceblock_ourprice')

    if (document.getElementsByClassName('a-row') !== null) {
        priceRow = document.getElementsByClassName('a-price-whole')
        priceRowFraction = document.getElementsByClassName('a-price-fraction')
        priceRowSymbol = document.getElementsByClassName('a-price-symbol')

        for (var i = 0; i < priceRow.length; i++) {

            priceRow[i].innerText = priceRow[i].innerText
            
            if (i < priceRowFraction.length) {
                priceRowFraction[i].innerText = priceRowFraction[i].innerText
            }
            if (i < priceRowSymbol.length) {
                priceRowSymbol[i].innerText = priceRowSymbol[i].innerText
            }
        }
    }

    if (document.getElementsByClassName('a-size-base a-color-secondary') !== null) {
        sizeBaseColor = document.getElementsByClassName('a-size-base a-color-secondary')

        for (var i = 0; i < sizeBaseColor.length; i++) {
            sizeBaseColor[i].innerText = ""
        }
    }


    if (typeof document.getElementsByClassName('ewc-subtotal-price ewc-price ewc-color-price') === 'undefined' && document.getElementsByClassName('ewc-subtotal-price ewc-price ewc-color-price').length > 0) {
        cartTotal = document.getElementsByClassName('ewc-subtotal-price ewc-price ewc-color-price')

        if (cartTotal[0].innerText.includes('$')){
          convertSpanToUnit(itemReplace, itemPrice, 'ewc-subtotal-price ewc-price ewc-color-price')
        } else {
          for (var i = 0; i < cartTotal.length; i++) {
              cartTotal[i].innerText = cartTotal[i].innerText
          } 
      }
    }

    convertSpanToSameUnit(itemReplace, itemPrice, 'a-size-base a-color-price header-price a-text-norma')
    convertSpanToSameUnit(itemReplace, itemPrice, 'a-size-mini twisterSwatchPrice')
    convertSpanToSameUnit(itemReplace, itemPrice, 'a-size-medium a-color-price sc-price sc-white-space-nowrap sc-price-sign')
    convertSpanToSameUnit(itemReplace, itemPrice, 'a-color-price abb-option-buying-pric)')

}



function convertSpanToSameUnit(unit, itemPrice, classIDPath) {
  if (document.getElementsByClassName(classIDPath) !== null) {
        var arr = document.getElementsByClassName(classIDPath)

        for (var i = 0; i < arr.length; i++) {

            arr[i].innerText = arr[i].innerText
        }
    }
}

function convertDivToUnit(unit, itemPrice, classIDPath) {
  if (document.getElementById(classIDPath) !== null) {
    var elt = document.getElementById(classIDPath)
    //alert(elt.innerText)
        
        elt.innerText = Math.ceil(parseFloat(elt.innerText.replace(',', '').replace('$', '')) / itemPrice).toString() + " " + unit
        
    }
}

function convertDivToSameUnit(unit, itemPrice, classIDPath) {
  if (document.getElementById(classIDPath) !== null) {
    var elt = document.getElementById(classIDPath)
    //alert(elt.innerText)
        
        if (elt.innerText.toString().includes('$')) {
          convertDivToUnit(unit, itemPrice, classIDPath)
        } else {
          elt.innerText = elt.innerText
        }
        
    }
}
