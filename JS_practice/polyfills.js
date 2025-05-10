let arr = [1,2,3,4,5];

// Polyfill Of For Each Loop 
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(cb){
        for(let i = 0; i < this.length; i++){
            cb(this[i],i);
        }
    }
}

arr.myForEach((value,index) => {
    console.log(`At Index ${index} Value: ${value}`)
});

// Polyfill of Map Function

if(!Array.prototype.myMap){
     Array.prototype.myMap = function(cb){
        let result = [];
        for(let i = 0; i < this.length; i++){
            const value = cb(this[i],i);
            result.push(value);
        }
        return result;
     }
}

const newArr = arr.myMap((e) => e * 3);
console.log(newArr);


// Polyfill for reduce function

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(cb,initialValue = undefined){

        let acc = initialValue || this[0];
        const startIndex = initialValue ? 0 : 1;
            for(let i = startIndex; i < this.length; i++){
                acc = cb(acc,this[i]);
            }
            return acc;
        }

}

const myRes = arr.myReduce(
    (valueTillnow, currentValue) => valueTillnow + currentValue
);
console.log({myRes});