const sort = (arr)=>{
    if(arr.length <= 1){
        return arr;
    }

    let left = [];
    let right = [];
    let result = [];

    let pivote = arr.pop();
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] < pivote){
            left.push(arr[i]);
        }else {
            right.push(arr[i]);
        }
    }

    return result.concat(sort(left),pivote,sort(right));

}



const main = ()=>{ 
    let arr = [3,5,2,6,9,8,1,4];  
    console.log(arr);
    arr = sort(arr);
    console.log(arr); 
}



main();


//  choose an pivote 
//  find the correct position of pivote
//  divide array from piote position like
//  the small elments from pivote is all are at left side.
//  and the big elements than pivote are at right side.
//  