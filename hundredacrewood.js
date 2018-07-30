var tigger = { character: "Tigger" }; 
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"};
var eeyore = { character: "Eeyore"};        
var heffa = { character: "Heffalumps"};  
var kanga = { character: "Kanga"};        
var chris = { character: "Christopher Robin"};
var rabbit = { character: "Rabbit"};
var bees = { character: "Bees"};
var owl = { character: "Owl"};
var gopher = { character: "Gopher"};

heffa.west = eeyore;
eeyore.east = heffa;
eeyore.south = kanga;
kanga.north = heffa.west;
kanga.south = chris;
chris.north = eeyore.south;
chris.west = owl;
owl.east = kanga.south;
owl.south = piglet;
piglet.north = chris.west;
piglet.east = pooh;
chris.south = piglet.east;
pooh.west = owl.south;
pooh.north = kanga.south;
pooh.east = bees;
pooh.south = tigger;
tigger.north = chris.south;
bees.west = piglet.east;
bees.north = rabbit;
chris.east = bees.north;
rabbit.south = bees;
rabbit.west = owl.east;
rabbit.east = gopher;
gopher.west = chris.east;

console.log(chris)