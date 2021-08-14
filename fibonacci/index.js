function fibonacci(position){
    if(typeof(position) !== 'number' || position % 1 !== 0) return 0;
    if(position < 2) return 0;
    if(position == 2) return 1;

    let arr = [0, 1];
    for(let i=2; i<position; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[position-1];
}

module.exports = fibonacci;

