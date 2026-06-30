/* function addNumber(a:number,b: number): number {
  return a+b;
}

const result1 = addNumber(11, 411);
console.log(result1);

const playerName: string = "Pixi";
let score: number = 420;
let isOnline: boolean = true

console.log(`Jatekos:${playerName} |Pontszám:${score} | Online:${isOnline}`);
 */

//1.Primitív típusok (Nagyon kezdő)
const dolgozoNeve: string = "Benitó";
let munkamoral: number = 10;
let isInwork: boolean = false;
let dolgozoKora: number = 22;
let vegzettseg: string = "Erettségi"

console.log(`Teljesnév:${dolgozoNeve} | Szorgalom ${munkamoral} | Dolgozik-e ${isInwork} |ennyi éves: ${dolgozoKora} |
  legmagasabb végzettsége: ${vegzettseg}`)

//2. Egyszerű tömbök gépelése
const arak: number[] = [2100, 399, 679];
const vasarlasiLista: string[] = ["Dobozos kávé","Yoghurt","5db ZSemle"]
console.log(arak,vasarlasiLista);



//3. tuple
let koordinatak:[number, number] = [47.4956, 55.879 ];
console.log(koordinatak);


//4. Egyszeru function szamokkal
function square(n: number): number  {
  return n * n;
}
console.log(square(6));

function add(a: number, b:number): number {
  return a + b;// többb szammal és különbozo operatorokkal is mukodik nyilvan
}
console.log(add(10,11));




//5.Opcionális paraméterek függvényekben( ?)
function greet(firstname: string, nickname?: string): string{
  if (nickname){
      return `Szia, ${nickname}!`;      
    }
    return `Udvozollek, ${firstname}!`;
  }
console.log(greet("Ádám", "Ádika"));
console.log(greet("Gábor"));

//6.Opcionális paraméterek függvényekben

/* const movie: {title: string, year: number} = {
  title:" Godzilla",
  year: 1997

};
console.log(movie);
 */

const Beer: {name: string, taste: string, year: number } = {
  name: "Köbányai",
  taste: "Nem túl ízletes",
  year: 1989
}
console.log(Beer);


//7. Type alias(tipus álnév)
/*type felhasznalasi teruletei:
-Union típusok
-Tuple típusok
-Mapped típusok
-Conditional típusok
-Rekurzív típusok
*/
type User = {
  id: number,
  username: string,
  email: string,
  phone:number
};

const Newuser: User ={
  id: 41,
  username: "Ben Hur",
  email: "messala@hur.com",
  phone: 36704430100
};
console.log(Newuser);

//8.Interface használata
/*
-Objektumokat definiálsz (alapértelmezett
-Osztályokat implementálsz
-Könyvtárat bővítesz (declaration merging)
-Nyilvános API-t tervezel - az interface-ek jobban dokumentálódnak és explicitabbak
*/
/*Az interface nagyon hasonló a type-hoz, 
de kifejezetten objektumok struktúrájának leírására való (és könnyebben bővíthető).
Feladat: Írj egy Product interfészt (name, price, isAvailable). 
Készíts vele egy objektumot! */

interface Termek {
  termekNev: string,
  termekAr: number,
  Elerheto: boolean

};

const laptop: Termek = {
  termekNev: "Asus Zenbook",
  termekAr: 459.000,
  //ram:number
  //cpu:number
  //gpu:number
  //......
  Elerheto:true
};
console.log(laptop);

//9. Union Types (Unió típusok)
// id többfele változot is befogadhat a | operatorral
let id: number | string;
id = 101;
id = "ID_101";
console.log(id);

//10.Literal Types (Fix értékek)
/*
Egy változó értékét nem csak típusra, 
hanem konkrét szövegekre/számokra is korlátozhatjuk.
Feladat: Hozz létre egy Theme típust, 
ami csak a "light" vagy "dark" értékeket veheti fel. 
Próbálj meg beállítani neki egy harmadik értéket, hogy lásd, hogyan hibázik a TS!
 */

type Color = "light" | "dark";

let currentColor: Color = "dark";
console.log(currentColor);
// currentTheme = "blue"; -> Hiba! A TS jelzi, hogy a "blue" nem megengedett.


//Az Enum (Felsorolás) típus (Kezdő-Haladó)
/*
Az enum típus lehetővé teszi, hogy egy változó több előre definiált érték közül választhasson. 
Az enum értékei lehetnek számok vagy szövegek is.
Feladat: Hozz létre egy jelzőfény enumot (piros, sárga, zöld), 
és írj egy függvényt, ami kiírja a lámpa színét a konzolra!
 */
