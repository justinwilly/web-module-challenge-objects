//Objects

const dog = {
    //key / value pairs
    name: 'fern',
    breed: 'bull mastiff',
    age : 4,
    color: 'blonde',
    favFood: 'Peanut Butter',
    sister: {
        name: 'willo',
        breed: 'chino',
        age: 1,
    }, //dont forget this comma
    // methods - functions that belong to an objects
    eat: function() {
        return `${this.name} is a ${this.breed} and she likes to eat ${this.favFood}`;
    }
};

console.log(dog.name) //Fern

console.log(dog.eat()) //fern is a bull mastiff and she likes to eat peanut butter

// THIS keyword
// Implicit binding - 80% of use cases - it applies to objects with methods - when the 
// function is invoked look to the left of the dot, that is what "this" refers to

console.log(dog.sister) // loads willo stats


const places = [
    {city:'Tel Aviv', contry: 'Isreal', region: 'Middle East'},
    {city:'Toronto', contry: 'Canada', region: 'North America'},
    {city:'Tokyo', contry: 'Japan', region: 'Asia'},
    {city:'Bitburg', contry: 'Germany', region: 'Europe'},
    {city:'Brisbane', contry: 'Australia', region: 'Oceania'},
    {city:'Acon', contry: 'Panama', region: 'South America'},
    {city:'Dar Es Salaam', contry: 'Tanzania', region: 'Africa'},
    {city:'Amman', contry: 'Jordan', region: 'Middle East'},
    {city:'Najaf', contry: 'Iraq', region: 'Middle East'},
]

console.log(places) // return whole array of places

console.log(places[1].country) // Canada

//create a new array called middle east
// loop through array and pus hte city names of places that are in the middle east to a new array

const middleEast = [] //array we are to push to later
for (let i = 0; i < places.length; i++) {
    if (places[i].region === 'Middle East') {
        middleEast.push(places[i].city)
    }
}

console.log(middleEast); //Tel Aviv, Amman, najaf

//add a new object to the array
//write a function that can add an object to any array
function addPLace(array, city, country, region) {
    array.push({city, country, region})
    return array
}

console.log(addPLace(places, 'Sofia', 'Bulgaria', 'Europe')) // adds this to the places array of objects


//write a function that changes the region at a specific index
function changeRegion(array, index, region) {
    array[index].region = region;
    return array
}

console.log(changeRegion(places, 5, 'Central America')) //changes panama's region


//lets creat a pet from a function, name, species, behaviour
function createPet(name, species, well_behaved) {
    return {name, species, well_behaved};
}

console.log(createPet("Fern", "Bull", true)); //return fern object
