<template>
  <div class="dashboard">
    <div class="header-section">
      <h1>Naslovnica</h1>
      <p class="subtitle">Prati svoje prijave za posao</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-label">UKUPNO PRIJAVA</span>
        <span class="stat-value">{{ store.totalApplications }}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label text-green">PRIJAVLJENO</span>
        <span class="stat-value">{{ store.appliedCount }}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label text-purple">INTERVJUI</span>
        <span class="stat-value">{{ store.interviewCount }}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label text-orange">PONUDE</span>
        <span class="stat-value">{{ store.offerCount }}</span>
      </div>
    </div>

    <div v-if="store.loading" class="loading">Učitavanje...</div>
    
    <div v-else class="jobs-grid">
      <JobCard v-for="job in store.jobs" :key="job.id" :job="job" @delete-job="store.deleteJob"/>
      <router-link to="/add" class="add-card">
        <span>+ Dodaj</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useJobStore } from '../stores/jobStore';
import JobCard from '../components/JobCard.vue';

export default {
  components: { JobCard },
  setup() {
    const store = useJobStore();
    onMounted(() => { store.fetchJobs(); });
    return { store };
  }
}
</script>

<style scoped>
.dashboard {
  padding-bottom: 50px;
}

.header-section {
  margin-bottom: 30px;
}

h1 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.subtitle {
  color: #6b7280;
  margin-top: 5px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  background: white;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #9ca3af;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.text-green { color: #059669; }
.text-purple { color: #4f46e5; }
.text-orange { color: #d97706; }

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

.jobs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.add-card {
  border: 2px dashed lightgray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: lightgray;
  text-decoration: none;
  min-height: 180px;
}

.add-card:hover {
  border-color: lightgray;
  color: gray;
}

.plus-icon {
  font-size: 2rem;
  margin-bottom: 5px;
}
</style>