<template> 
    <nav class="navbar navbar-expand-lg bg-light" style="box-shadow: -2px 1px 15px 1px #888888;">
        <div class="container-fluid">
          <div class="mx-auto" style="width: 200px;">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Deimantas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Form">PildymoForma</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Array">Masyvas</a>
              </li>
            </ul>
          </div>
            </div>
            <input type="checkbox" id="switch" v-model="darkMode"/>
              <label for="switch" style="--size: 70px; --size2: 35px;"></label>  <!-- Galima keisti dydį -->
        </div>
      </nav>
      <br/>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  watch: {
    darkMode(newVal) {
      document.body.classList.toggle("dark", newVal);
    }
  }
};
</script>