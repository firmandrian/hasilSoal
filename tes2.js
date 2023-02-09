// function countCastles(heights) {
//     let castleCount = 1;
//     let direction = 0;
//     for (let i = 1; i < heights.length; i++) {
//         if (direction === 0) {
//             if (heights[i] > heights[i - 1]) {
//                 direction = 1;
//                 castleCount++;
//             } else if (heights[i] < heights[i - 1]) {
//                 direction = -1;
//             }
//         } else if (direction === 1) {
//             if (heights[i] < heights[i - 1]) {
//                 direction = -1;
//                 castleCount++;
//             }
//         } else if (direction === -1) {
//             if (heights[i] > heights[i - 1]) {
//                 direction = 1;
//                 castleCount++;
//             }
//         }
//     }
//     return castleCount;
// }

// let sampleInput = [3, -1, -5, -5, 2, 4, 7, 5, 1, 1, 1, 4];
// console.log(countCastles(sampleInput));


function countCastles(array) {
    let castleCount = 0;
    
    for (let i = 1; i < array.length; i++) {
      let inc = false;
      let dec = false;
      
      while (i < array.length && array[i] > array[i - 1]) {
        inc = true;
        i++;
      }
      
      if (inc) {
        castleCount++;
      }
      
      while (i < array.length && array[i] < array[i - 1]) {
        dec = true;
        i++;
      }
      
      if (dec) {
        castleCount++;
      }
    }
    
    return castleCount + (array.length > 0 ? 1 : 0);
  }
  
  const heights = [3, -1, -5, -5, 2, 4, 7, 5, 1, 1, 1, 4];
  const result = countCastles(heights);
  console.log(result);
  

