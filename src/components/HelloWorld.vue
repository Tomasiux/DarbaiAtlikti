<template>
  <div>
    <input type="text" style="margin-bottom: 32px" v-model="rows" />
    <div v-for="row in generateDiamond(rows)" v-text="row"></div>
  </div>
  <div>
    <transition name="fade">
    <form-child v-if="showForm"></form-child>
  </transition>
    <button @click="toggleForm">{{ showForm ? 'Remove' : 'Add' }}</button>
  </div>
</template>
<script>
import FormChild from "./views/FormChild.vue";
export default {
  components: {
    FormChild
  },
  data() {
    return {
      rows: 11,
      showForm: false,
    };
  },
  methods: {
    generateDiamond(rows) {
      if (rows < 1) {
        return [];
      }
      if (rows === 1) {
        return [" * "];
      }
      if (rows === 2) {
        return [" * ", " * * * "];
      }
      const center = Math.floor(rows / 2);
      const diamond = this.generateDiamond(rows - 2);
      const result = [];
      for (let i = 0; i < center; i++) {
        result.push(
          " ".repeat(center - i - 1) +
            " * ".repeat(2 * i + 1) +
            " ".repeat(center - i - 1)
        );
      }
      result.push(" * ".repeat(rows));
      for (let i = center - 1; i >= 0; i--) {
        result.push(
          " ".repeat(center - i - 1) +
            " * ".repeat(2 * i + 1) +
            " ".repeat(center - i - 1)
        );
      }
      return result;
    },
    toggleForm() {
      this.showForm = !this.showForm;
    },
    handleFormSubmit(formData) {
      console.log(formData)
    },
  }
};
</script>
