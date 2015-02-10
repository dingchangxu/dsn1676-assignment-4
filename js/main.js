var blueberries = {
    kind: "vaccinium corymbosum",
    growsOnShrub: true,
    energy: "240 kj",
    carbohydrates: "14.49 g",
    protein: "0.74 g",
};

var grapes = {
    kind: "vitis vinifera",
    growsOnShrub: false,
    energy: "288 kj",
    carbohydrates: "18.1 g",
    protein: "0.72 g",
 
};

var redcurrant = {
    kind: "ribes rubrum",
    growsOnShrub: true,
    energy: "234 kj",
    carbohydrates: "13.8 g",
    protein: "1.4 g",
};

var dions2 = [blueberries, grapes, redcurrant];

dions2.forEach(function (item) {
    document.write("<dl>");
    
    document.write("<dt>growsOnShrub:</dt>");
    document.write("<dd>" + item.growsOnShrub + "</dd>");
    
    document.write("<dt>energy:</dt>");
    document.write("<dd>" + item.energy + "</dd>");
    
    document.write("<dt>carbohydrates:</dt>");
    document.write("<dd>" + item.carbohydrates + "</dd>");
    
    document.write("<dt>protein:</dt>");
    document.write("<dd>" + item.protein + "</dd>");
    
    document.write("<dl>");
}); 