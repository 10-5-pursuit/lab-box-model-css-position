function findBoxSize(width, height){
    let boxSize = [];
   let boxWidth = 2500 / width;
   boxSize.push(boxWidth);
   let boxHeight = 1240 / height;
   boxSize.push(boxHeight);
   return boxHeight

}

console.log(findBoxSize(300,740))
