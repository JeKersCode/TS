function concat(first:string, second:string){
    console.log(first + second);
}
concat('Hello ', 'World');

type TsArrType = (number | string)

interface MyFirstInterface {
    howIDoIt: string;
    simeArray: TsArrType[];
    withData: {};
}

const myHometask : MyFirstInterface = {
    howIDoIt: 'I Do It Wel',
    simeArray: ['string one', 'string two', 42],
    withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
}


const tsArr : MyArray<number> = [1, 2, 3];
console.log(tsArr.reduce((prev, curr)  => prev + curr));