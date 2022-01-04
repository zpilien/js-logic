
/*Conditional statements gives us the ability to check conditions and change the behavior of the program accordingly:
if 
else if
else 
*/

//1. Create a function named isRainy which takes a boolean parameter boo. This function will return the statement 'Bring an umbrella' if the boolean value is true.

function isRainy(boo){
  if(boo === true){
    return 'bring an umbrella';
  };
};
console.log(isRainy(true));
