<template>
  <div class="ChildTwo">
    <h4>ChildTwo</h4>
    <div class="flex">
      <label>
        name: <b> {{appName}} </b>
      </label>
      <label>
       version: <b>{{appVersion}}</b>
      </label>
      <label>
       description: <b>{{appDescription}}</b>
      </label>
        <label>
        first child name: <b>{{firstChildName}}</b>
      </label>
      <div>
        <button @click="callSecondChild" > Button to change firstChildName value which is in DOM </button>
      </div>
      <div>
        <button @click="callSecondChildAnotherValue" > Button to change value which is not in DOM</button>
      </div>
    </div>
  </div>

</template>

<script src="./component.js"></script>
<style src="./style.css" lang="css" scoped></style>
