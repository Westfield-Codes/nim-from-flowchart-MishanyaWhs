/* Nim Trainer by Mykhailo M.
 * Chart:https://lucid.app/lucidchart/944cff40-8a5a-4e07-b5dd-a06243be5140/edit?invitationId=inv_9088d170-bb1d-4d8b-b0b3-91a175e9cb05&page=lVogpd-J6AOb#
*/

/* Global Variables */
var trainer = false;
var count = 0;

/** 
 * Main * 
 * @param parameter1 Description of the first parameter. 
 * @return none
 */

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

function userTurn(){
    count += 3;
    alert("You counted 3. count is now " + count);
}

/** 
 * cpuTurn gets a computer's turn without losing on purpose. Different turn   * 
 * @param parameter1 Description of the first parameter. 
 * @return Description of the return value. 
 */

function cpuTurn(){
    count += 1;
    alert("I counted 1. count is now " + count);
}
 