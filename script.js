// 'use strict';

// // console.log(document.querySelector('.message').textContent);

// // ////changing the content in html
// // document.querySelector('.message').textContent = 'Correct Number';
// // console.log(document.querySelector('.message').textContent );

// // document.querySelector('.number').textContent = '13';

// // document.querySelector('.score').textContent = 10;

// // document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);




// ////IMPLIMENTING THE GAME LOGIC!----////

// ////Math.random() function in JavaScript generates a random floating-point number in the range [0, 1), which means it can produce a value greater than or equal to 0 but strictly less than 1.
// ////Truncation refers to the process of removing the decimal part of a number, leaving only the integer part. It essentially discards everything after the decimal point, regardless of whether the decimal part is positive or negative.
// let secretNumber = Math.trunc(Math.random()*20)+1;
// // document.querySelector('.number').textContent = secretNumber;
// let score = 20;

// document.querySelector('.check').addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value);
//     // console.log(typeof guess);
//     if(!guess){
//         document.querySelector('.message').textContent = 'No Number';}
//         else if(guess === secretNumber){
//             document.querySelector('.message').textContent = 'Correct Number';
//             document.querySelector('body').style.backgroundColor = '#60b347';
//             document.querySelector('.number').style.width =  '30rem';
//             document.querySelector('.number').textContent = secretNumber;
//         }
//         else if(guess > secretNumber){
//         if(score>1){
//                 document.querySelector('.message').textContent = 'Your number is higher';
//                 score--; 
//                  ////PRE INCREMENT POST INCREMENT PRE DECREMENT POST DECREMENT
//                 document.querySelector('.score').textContent = score;
//                 } else{
//                 document.querySelector('.message').textContent = 'You lost!';
//                 document.querySelector('.score').textContent = '0';
//                 }
                    
//         }
       
//         else if(guess < secretNumber){
//         if(score>1){
//                 document.querySelector('.message').textContent = 'Your number is lower';
//                 score--;
//                 document.querySelector('.score').textContent = score;
//                 } else{
//                 document.querySelector('.message').textContent = 'You lost!';
//                 document.querySelector('.score').textContent = '0';
//                 }
//         }
// }) ;


//  ////We selected the button using querySelector and then we use the addEventListener method on that element to attach an event handler and that event handler is this function. 
//     ////we use an event listener so that our code reacts to something that happens in the DOM. And for that,we need to use an event listener. 
//     ////Now, an event is something that happens on the page.For example, a mouse click,or a mouse moving, or a key press,or many other events. Then, with an event listener, we can wait for a certain event to happen,and then react to it.
//     ////the first argument is the paranthesis of addEventListener is the type of event(For example, a mouse click,or a mouse moving, or a key press,or many other events).
//     ////the second argument tells the event listener what to do. So basically, we need to specify the reaction to the Click event and we do that by defining a function. And that function will contain the code that should be executed whenever this click event happens on this Check button.
    
// //////////----Coding Challenge #1----//////////

//     document.querySelector('.again').addEventListener('click', function(){
//         secretNumber = Math.trunc(Math.random()*20)+1; 
//         score = 20;
//         ////the already assigned secretNumber and score will be reading the value of secret number and score will be read from the above let variables and.
//         ////.value is only used for any input value.
//         document.querySelector('.message').textContent = 'Start guessing...';
//         document.querySelector('.number').textContent = '?';
//         document.querySelector('.guess').value =  '';
//         document.querySelector('.score').textContent = score;
//         document.querySelector('body').style.backgroundColor = '#222';
//         document.querySelector('.number').style.width =  '15rem';
//     } )
   
