




const quotes = [`I think, therefore I am. (Rene Descartes)`,
   `I may disagree with what you say, but I will defend to death your right to say it. (Evelyn Beatrice Hall)` ,
   `If men were perfectly virtuous, they wouldn’t have friends. (Montesquieu)
    Ignorance is bliss.` ,
   `People do what they hate for money and use the money to do what they love. (Jimmy O. Yang’s dad?)` ,
   `Small things make perfection, but perfection is no small thing. (Sir Henry Royce)` ,
   `A masterpiece is born a masterpiece. (Hyouka)` ,
   `Who will guard the guardians?` ,
    `History will be kind to me, for I intend to write it. (Winston Churchill)`,
   `No problem can be solved from the same level of consciousness that created it. We must see the world anew. (Albert Einstein)` ]


  /* quotes.forEach((quotes) => {
    console.log(quotes)
   })*/

    let randomNumber = Math.random()


function quoteGenerator(){
   
    if(randomNumber > 0 && randomNumber < 0.1) { 
        quote1 = quotes[0];
        document.querySelector(`.quoteDisplay`).innerHTML = quote1

    }
     else if(randomNumber > 0.1 && randomNumber < 0.2) { 
        quote2 = quotes[1];
        document.querySelector(`.quoteDisplay`).innerHTML = quote2
}
     else if(randomNumber > 0.2 && randomNumber < 0.3) {
        quote3 = quotes[2];
        document.querySelector(`.quoteDisplay`).innerHTML = quote3

    }
     else if(randomNumber > 0.3 && randomNumber < 0.4) { 
        quote4 = quotes[3];
        document.querySelector(`.quoteDisplay`).innerHTML = quote4
}
   else if(randomNumber > 0.4 && randomNumber < 0.5) { 
        quote5 = quotes[4];
        document.querySelector(`.quoteDisplay`).innerHTML = quote5
}
    else if(randomNumber > 0.5 && randomNumber < 0.6) { 
        quote6 = quotes[5];
        document.querySelector(`.quoteDisplay`).innerHTML = quote8
       

    }
    else if(randomNumber > 0.6 && randomNumber < 0.7) { 
        quote7 = quotes[6];
        document.querySelector(`.quoteDisplay`).innerHTML = quote7
}
    else if(randomNumber > 0.7 && randomNumber < 0.8) {
        quote8 = quotes[7];
        document.querySelector(`.quoteDisplay`).innerHTML = quote8

    }
    else if(randomNumber > 0.8 && randomNumber < 0.9) { 
        quote9 = quotes[8];
        document.querySelector(`.quoteDisplay`).innerHTML = quote9
    }
    else if(randomNumber > 0.9 && randomNumber < 1) {
        quote10 = quotes[9];
        document.querySelector(`.quoteDisplay`).innerHTML = quote10
       
    }
   
}
   