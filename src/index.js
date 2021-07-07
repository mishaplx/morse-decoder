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
    "**********": ",",
  };
  
  let arrMorze = [];
  
  function decode(expr) {
    let arrMorze = morzeCoder(expr);
    let arrMorzeReplace = [];
    for (let i = 0; i < arrMorze.length; i++) {
      const element = arrMorze[i];
      arrMorzeReplace.push(element.split(""));
    }
    for (let i = 0; i < arrMorzeReplace.length; i++) {
      const element = arrMorzeReplace[i];
      for (let j = 0; j < element.length; j++) {
        if (element[j] == "-") {
          element[j] = "11";
        } else if (element[j] == ".") {
          element[j] = "10";
        }
      }
    }
  
    return arrMorzeReplace;
      // let arr = [];
      // let arr1 = [];
      // for (let i = 0; i < arrMorzeReplace.length; i++) {
      //   const element = arrMorzeReplace[i];
      //   for (let j = 0; j < element.length; j++) {
      //     if (element[j].length < 10) {
      //       let addzero = 10 - element[j].length;
      //       debugger;
      //       arr = element[j].split("");
      //       while (addzero != 0) {
      //         debugger;
      //         arr.push("0");
      //         addzero--;
      //         if (arr.length == 10) {
      //             debugger
      //           arr1.push(arr);
      //           break;
      //         }
      //       }
      //     }
      //   }
      // }
  }
  function morzeCoder(expr) {
    newexpr = expr.replace(/ /gi, ",");
  
    let arrExpr = newexpr.split("");
    for (let i = 0; i < arrExpr.length; i++) {
      const element = arrExpr[i];
      for (const key in MORSE_TABLE) {
        if (MORSE_TABLE[key] == element) {
          arrMorze.push(key);
        }
      }
    }
    return arrMorze;
  }
  
  console.log(decode("m e"));
  // module.exports = {
  //     decode
  // }
  