enum jelzoFenyek {
  Piros = "STOP",
  Sárga = "Keszulj",
  Zöld = "Indulas"
} 

type JelzoFenyek = (typeof jelzoFenyek)[keyof typeof jelzoFenyek];

function checkSignal(signal: JelzoFenyek) {
  console.log(`A lámpa színe ${signal}-ra váltott`);
}

checkSignal(jelzoFenyek.Zöld);
checkSignal(jelzoFenyek.Sárga);
checkSignal(jelzoFenyek.Piros);


//12.Type Assertion (Típus kényszerítés / as)
/*
A Type Assertion lehetővé teszi, hogy a TypeScript számára jelezzük, 
hogy egy változó egy adott típusú értéket tartalmaz, még akkor is, 
ha a TypeScript nem tudja ezt automatikusan kitalálni.  

Van egy unknown (ismeretlen) típusú változód. 
Tudod, hogy szöveg van benne. Kényszerítsd rá a TS-t, 
hogy kezelje stringként, és mérd meg a hosszat a .length tulajdonsággal!
 */

let SomeValue: unknown = "Anyám tyúk";

let len = (SomeValue as string).length;
console.log(len);

// 13. Type Guard (typeof ellenőrzés)
/*  
Koncepció: Biztonságos kód lefutás. 
Ha unió típust használunk, a kódban le 
kell ellenőrizni, épp mi van benne.
Feladat: Írj egy processInput függvényt, ami kap egy string | number értéket. 
Ha string, alakítsa nagybetűssé, ha szám, szorozza meg kettővel.
*/

function valamiInput(input: string | number) {
  if(typeof input === "string") {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}
console.log(valamiInput("hello"));
console.log(valamiInput(44));

//.14 Readonly (Csak olvasható) tulajdonságok 
/*
Megakadályozza, hogy az objektum létrehozása után módosítsuk a tulajdonságait.
Feladat: Készíts egy Config interfészt, 
amiben az apiKey tulajdonság readonly. Próbáld meg felülírni az értéket!
*/

interface Config {
  readonly apiKey:string;
  dbName: string;
}
const myConfig: Config = {apiKey: "Kiskutya1234", dbName: "prod_db"};
myConfig.dbName = "test_db"; // Ez rendben van
// myConfig.apiKey = "ÚjKulcs"; // Hiba! A TS jelzi, hogy a readonly tulajdonság nem módosítható.


//15. Alapértelmezett Osztály (Class) TypeScriptben
/*
Osztályok gépelése és konstruktorok működése.
Feladat: Hozz létre egy Car osztályt brand és hp (lóerő) tulajdonságokkal, 
és egy metódussal, ami kiírja az autó adatait
 */

 class Auto {
  marka: string;
  Hp: number;
  sofor: string;

  constructor(marka: string, Hp: number, Elon_Musk: string) {
    this.marka = marka;
    this.Hp = Hp;
    this.sofor = Elon_Musk;
  }
  display() {
    console.log(`Ez egy ${this.marka} autó, ami ${this.Hp} lóerős. A sofőr: ${this.sofor}`);
  }
 }

 const azEnAutom = new Auto("Tesla", 999, "Elon Musk");
azEnAutom.display();


//16. Access Modifiers (Láthatósági módosítók)
/*Koncepció: A public, private és protected kulcsszavak az osztályok 
adatainak védelmére.
Feladat: Módosítsd az osztályt úgy, hogy a rejtettKód változó private legyen, 
azaz az osztályon kívülről ne lehessen közvetlenül átírni. 
*/
class Safe {
  public name: string;
  private SecretCode: number;

constructor(name: string, code: number) {
  this.name = name;
  this.SecretCode = code;
  }

}
const vault = new Safe("Mória Bányái", 4444);
console.log(vault.name); //--- ez igy joo
// console.log(vault.secretCode); -> Hiba! A 'secretCode' privát tulajdonság.


 //17.Interfész öröklődés
 /*
 Meglévő interfészek kibővítése új tulajdonságokkal anélkül, 
 hogy újra le kellene írnunk őket.
Feladat: Készíts egy Person (név, kor) interfészt, majd egy Driver interfészt, 
ami örököl a Person-ből, de kiegészül egy licenseType tulajdonsággal.
 */

interface Person {
  nev: string;
  kor: number;
  hobbi: string;
}

interface Sofőr extends Person {
  JogositvanyTipus: string;
};


const driver: Sofőr = {
nev: "Matthew Broderick",
  kor: 22,
  hobbi: "Színészet",
  JogositvanyTipus: "B"
};
console.log("Sofőr adatai:", {nev: "Matthew Broderick", kor: 22, 
  hobbi: "Színészet", JogositvanyTipus: "B"});