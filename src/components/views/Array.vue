<template>
    <div>
      <p>{{words}}</p>
      <p v-for="word in words" :style="{ color: getColor(word) }">{{word}}</p>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        words: [],
        index: 0
      };
    },
    created() {
      this.interval = setInterval(() => {
        if (this.index === 5) {
          clearInterval(this.interval);
        } else {
          this.words.push(["one", "two", "three", "four", "five"][this.index]);
          this.index++;
        }
      }, 1000);
    },
    methods: {
      getColor(word) {
        switch (word) {
          case "one":
            return "red";
          case "two":
            return "green";
          case "three":
            return "blue";
          case "four":
            return "orange";
          case "five":
            return "purple";
          default:
            return "black";
        }
      }
    }
  };
  </script>