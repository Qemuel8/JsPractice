function convertToRoman(num) {
    let arr = [];
    while(num!= 0)
    {
      if(num%1000>=0 && num>=1000)
   {
     arr.push("M");
     num = num-1000;
     continue;
   }else if(num%900>=0 && num>=900)
   {
     num = num-900;
     arr.push("CM");
     continue;
   }else if(num%500>=0 && num>=500)
   {
     num = num-500;
     arr.push("D");
     continue;
   }else if(num%400>=0 && num>=400)
   {
     num = num-400;
     arr.push("CD");
     continue;
   }
   else if(num%100>=0 && num>=100)
   {
     num = num-100;
     arr.push("C");
     continue;
   } 
   else if(num%90>=0 && num>=90)
   {
     num = num-90;
     arr.push("XC");
     continue;
   } else if(num%50>=0 && num>=50)
   {
     num = num-50;
     arr.push("L");
     continue;
   } else if(num%40>=0 && num>=40)
   {
     num = num-40;
     arr.push("XL");
     continue;
   } else if(num%10>=0 && num>=10)
   {
     num = num-10;
     arr.push("X");
     continue;
   } else if(num%9>=0 && num>=9)
   {
     num = num-9;
     arr.push("IX");
     continue;
   } else if(num%5>=0 && num>=5)
   {
     num = num-5;
     arr.push("V");
     continue;
   }
   else if(num%4>=0 && num>=4)
   {
     num = num-4;
     arr.push("IV");
     continue;
   }else if(num>=1)
   {
     num = num-1;
     arr.push("I");
     continue;
   }
  
   }
   arr = arr.join("");
   console.log(arr)
   return arr;
  }
  convertToRoman(1023);