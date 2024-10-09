// global variables
var trainer = false;
var count = 0;

/* Main */
function main(){
    let again = false;
    trainer = confirm("Trainer mode?");
    playNim();
    again = confirm("Again?");
    if (again == true){
        main();
    }
    alert("Tahnk you for playing!");
}

/* playNim */
function playNim(){
    alert("You played Nim");
}

