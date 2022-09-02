function rot13(str) {
    str = str.split("");
    let myRegex = /[a-zA-Z]/
    for(let i = 0; i<str.length;i++)
    {
      if(myRegex.test(str[i]))
      {
  switch(str[i])
    {
      case "A":
      str[i] = "N"
      break;
      case "B":
      str[i] = "O"
      break;
      case "C":
      str[i] = "P"
      break;
      case "D":
      str[i] = "Q"
      break;
      case "E":
      str[i] = "R"
      break;
      case "F":
      str[i] = "S"
      break;
      case "G":
      str[i] = "T"
      break;
      case "H":
      str[i] = "U"
      break;
      case "I":
      str[i] = "V"
      break;
      case "J":
      str[i] = "W"
      break;
      case "K":
      str[i] = "X"
      break;
      case "L":
      str[i] = "Y"
      break;
      case "M":
      str[i] = "Z"
      break;
      //x
      case "N":
      str[i] = "A"
      break;
      case "O":
      str[i] = "B"
      break;
      case "P":
      str[i] = "C"
      break;
      case "Q":
      str[i] = "D"
      break;
      case "R":
      str[i] = "E"
      break;
      case "S":
      str[i] = "F"
      break;
      case "T":
      str[i] = "G"
      break;
      case "U":
      str[i] = "H"
      break;
      case "V":
      str[i] = "I"
      break;
      case "W":
      str[i] = "J"
      break;
      case "X":
      str[i] = "K"
      break;
      case "Y":
      str[i] = "L"
      break;
      case "Z":
      str[i] = "M"
      break;
        }
      }
    }
    str = str.join("");
    console.log(str)
    return str;
  }
  
  rot13("URYYB");