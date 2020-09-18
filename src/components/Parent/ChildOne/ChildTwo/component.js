export default {
  name: 'ChildTwo',

  props: {
    firstChildName: String,
    appName: String,
    appVersion: String,
    appDescription: String,
  },

  computed: {

  },
  
  data() {
    return {
    };
  },
  created() {
   
  },
  mounted() {
  

  },
  methods: {
    callSecondChild(){
      this.$emit('changeValue');
    },
    callSecondChildAnotherValue(){
      this.$emit('anotherChange');
    }
  },

};
