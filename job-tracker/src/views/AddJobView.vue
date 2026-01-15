<template>
  <div class="page-container">
    <div class="form-card">
      <h2>Dodaj novu prijavu</h2>
      
      <form @submit.prevent="handleSubmit">
        <div class="form">
          <label>Naziv tvrtke</label>
          <input v-model="form.company" type="text" required>
        </div>

        <div class="form">
          <label>Pozicija</label>
          <input v-model="form.position" type="text" required>
        </div>

        <div class="form-row">
          <div class="form half-width">
            <label>Status</label>
            <select v-model="form.status">
              <option value="Applied">Prijavljeno</option>
              <option value="Interview">Intervju</option>
              <option value="Rejected">Odbijeno</option>
              <option value="Offer">Ponuda</option>
            </select>
          </div>

          <div class="form half-width">
            <label>Datum prijave</label>
            <input v-model="form.date" type="date" required>
          </div>
        </div>

        <div class="form">
          <label>Bilješke</label>
          <textarea v-model="form.notes" rows="2"></textarea>
        </div>

        <div class="buttons">
          <button type="button" class="btn-cancel" @click="cancel">Odustani</button>
          <button type="submit" class="btn-save">Spremi prijavu</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useJobStore } from '../stores/jobStore';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useJobStore();
    const router = useRouter();

    const form = reactive({
      company: '',
      position: '',
      status: 'Applied',
      date: new Date().toISOString().substr(0, 10),
      notes: ''
    });

    const handleSubmit = () => {
      store.addJob({ ...form }); 
      router.push('/'); 
    };

    const cancel = () => {
      router.push('/');
    };

    return { form, handleSubmit, cancel };
  }
}
</script>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 40px;
  min-height: 80vh;
}

.form-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  width: 100%;
  max-width: 550px;
  border: 1px solid gray;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-weight: 700;
}

.form {
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.half-width {
  flex: 1;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  color: gray;
}

input, select, textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid gray;
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: #fff;
  box-sizing: border-box;
  font-family: inherit;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: blue;
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  gap: 15px;
}

button {
  flex: 1;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
}

.btn-cancel {
  background-color: white;
  border: 1px solid gray;
  color: gray;
}

.btn-save {
  background-color: blue;
  border: 1px solid blue;
  color: white;
}

</style>