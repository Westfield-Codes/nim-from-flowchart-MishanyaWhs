/* Nim Trainer by Mykhailo M

/** 
 * Main  * 
 * @param parameter1 Description of the first parameter. 
 * @return Description of the return value. 
 */

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
    alert("Thank you for playing!");
}

/** 
 * playNim  * 
 * @param parameter1 Description of the first parameter. 
 * @return Description of the return value. 
 */

/* playNim */
function playNim(){
    alert("You played Nim");
}

/** 
 * userTurn  * 
 * @param parameter1 Description of the first parameter. 
 * @return Description of the return value. 
 */

/** 
 * cpuTurn gets a computer's turn without losing on purpose. Different turn   * 
 * @param parameter1 Description of the first parameter. 
 * @return Description of the return value. 
 */



