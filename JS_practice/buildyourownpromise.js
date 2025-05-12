// class MyPromise{
//     constructor(executorFn){

//         this._state = 'pending' // '_' denotes our internal functions
//         this._successCallbacks = []; // defining array as then can be called many times
//         this._errorCallbacks = [];
//         this._finallyCallbacks = [];
//         this.value = [];
//         executorFn(this.resolverFunction.bind(this),this.rejectorFunction.bind(this)) // Binding becauze while running we will get error as context is getting loosed so bind the current context to it

//     }

//     then(cb){
//         if(this._state == 'fulfilled'){
//             cb(this.value);
//             return this;
//         }
//         this._successCallbacks.push(cb);
//         // returning own object for chaining & we dont want to end the program there
//         return this;
//     }

//     catch(cb){

//         if(this._state == 'rejected'){
//             cb(this.value);
//             return this;
//         }
//         this._errorCallbacks.push(cb);

//         return this;
//     }

//     finally(cb){
//         if(this._state !== 'pending'){
//             cb();
//         }
//         this._finallyCallbacks.push(cb);
//     }

//     resolverFunction(value){
//         this._state = 'fulfilled';
//         this._successCallbacks.forEach((cb)=>cb(value));
//         this._finallyCallbacks.forEach((cb)=>cb());
//     }

//     rejectorFunction(error){
//         this._state = 'rejected';
//         this._errorCallbacks.forEach((cb)=>cb(error));
//         this._finallyCallbacks.forEach((cb)=>cb());
//     }
// }


class MyPromise{
    constructor(executorfunction){
        this._state = 'pending';
        this._successCallbacks = [];
        this._errorCallbacks = [];
        this._finallyCallbacks = [];
        this.value = [];
        executorfunction(this.resolverFunction.bind(this), this.rejectorFunction.bind(this));
    }

    then(cb){
        if(this._state == 'fulfilled'){
            cb(this.value);
            return this;
        }

        this._successCallbacks.push(cb);
        return this;
    }

    catch(cb){
        if(this._state == 'rejected'){
            cb(this.value);
            return this;
        }

        this._errorCallbacks.push(cb);
        return this;
    }

    finally(cb){
        if(this._state !== 'pending'){
            cb();
        }
        this._finallyCallbacks.push(cb);
    }

    resolverFunction(value){
        this._state = 'fulfilled',
        this._successCallbacks.forEach((cb)=> cb(value));
        this._finallyCallbacks.forEach((cb) => cb());
    }

    rejectorFunction(value){
        this._state = 'rejected',
        this._errorCallbacks.forEach((cb)=> cb(value));
        this._finallyCallbacks.forEach((cb) => cb());
    }
}





function wait(seconds){
    const p = new MyPromise((resolve,reject) => {
        setTimeout(()=>resolve('kinggg'),seconds * 1000);
    })
    return p;
}

wait(5)
    .then((e) => console.log(`Promise Resolved Afted 5 Seconds`,e))
    .catch((e) => console.log(`Promise Rejected Afted 5 Seconds`,e))
    .finally(() => console.log(`Apun To Hr Barr Chalega`))