import { defineStore } from 'pinia'

export const useJobStore = defineStore('jobStore', {
  state: () => ({
    jobs: [],
    loading: false
  }),
  getters: {
    totalApplications: (state) => state.jobs.length,
    appliedCount: (state) => state.jobs.filter(j => j.status === 'Applied').length,
    interviewCount: (state) => state.jobs.filter(j => j.status === 'Interview').length,
    offerCount: (state) => state.jobs.filter(j => j.status === 'Offer').length,
    rejectedCount: (state) => state.jobs.filter(j => j.status === 'Rejected').length
  },
  actions: {
    async fetchJobs() {
      if (this.jobs.length > 0) return;
      this.loading = true;
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const response = await fetch('/jobs.json');
        if (!response.ok) throw new Error('Greška');
        this.jobs = await response.json();
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    addJob(newJob) {
      newJob.id = Date.now();
      this.jobs.push(newJob);
    },
    deleteJob(id) {
      this.jobs = this.jobs.filter(j => j.id !== id);
    },
    updateStatus(id, newStatus) {
      const job = this.jobs.find(j => j.id === id);
      if (job) job.status = newStatus;
    }
  }
})