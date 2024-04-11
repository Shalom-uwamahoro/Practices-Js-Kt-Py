
// Kotlin Assessment 3

// Q1
const passingMark= (score) =>{
    if(score>=60){
        console.log('passed the exam')
    }
    else{console.log('failed the exam')}
}

passingMark(70);

// Q2
function costOfShipping(weight){
 if(weight <=2)
    {
    console.log(5)}
 else if(weight >2 && weight<=5){
 console.log(10)
 }
 else if(weight>5){console.log(15)};

};

costOfShipping(4);

// Q6

const stringPalindrome = (str) =>{
 let newStr= str.toLowerCase().split('').reverse().join('')

    if(newStr===str.toLowerCase()){
        console.log('it is palindrome')
    }
    else{console.log('it is not palindrome')}
};
stringPalindrome('DAD');
stringPalindrome('Pop');
stringPalindrome('Papa');

// Q3

// function strCount(str){
//     let newString=str.split('').count().
//     console.log(newString);
// };

// strCount('Shalom');

