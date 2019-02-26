/* Cyber pet time!
User selects the kind of animal they'd like (dog, monkey, pig, dog), 
you have to feed it, play with it and give it drinks

there should be consequences across the board - if you dont play, it gets bored, 
if you do, it's happy, but gets thirsty, that kind of thing. */

class Pet { 
    constructor(animal, name, weight, happieness){
        this._animal = animal;
        this._name = name;
        this._weight = weight;
        this._happieness = happieness;
    }

    get animal() {
        return this._animal
    }

    get name() {
        return this._name
    }

    get weight () {
        return this._weight
    }

    get happieness() {
        return this._happieness
    }

    areYouHungry() {
    if (this._weight >= 5){
        console.log("I could eat.")
        return false
    }else{
        (this._weight <= 4)
        console.log("im hungry")
        return true
        }
    }

    feedPet() {
        if (this._animal == "Cat"){
            console.log("Meoow! Yum!")
        }

        if (this._animal == "Dog"){
            console.log("Woof! Yum!")
        }

        if (this._animal == "Mouse"){
            console.log("Squek! Yum!")
        }
        this._weight++
        this._happieness++
        }

    play() {
        if (this._animal == "Cat"){
            console.log("Meoow! thanks for playing with, i'm hungry now")
        }

        if (this._animal == "Dog"){
            console.log("Woof! thanks for playing with me, i'm hungry now")
        }

        if (this._animal == "Mouse"){
            console.log("Squek! thanks for playing with me, i'm hungry now")
        }
        this._weight--
        this._happieness++
        }

    healthCheck() {
        if (this._weight == 0){
            console.log("GAME OVER YOU'VE KILLED YOUR PET")
            }
            if (this._weight == 5){
                console.log("YOUR PET IS HEALTHY")
                }    
                if (this._weight >= 8){
                    console.log("YOUR PET IS UNHEALTHY AND FAT, PLAY WITH IT BEFORE IT DIES ")
                    }
                    if (this._weight == 2){
                        console.log("YOUR PET NEEDS FEEDING OR IT WILL DIE")
                        }
                        if (this._weight >= 11){
                            console.log("YOUR PET IS UNHEALTHY AND FAT, IT HAD TO BE PUT DOWN")
                            }
        }
        
    /* happinessCheck(){
    if (this._happieness >= 11){
    console.log("YOUR PET CAN'T GET ANY HAPPIER")
    } }*/

    }

const cat = new Pet('Cat', 'Mike Hat', 8, 5)
const dog = new Pet('Dog', 'Doug', 5, 5)
const mouse = new Pet('Mouse', 'Mikey', 5, 5)

console.log("_________________________________CAT_____________________________________")

console.table(cat);
cat.areYouHungry();
cat.feedPet();
cat.play();
console.table(cat);
cat.healthCheck();

console.log("__________________________________DOG____________________________________")

console.table(dog);
dog.areYouHungry();
dog.feedPet();
dog.feedPet();
dog.feedPet();
dog.feedPet();
dog.feedPet();
dog.feedPet();
dog.feedPet();
dog.play();
console.table(dog);
dog.healthCheck();;

console.log("___________________________________MOUSE___________________________________")

console.table(mouse);
mouse.areYouHungry();
mouse.feedPet();
mouse.play();
console.table(mouse);
mouse.healthCheck();

