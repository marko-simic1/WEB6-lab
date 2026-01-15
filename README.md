URL aplikacije: https://web6-lab.onrender.com/

POPIS SVOJSTAVA APLIKACIJE:

1. interpolation/one-way binding
- Da, src/components/JobCard.vue. Koristi se {{ job.company }} za prikaz naziva tvrtke.

2. two-way binding
- Da, src/views/AddJobView.vue. Koristi se v-model="form.company" za povezivanje input polja s podacima.

3. methods
- Da, src/views/AddJobView.vue, metoda handleSubmit() za slanje forme.
- Da, src/components/JobCard.vue, metoda goToDetails() za navigaciju.

4. computed properties
- Da, src/stores/jobStore.js, getteri (appliedCount, interviewCount...) za izračun statistike.
- Da, src/components/JobCard.vue, statusClass() za određivanje boje statusa.

5. barem jedan scoped style
- Da, sve komponente (npr. src/components/JobCard.vue) koriste <style scoped>.

6. koristiti barem jedan lifecycle hook
- Da, src/views/HomeView.vue, onMounted() hook koji poziva store.fetchJobs() pri učitavanju.

7. routing (više stranica), bookmarkable
- Da, src/router/index.js. Definirane rute za Home, AddJob i JobDetail. Linkovi rade direktno.

8. dinamičko usmjeravanje s 404 stranicom ("catch all")
- Da, src/router/index.js. Ruta '/job/:id' za detalje i '/:pathMatch(.*)*' za 404 grešku.

9. komponenta bez stanja, koristiti properties
- Da, src/components/JobCard.vue. Prima 'job' kroz props i samo prikazuje podatke.

10. komponenta sa stanjem
- Da, src/views/AddJobView.vue. Ima lokalno reaktivno stanje 'form'.

11. barem jedna komponenta mora emitirati barem jedan event
- Da, src/components/JobCard.vue emitira 'delete-job' event kada se klikne na X.

12. store (Pinia)
- Da, src/stores/jobStore.js. Koristi se za centralno stanje poslova i akcije.

13. asinkroni dohvat podataka s backenda (Mock)
- Da, src/stores/jobStore.js, akcija fetchJobs(). Koristi setTimeout i Promise za simulaciju asinkronog poziva.

14. ostvariti asinkrono (lazy) učitavanje dijela aplikacije
- Da, src/router/index.js. Komponente AddJobView i JobDetailView se učitavaju koristeći import().

KAKO POKRENUTI KOD:
1. Otpakirati zip arhivu.
2. Otvoriti terminal u folderu projekta.
3. Pokrenuti naredbu: npm install
4. Pokrenuti naredbu: npm run dev
