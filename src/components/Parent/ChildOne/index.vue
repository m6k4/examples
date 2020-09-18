<template>
  <div class="ChildOne">
    <h4>ChildOne</h4>
     <input v-model="firstChildName" />
     <ChildTwo v-bind="$props"
               :first-child-name="firstChildName"
               @changeValue="handleChangeValue"
               @anotherChange="handleAnotherChange"/>
  </div>

</template>

<script src="./component.js"></script>
<style src="./style.css" lang="css" scoped></style>
