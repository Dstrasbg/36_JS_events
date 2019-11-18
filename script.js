//Fonct1 et 1bis : affficher " CLIQUE" ET "click numéro X" en console quand l'utilisateur clique su footer
let eventsOnFooter = () => 
{
    let pageFooter = document.getElementsByTagName("footer")[0];
    // fonction 1
    console.log("CLIQUE");    
    let count =1;
    let onFooterClick = () =>
    {
        console.log(`clic numéro ${count}`);
        count ++;   
    } ;
    pageFooter.addEventListener("click", onFooterClick);
}

//Fonct2 : "Hamburger Menu"
let eventsOnHamburger = () => 
{
    let hamburger = document.getElementsByClassName("navbar-toggler")[0];
    let navHeader = document.getElementById("navbarHeader");
    let onHamburgerClick = () => 
    {
        navHeader.classList.toggle("collapse");       
    };
    hamburger.addEventListener("click", onHamburgerClick);
}

//Fonct3 : Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page)
let eventsOnFirstCard = () =>
{
    let firstCard = document.getElementsByClassName("card")[0];
    console.log(`FIRST CARD ${firstCard}`);
    let firstEditButton = firstCard.getElementsByClassName("btn-outline-secondary")[0];
    console.log(`FIRST CARD ${firstEditButton}`);    
    let onFirstEditButtonClick = () => 
    {
        firstCard.style.color = "red";
    };
    firstEditButton.addEventListener("click", onFirstEditButtonClick);
}

//Fonct4 : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant !
let eventsOnSecondCard = () =>
{
    let secondCard = document.getElementsByClassName("card")[1];
    console.log(`SECOND CARD ${secondCard}`);
    let secondEditButton = secondCard.getElementsByClassName("btn-outline-secondary")[0];
    console.log(`SECOND CARD ${secondEditButton}`);   
    let onSecondEditButtonClick = () => 
    {        
        if (secondCard.style.color === 'green')
        {
            secondCard.removeAttribute("style");
        }
        else
        {
            secondCard.style.color = 'green' ;
        }
    }
    secondEditButton.addEventListener("click", onSecondEditButtonClick);
}

/*Fonct5 :  si un utilisateur double clique sur la navbar en haut,
tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN
 qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible*/




/*Fonct6 : "View" d'une card (n'importe laquelle), celle-ci va se réduire. 
Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille
d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : 
s'il repasse sa souris, la card redevient normale !*/




//Fonct7 :  WTF si bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !




//Fonct8 : Tourner les cartes




//Fonct9 : truct de ouf




//EX: addEventListener("click", function(){};


let perform = () => {
    eventsOnFooter();
    eventsOnHamburger();
    eventsOnFirstCard();
    eventsOnSecondCard();
    eventsOnNavbar();
    eventsOnEachCards();
    eventsOnForwardButton();
    eventsOnBackwardButton();

}

perform();