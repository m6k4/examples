import Vue from 'vue'

export default {
  name: 'ReactivityExample',

  props: {

  },

  
  data() {
    return {
      pom: 4,
      pets: ['cat', 'dog', 'snake'],
      dogs: [
        {
          name: 'Pimpek',
          old: 12
        },
        {
          name: 'Puszek',
          old: 15
        },
        {
          name: 'Reksio',
          old: 12
        },
      ],
    };
  },
  created() {
    console.log('created', this.dogs);
  },
  methods: {
    addAnimal(animal){
      this.pets.push(animal);
    },
    addDog(){
      this.dogs.push({name: 'Kajtek', old: 2});
    },
    addSurnameToAllDogs(){
      this.dogs.forEach(dog => dog.surname = 'Kowalski');
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
    }
  },
  computed: {
   
  },

};
