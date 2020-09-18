<template>
  <div class="Parent">
     <h4>Parent</h4>
    <ChildOne @hook:updated="handleChildUpdate" v-bind="$props" />
  </div>

</template>

<script src="./component.js"></script>
<style src="./style.css" lang="css" scoped></style>
