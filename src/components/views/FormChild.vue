<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <span class="label info">Vardas:</span>
      <input type="text" v-model="formData.name" />
      <span class="label info">El. paštas:</span>
      <input type="email" v-model="formData.email" />
      <span class="label info">Amžius:</span>
      <input type="number" v-model="formData.age" />
      <div>Vyras / Moteris</div>
      <input type="radio" value="Vyras" style="margin:18px;" v-model="formData.gender" />
      <input type="radio" value="Moteris" style="margin:18px;" v-model="formData.gender" />
      <span class="label info">Miestas:</span>
      <select v-model="formData.city">
        <option value="Vilnius">Vilnius</option>
        <option value="Kaunas">Kaunas</option>
        <option value="Klaipėda">Klaipėda</option>
      </select>
      <span class="label info">Slaptažodis:</span>
      <input type="password" v-model="formData.password" />
      <span class="label info">Aprašymas:</span>
      <textarea v-model="formData.description"></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
    <div class="output-container">
      <p>Amžius: {{ formData.age }}</p>
      <p>Vardas: {{ formData.name }}</p>
      <p>El. paštas: {{ formData.email }}</p>
      <p>Lytis: {{ formData.gender }}</p>
      <p>Miestas: {{ formData.city }}</p>
      <p>Slaptažodis: {{ formData.password }}</p>
      <p>Aprašymas: {{ formData.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
      name: '',
      email: '',
      gender: '',
      city: '',
      description: '',
      age: '',
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit('form-submit', this.formData)
    }
  }
};
</script>