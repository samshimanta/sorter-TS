console.log('welcome to typescript');


//sorter class 

// class Sorter {
//     colloction : number[];

//     constructor( collectedArray: number[] ){
//         this.colloction = collectedArray;
//     }
// }

// A better & equivalent approch of declaring class 

class Sorter {

    constructor(public collection: number[] ){ }

    // method for sorting
    sort(): void{
        const {length} = this.collection;

        for(let i=0; i<length;i++){
            for(let j=0;j<length -i-1;j++){
                if(this.collection[j] > this.collection[j+1]) {
                    const leftHandValue = this.collection[j];
                    this.collection[j] = this.collection[j+1];
                    this.collection[j+1] = leftHandValue;
                }
            }
        }

    }
}

const sorter = new Sorter([20,3,-6,5])
sorter.sort()
console.log(sorter.collection)
