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
let eventsOnNavbar = () =>
{
    let navb = document.getElementsByTagName("header")[0];
    let bootstrapLink = document.getElementsByTagName("link")[0];
    let onNavbDoubleClick = () =>
    {
        if (bootstrapLink.disabled ===false)
        {
            bootstrapLink.disabled =true;
        }
        else
        {
            bootstrapLink.disabled=false;
        };
    };
    navb.addEventListener("dblclick", onNavbDoubleClick);
}

/*Fonct6 : "View" d'une card (n'importe laquelle), celle-ci va se réduire. 
Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille
d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : 
s'il repasse sa souris, la card redevient normale !*/
let eventsOnAnyCards = () => 
{
    let anyOfCards = document.getElementsByClassName("col-md-4").length;
    for (let i = 0; i < anyOfCards; i ++) 
    {
        let miniCard = document.getElementsByClassName("col-md-4")[i];
        let miniImage = document.querySelectorAll("img.card-img-top")[i];
        let miniViewButton = miniCard.getElementsByClassName("btn-success")[0];
        let miniCardText = miniCard.childNodes[1].childNodes[3].childNodes[1];
        let onMiniViewButtonMouseover = () => 
        {
            miniCardText.classList.toggle("collapse");
            if (miniImage.style.transform === "scale(0.4)")
            {
                miniImage.style.removeProperty("transform");
            }
            else
            {
                miniImage.setAttribute("style", "transform: scale(0.4)");
            };
        };
        miniViewButton.addEventListener("mouseover", onMiniViewButtonMouseover);
    };
}

//Fonct7 :  WTF si bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche)!
let eventsOnForwardButton = () =>
{
    let anyOfCards = document.getElementsByClassName("col-md-4").length;
    let forwardButton = document.querySelectorAll("a.my-2")[1];
    let onForwardButtonClick = () =>
    {
        let firstCard = document.getElementsByClassName("col-md-4")[0];
        let lastCard = document.getElementsByClassName("col-md-4")[anyOfCards - 1];
        firstCard.parentNode.insertBefore(lastCard, firstCard);
    };
    forwardButton.addEventListener("click", onForwardButtonClick);
};

//Fonct8 : Tourner les cartes ( PAS FAIT)


//Fonct9 : truct de ouf avec les touches "a", "y", "p" et "b" + logo (pas fait)


let perform = () =>
{
    eventsOnFooter();
    eventsOnHamburger();
    eventsOnFirstCard();
    eventsOnSecondCard();
    eventsOnNavbar();
    eventsOnAnyCards();
    eventsOnForwardButton();
    //eventsOn...();
    //eventsOn...();
}

perform();
//FIN