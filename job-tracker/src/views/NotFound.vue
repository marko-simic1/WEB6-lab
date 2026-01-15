<template>
  <div class="not-found-container">
    <div class="error-card">
      <div class="error-code">404</div>
      <h1 class="title">Stranica nije pronađena</h1>
      
      <router-link to="/" class="btn-home">
        Povratak na naslovnicu
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 20px;
}

.error-card {
  background: white;
  padding: 60px 40px;
  border-radius: 12px;
  text-align: center;
  max-width: 450px;
  width: 100%;
}

.error-code {
  font-size: 6rem;
  font-weight: 800;
  color: blue; 
  line-height: 1;
  margin-bottom: 10px;
  opacity: 0.1; 
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 15px 0;
}

.btn-home {
  display: inline-block;
  background-color: blue;
  color: white;
  padding: 12px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
}

.btn-home:hover {
  background-color: #1d4ed8;
}
</style>