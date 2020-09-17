<template>
  <div class="ReactivityExample">
    Tablica Obiektów
      <div class="pet" v-for ="(item, index) in dogs" 
         :key="index">
       <span>{{ item.name }} </span>
       <span>{{ item.years }} </span>
       <span>{{ item.surname || '--'}}</span>
      </div>
      <button @click="addDog()"> Add another dog</button>
      <button @click="addSurnameToAllDogs()"> Add surname to all dogs</button>
       <button @click="addSurnameToAllDogsUsingSet()"> Add surname to all dogs using Set</button>
       <label>Tablica jednowymiarowa</label>
      <div class="pet" v-for ="(item, index) in pets" 
         :key="index">
       <span>{{ item }} </span>
      </div>
      <button @click="addPetByPush()"> Add another pet by push</button>
       <button @click="addPetByIndex()"> Add one more pet by Index</button>
        <button @click="addPetByIndexAndSet()"> And another one by Set</button>
  </div>

</template>

<script src="./component.js"></script>
<style src="./style.css" lang="css" scoped></style>
