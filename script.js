// FONCTIONNALITE 1: affficher "click numéro X" en console quand l'utilisateur clique su footer


let eventsOnFooter = () => 
{
    let pageFooter = document.getElementsByTagName("footer")[0];
    let count =1;
    let onFooterClick = () =>
    {
        console.log(`clic numéro ${count}`);
        count ++;   
    } 
    pageFooter.addEventListener("click", onFooterClick);
}



//EX: addEventListener("click", function(){};


let perform = () => {
    eventsOnFooter();


}

perform();