export default class Stack<Type>{
    private arr:Array<Type>;
   
    constructor(){
        this.arr = new Array<Type>();
    }

    public push(element:Type):void{
        this.arr.push(element);
    }

    public pop():Type|undefined{
        let len = this.arr.length;
        if(len != 0){
            let top = this.arr[len-1];
            this.arr.splice(len-1, 1);
            return top;
        }else{
            return undefined;
        }
       
    }

    public size():number{
        return this.arr.length;
    }
}


