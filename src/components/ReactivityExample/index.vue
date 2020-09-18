<template>
  <div class="ReactivityExample">
    <h4> Array of objects </h4>
      <div class="pet" v-for ="item in dogs" 
         :key="item.name">
        <span>name: <b> {{ item.name }} </b></span>
        <span>age: <b>{{ item.age }} </b></span>
        <span>surname: <b>{{ item.surname || '--'}}</b></span>
      </div>
      <div class="buttons">
        <button @click="addDog()"> Add another dog</button>
        <button @click="addSurnameToAllDogs()"> Add surname to all dogs</button>
        <button @click="addSurnameToAllDogsUsingSet()"> Add surname to all dogs using Set</button>
      </div>
       <h4>One-dimensional array</h4>
      <div class="pet" v-for ="(item, index) in pets" 
         :key="index">
       <span>{{ item }} </span>
      </div>
      <div>
        <button @click="addPetByPush()"> Add another pet by push</button>
        <button @click="addPetByIndex()"> Add one more pet by Index</button>
        <button @click="addPetByIndexAndSet()"> And another one by Set</button>
      </div>
      <div>
          <button @click="setName()"> set cat name</button>
           <span> Value from store: {{ catName }} </span> 
      </div>
  </div>

</template>

<script src="./component.js"></script>
<style src="./style.css" lang="css" scoped></style>
