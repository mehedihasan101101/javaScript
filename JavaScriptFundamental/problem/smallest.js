var heights = [199,190,180,178,20000,195,208,158,153,197];
var height = tallest(heights);
console.log(height);

function tallest(height){
var compare = heights[0];
for(i=0;i<heights.length;i++){
var index = i;
var element = heights[i];
if (element<compare){
    compare = element;
}
}
return compare;
}
