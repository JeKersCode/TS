function concat(first, second) {
    console.log(first + second);
}
concat('Hello ', 'World');
var myHometask = {
    howIDoIt: 'I Do It Wel',
    simeArray: ['string one', 'string two', 42],
    withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }]
};
var tsArr = [1, 2, 3];
console.log(tsArr.reduce(function (prev, curr) { return prev + curr; }));