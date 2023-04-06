function missingletter(str){
  let output = [];
  for(let i = 0; i< str.length-1 ; i++){
    let codeone = str.charCodeAt(i);
    let codetwo = str.charCodeAt(i+1);
   //  console.log(codeone,"codeone.")
   // console.log(codetwo,"codetwo..")
    let x = codetwo - codeone;
   // console.log(x,"x..")
   // let y = ""
    if(x !== 1){
       console.log(x,"x22..")
     // y = String.fromCharCode(codeone+1);
     //  console.log(y,"y..")
      output.push(String.fromCharCode(codeone+1));
    } 
  
   // console.log(str[i],str.charCodeAt(i),"ln4")
  }

    return output
}

console.log(missingletter('abef'))

const lettermissed = (str) => {
  return str.split('').reduce((acc,c,i,arr) => (
    !arr[i+1] 
      ? acc 
      : arr[i+1].charCodeAt(0) - c.charCodeAt(0) !== 1 
      ? String.fromCharCode(c.charCodeAt(0) + 1)
      : acc
      
  ),undefined)
}

console.log(lettermissed("abd"))