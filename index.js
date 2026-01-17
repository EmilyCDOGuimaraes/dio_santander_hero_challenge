// Santander-DIO Challenge: Hero Level Classifier (PT-BR prompt, EN code)

console.log("=== BEGIN HERO LEVEL CLASSIFIER ===");

// --- Functions
function getHeroLevel(xp) {
    if (xp < 0 || isNaN(xp)) return "XP inválido";

    if (xp <= 1000) return "Ferro";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Prata";
    if (xp <= 7000) return "Ouro";
    if (xp <= 8000) return "Platina";
    if (xp <= 9000) return "Ascendente";
    if (xp <= 10000) return "Imortal";
    return "Radiante";
}

function classifyHero(name, xp) {
    const heroLevel = getHeroLevel(xp);

    if (heroLevel === "XP inválido") {
        return `O Herói de nome ${name} não possui XP suficiente para ser classificado.`
    }

    return `O Herói de nome ${name} está no nível de ${heroLevel}.`;
}

// --- Array of heroes (loop requirement)
const heroes = [
    { name: "Emily", xp: 7500 },
    { name: "Mathis", xp: 1200 },
    { name: "Mabel", xp: 9999 }, 
    { name: "Unknown Hero", xp: -100 } // personal touch
];

// --- Loop 
const results = [];

for (let i = 0; i < heroes.length; i++) {
    const heroName = heroes[i].name;
    const heroXp = heroes[i].xp;
    const result = classifyHero(heroName, heroXp);
    results.push(result);
}

console.log(results.join("\n"));
console.log("=== END ===");