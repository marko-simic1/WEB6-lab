<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <header>
      <div class="wrapper">
        <nav>
          <div class="brand">Prati svoje prijave za posao</div>
          <div class="links">
            <RouterLink to="/">Naslovnica</RouterLink>
            <RouterLink to="/add">Dodaj</RouterLink>
          </div>
        </nav>
      </div>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
</style>

<style scoped>
header {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 20px;
  margin-bottom: 30px;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.brand {
  font-weight: 800;
  font-size: 1.2rem;
  color: #333;
}

.links {
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  font-size: 0.95rem;
}

nav a.router-link-active {
  color: blue;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>