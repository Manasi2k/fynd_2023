var alert=require('alert')
function init()
{
    var name='Incorrect Password !'; //name is local variable created by init
    function displayName(){ //displayName() is inner function
        alert(name);
        //use variable declared in parent function,body of the child function
    }
    displayName();
}
init(); 