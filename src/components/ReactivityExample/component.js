import Vue from 'vue'
import { store, mutations } from "@/store/index.js";

export default {
  name: 'ReactivityExample',

  props: {

  },

  data() {
    return {
      pom: 4,
      catsNames: ['leo', 'milo', 'max', 'simba', 'loki', 'charlie'],
      pets: ['cat', 'dog', 'snake'],
      dogs: [
        {
          name: 'Pimpek',
          age: 12
        },
        {
          name: 'Puszek',
          age: 15
        },
        {
          name: 'Reksio',
          age: 12
        },
      ],
    };
  },

  computed: {
    catName() {
      return store.cat.name;
    }
  },
  

  created() {
    console.log('created', this.dogs);
  },
  methods: {
    setName(){
      mutations.setName(this.catsNames[Math.floor(Math.random()*5) + 1])
    },
    addAnimal(animal){
      this.pets.push(animal);
    },
    addDog(){
      this.dogs.push({name: 'Kajtek', age: 2});
    },
    addSurnameToAllDogs(){
      this.dogs.forEach(dog => dog.surname = 'Dąbrowski');
      console.log('addSurnameToAllDogs', this.dogs);
    },
    addSurnameToAllDogsUsingSet(){
 
      this.dogs.forEach(dog => Vue.set(dog, 'surname', 'Kowalski'));
      console.log('addSurnameToAllDogsUsingSet', this.dogs);
    },
    addPetByPush(){
      this.pets.push('fish'); 
      console.log('addPetByPush', this.pets);
    },
    addPetByIndex(){
      this.pets[this.pom++] = 'monkey'; 
      console.log('addByIndex', this.pets);
    },
    addPetByIndexAndSet(){
      this.$set(this.pets, this.pom++, 'bird');
      console.log('addByIndexAndSet', this.pets);
    },
    checkReactivity(target, key, val){
      console.log('constructor' in Object.prototype, 'tu');
      if (key in target && !(key in Object.prototype)) {
        console.log('yes', val);
      }else{
        console.log('no', val);
      }
    }
  },

};
