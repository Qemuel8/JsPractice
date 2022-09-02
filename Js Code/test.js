function steamrollArray(arr) {
  
    return arr.reduce(flat,[]);
  }
  
  function flat(arr,item) {
    
  if(Array.isArray(item))
  {
    arr.push(...steamrollArray(item));
  }else
  {
    arr.push(item);
    console.log(arr)
    return arr;
  }

    
    
    }
    steamrollArray([1, [2], [3, [[4]]]]);