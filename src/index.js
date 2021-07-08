const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  // "**********": ",",
};

function decode(expr) {
  let result = [];

  let arrExpr = expr.match(/.{1,10}/g);
  for (let i = 0; i < arrExpr.length; i++) {
    const element = arrExpr[i];
    debugger
    if (element === "**********") {
      result.push(" ");
      continue;
    }
    let el = element.replace(/0{2,}/, "");
    result.push(MORSE_TABLE[el.replace(/10/g, ".").replace(/11/g, "-")]);
  }
  return result.join("");
}

module.exports = {
  decode
};



// let arrMorze = [];
// let result = [];
// function decode(expr) {
//   let arrMorze = morzeCoder(expr);
//   let arrMorzeReplace = [];
//   for (let i = 0; i < arrMorze.length; i++) {
//     const element = arrMorze[i];
//     arrMorzeReplace.push(element.split(""));
//   }
//   for (let i = 0; i < arrMorzeReplace.length; i++) {
//     const element = arrMorzeReplace[i];
//     for (let j = 0; j < element.length; j++) {
//       if (element[j] == "-") {
//         element[j] = "11";
//       } else if (element[j] == ".") {
//         element[j] = "10";
//       }
//     }
//   }

//   for (let i = 0; i < arrMorzeReplace.length; i++) {
//     const element = arrMorzeReplace[i];

//     let arr = [];
//     let str = element.join("");
//     if (str.length < 10) {
//       debugger;
//       arr = str.split("");
//       let addzero = 10 - arr.length;
//       while (addzero != 0) {
//         arr.unshift("0");
//         addzero--;
//         if (arr.length == 10) {
//           result.push(arr);
//         }
//       }
//     } else if (str == "**********") {
//       result.push(str.split(""));
//     } else {
//       result.push(str);
//     }
//   }

//   return result.join("").replace(/[\s,]/g, "") == "" == Nstr;
// }
// function morzeCoder(expr) {
//   newexpr = expr.replace(/ /gi, ",");

//   let arrExpr = newexpr.split("");
//   for (let i = 0; i < arrExpr.length; i++) {
//     const element = arrExpr[i];
//     for (const key in MORSE_TABLE) {
//       if (MORSE_TABLE[key] == element) {
//         arrMorze.push(key);
//       }
//     }
//   }
//   return arrMorze;
// }


