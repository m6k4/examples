import ChildTwo from "@/components/Parent/ChildOne/ChildTwo";

export default {
  name: 'ChildOne',
  components: {
    ChildTwo
  },

  props: {
    appName: String,
    appVersion: String,
    appDescription: String,
  },

  computed: {

  },
  
  data() {
    return {
      firstChildName: 'first child props name',
      anotherData: 'another data',
    };
  },
  created() {
   
  },
  mounted() {
  },
  methods: {
    handleChangeValue(){
      this.firstChildName = 'Changed child props name'
    },
    handleAnotherChange(){
      console.log('test');
      this.anotherData = 'another data change'
    }
  },

};
