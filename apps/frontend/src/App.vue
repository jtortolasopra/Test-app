<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/settings">Settings</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  width: 100%;
  background-color: #333;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

li {
  display: inline;
}

a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
}

a:hover {
  background-color: #555;
}

main {
  margin-top: 60px;
  padding: 20px;
}
</style>
