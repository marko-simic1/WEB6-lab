<template>
  <div class="page-container">
    <div class="back-link-container">
      <router-link to="/" class="back-link">Nazad na naslovnicu</router-link>
    </div>

    <div class="detail-card">
      
      <div class="card-header">
        <div>
          <h1 class="company-name">{{ job.company }}</h1>
          <p class="position-title">{{ job.position }}</p>
        </div>
        <span class="status-pill" :class="statusClass(job.status)">
          {{ job.status }}
        </span>
      </div>

      <hr class="divider">

      <div class="section">
        <h3 class="section-label">DETALJI PRIJAVE</h3>
        <div class="info-row">
          <span class="info-text">Prijavljeno {{ formatDate(job.date) }}</span>
        </div>
      </div>

      <div class="section" v-if="job.notes">
        <h3 class="label-bold">Bilješke</h3>
        <p class="notes-text">{{ job.notes }}</p>
      </div>
      <div class="section" v-else>
        <h3 class="label-bold">Bilješke</h3>
        <p class="notes-text text-muted">Nema dodanih bilješki za ovu prijavu</p>
      </div>

      <div class="section">
        <h3 class="section-label">AZURIRAJ STATUS</h3>
        <div class="status-buttons">
          <button class="btn-status btn-applied" @click="updateStatus('Applied')">Označi kao prijavljeno</button>
          <button class="btn-status btn-interview" @click="updateStatus('Interview')">Označi kao intervju</button>
          <button class="btn-status btn-offer" @click="updateStatus('Offer')">Označi kao ponuda</button>
          <button class="btn-status btn-rejected" @click="updateStatus('Rejected')">Označi kao odbijeno</button>
        </div>
      </div>

      <div class="delete-section">
        <button class="btn-delete" @click="deleteJob">
          Izbriši prijavu
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useJobStore } from '../stores/jobStore';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useJobStore();

    onMounted(() => {
       if (store.jobs.length === 0) store.fetchJobs();
    });

    const job = computed(() => {
      return store.jobs.find(j => j.id == route.params.id);
    });

    const updateStatus = (newStatus) => {
      if(job.value) {
        store.updateStatus(job.value.id, newStatus);
      }
    };

    const deleteJob = () => {
      if(confirm('Jesi suguran da želiš izbrisati ovu prijavu?')) {
        store.deleteJob(job.value.id);
        router.push('/');
      }
    };

    const formatDate = (dateString) => {
      if(!dateString) return '';
      return new Date(dateString).toLocaleDateString('hr-HR');
    };

    const statusClass = (status) => {
      return {
        'pill-applied': status === 'Applied',
        'pill-interview': status === 'Interview',
        'pill-rejected': status === 'Rejected',
        'pill-offer': status === 'Offer'
      };
    };

    return { store, job, updateStatus, deleteJob, formatDate, statusClass };
  }
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  min-height: 80vh;
  max-width: 800px;
  margin: 0 auto;
}

.back-link-container {
  width: 100%;
  max-width: 600px;
  margin-bottom: 15px;
}

.back-link {
  text-decoration: none;
  color: lightgray;
  font-size: 0.9rem;
}

.back-link:hover {
  color: #333;
}

.detail-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid lightgray;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.company-name {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 800;
}

.position-title {
  margin: 5px 0 0 0;
  font-size: 1.1rem;
}

.status-pill {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}
.pill-applied { background: #ecfdf5; color: #059669; }
.pill-interview { background: #eef2ff; color: #4f46e5; }
.pill-rejected { background: #fef2f2; color: #dc2626; }
.pill-offer { background: #fffbeb; color: #d97706; }

.divider {
  border: 0;
  border-top: 1px solid #e5e7eb;
  margin: 25px 0;
}

.section {
  margin-bottom: 25px;
}

.section-label {
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
  font-weight: 600;
}

.label-bold {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  color: lightgray;
}

.notes-text {
  line-height: 1.5;
  margin: 0;
}

.text-muted {
  color: lightgray;
  font-style: italic;
}

.status-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-status {
  background: white;
  padding: 8px 16px;
  border-radius: 20px; 
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-applied { border-color: #059669; color: #059669; }
.btn-applied:hover { background-color: #ecfdf5; }

.btn-interview { border-color: #4f46e5; color: #4f46e5; }
.btn-interview:hover { background-color: #eef2ff; }

.btn-offer { border-color: #d97706; color: #d97706; }
.btn-offer:hover { background-color: #fffbeb; }

.btn-rejected { 
  background-color: red; 
  border-color: red; 
  color: white; 
}
.btn-rejected:hover { background-color: #dc2626; }

.delete-section {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
}

.btn-delete {
  width: 100%;
  background: white;
  border: 1px solid red;
  color: red;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-delete:hover {
  background-color: #fef2f2;
}

.icon-trash {
  width: 16px;
}
</style>