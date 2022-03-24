/* eslint-disable */

window.onload = function() {
  //write your code here

  let pronoum = ["the", "our", "a"];
  let adj = ["great", "big", "small", "stronger"];
  let noum = ["player", "singer", "panther"];
  for (let pindex = 0; pindex < 3; pindex++) {
    for (let aindex = 0; aindex < 4; aindex++) {
      for (let nindex = 0; nindex < 3; nindex++) {
        console.log(pronoum[pindex] + adj[aindex] + noum[nindex] + ".com");
      }
    }
  }
};
