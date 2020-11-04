const sort = (arr)=>{
    if(arr.length <= 1){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    return merge(sort(left),sort(right));
}

const merge = (left,right) =>{
    let i=0,j=0;
    let result = [];
    while(i < left.length &&  j < right.length){
        if(left[i] <= right[j]){
            result.push(left[i]);
            i++;
        }else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));    
}


const main = ()=>{
    let arr = [3,5,2,6,9,8];
    console.log(arr);
    arr = sort(arr);
    console.log(arr); 
}

main();



//divide whole array into two halves.
//concat into one
















// divid whole array 
// concat using sorts.