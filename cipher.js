function movingShift(str, s) {
  let result = "";
  let n = s > 0 ? s : 26 + (s % 26);
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      result = result + String.fromCharCode(((c - 65 + n) % 26) + 65);
      if (s < 0) {
        s = s - 1;
      } else s = s + 1;
      n = s > 0 ? s % 26 : 26 + (s % 26);
    } else if (c >= 97 && c <= 122) {
      result = result + String.fromCharCode(((c - 97 + n) % 26) + 97);
      if (s < 0) {
        s = s - 1;
      } else s = s + 1;
      n = s > 0 ? s % 26 : 26 + (s % 26);
    } else {
      result = result + str.charAt(i);
      if (s < 0) {
        s = s - 1;
      } else s = s + 1;
      n = s > 0 ? s % 26 : 26 + (s % 26);
    }
  }
  //   console.log("Decoded string", result);
  if (str.length % 5 === 0) {
    let x = str.length / 5;
    return [
      result.substring(0, x),
      result.substring(x, x * 2),
      result.substring(x * 2, x * 3),
      result.substring(x * 3, x * 4),
      result.substring(x * 4, x * 5),
    ];
  } else {
    let len = str.length;
    let base = Math.floor(len / 5);
    let len_arr = [];
    let res_arr = [];
    let sum = 0;

    //   console.log(len,base+1);
    for (let i = 0; i < 4; i++) {
      len_arr.push(base);
      sum = sum + base;
    }
    //   console.log(len_arr);
    let diff = len - sum;
    if (diff > 0) {
      let i = 0;
      while (diff > 0 && i < 4) {
        len_arr[i]++;
        diff--;
        i++;
      }
    }
    len_arr.push(diff);
    //   console.log(len_arr);
    let startIndex = 0;
    for (let i = 0; i < 5; i++) {
      if (len_arr[i] > 0) {
        const part = result.substring(startIndex, startIndex + len_arr[i]);
        res_arr.push(part);
        startIndex += len_arr[i];
      } else {
        res_arr.push("");
      }
    }
    // console.log(res_arr);
    return res_arr;
  }
}
let s = "I should have known that you would have a perfect answer for me!!!";
shift = 1;
// movingShift(s, shift);
let output = movingShift(s, shift);
console.log(output);
