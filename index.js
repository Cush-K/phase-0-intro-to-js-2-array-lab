const cats = ["Milo", "Otis", "Garfield"];

console.log(cats);

function destructivelyAppendCat() {
    const cats2 = cats.push("Ralph");
    return cats;
    }

function destructivelyPrependCat(){
    const cats3 = cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveFirstCat(){
    const cats4 = cats.shift();
    return cats;
}

function destructivelyRemoveLastCat(){
    const cats5 = cats.pop();
    return cats;
}

function appendCat(){
    const cats6 = [...cats, "Broom"];
    return cats6;
}

function prependCat(){
    const cats7 = ["Arnold", ...cats];
    return cats7;
}

function removeLastCat(){
    const cats8 = cats.slice(0, -1);
    return cats8;
}

function removeFirstCat(){
    const cats9 = cats.slice(1);
    return cats9;
}