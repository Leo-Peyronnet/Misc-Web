const quotes = [
    "Croyez en vous et en tout ce que vous êtes. Sachez qu'il y a quelque chose en vous qui est plus grand que tout obstacle. - Christian D. Larson",
    "Ne laissez pas hier occuper trop de place aujourd'hui. - Will Rogers",
    "Vous ratez 100% des coups que vous ne donnez pas. - Wayne Gretzky",
    "Le succès, c'est de se lever chaque matin et de s'efforcer de faire mieux que la veille. - John D. Rockefeller",
    "Il n'y a pas de secret pour le succès. C'est le résultat de la préparation, du travail acharné, de l'apprentissage de l'échec, de la persévérance et de l'amélioration continuelle. - Colin Powell",
    "Le succès est le résultat de la somme des petits efforts répétés jour après jour. - Robert Collier",
    "Il n'y a pas de limite à ce que l'on peut accomplir, sauf celles que l'on s'impose soi-même. - Napoleon Hill",
    "Le succès, c'est de se mettre en marche vers un objectif, de le poursuivre inlassablement, de ne jamais abandonner. - Dale Carnegie",
    "Le succès est un choix. Vous pouvez choisir de vous concentrer sur vos obstacles ou sur vos réalisations. - John C. Maxwell",
    "Le projet nous fait marcher vers la victoire ultime, la plus glorieuse, et la plus pure de toutes. - L. P."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const quote = getRandomQuote();
document.getElementById("cita").innerHTML = quote;
