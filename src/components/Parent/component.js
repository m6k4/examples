import ChildOne from "@/components/Parent/ChildOne";

export default {
  name: 'Parent',
  components: {
    ChildOne
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
      parentName: 'ParentComponentName',
    };
  },
  created() {
  },
  mounted() {

  },
  methods: {
    handleChildUpdate () {
      this.$toasted.show('Parent componend notified about changes ')
  }
  },

};
