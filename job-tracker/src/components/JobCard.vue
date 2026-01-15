<template>
  <div class="card" @click="goToDetails">
    <div class="card-header">
      <h3 class="company-name">{{ job.company }}</h3>
      <button class="delete-icon" @click.stop="$emit('delete-job', job.id)"> &times; </button>
    </div>
    
    <div class="status-row">
       <span class="status-pill" :class="statusClass">{{ job.status }}</span>
    </div>
    
    <p class="role-title">{{ job.position }}</p>
    
    <div class="card-footer">
      <div class="date-container">
        <span class="date-text">Datum: {{ new Date(job.date).toLocaleDateString('hr-HR') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    job: { type: Object, required: true }
  },
  emits: ['delete-job'], 
  computed: {
    statusClass() {
      return {
        'status-applied': this.job.status === 'Applied',
        'status-interview': this.job.status === 'Interview',
        'status-rejected': this.job.status === 'Rejected',
        'status-offer': this.job.status === 'Offer'
      }
    }
  },
  methods: {
    goToDetails() {
      this.$router.push('/job/' + this.job.id);
    }
  }
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid lightgray;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.company-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.delete-icon {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: gray;
  cursor: pointer;
  padding: 0 5px;
  line-height: 1;
}

.delete-icon:hover {
  color: red; 
}

.status-row {
  margin-top: 8px;
  margin-bottom: 8px;
}

.role-title {
  color: gray;
  font-size: 0.95rem;
  margin: 0 0 20px 0;
}

.status-pill {
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
  display: inline-block;
}

.status-applied { background-color: #ecfdf5; color: #059669; }
.status-interview { background-color: #eef2ff; color: #4f46e5; }
.status-rejected { background-color: #fef2f2; color: #dc2626; }
.status-offer { background-color: #fffbeb; color: #d97706; }

.card-footer {
  border-top: 1px solid #f3f4f6c6;
  padding-top: 12px;
  margin-top: auto;
}

.date-container {
  display: flex;
  align-items: center;
  gap: 6px;
  color: gray;
  font-size: 0.8rem;
}
</style>