<template>
  <section>
    <coach-filter @change-filter='setFilter'></coach-filter>
  </section>
  <section>
   <base-card>
     <div class='controls'>
       <base-button
         :mode='"outline"'
         :link='false'
       >Refresh
       </base-button>
       <base-button
         link
         :to='"/register"'
       >Register as Coach</base-button>
     </div>
     <ul v-if='hasCoaches'>
       <coach-item
         v-for='coach in filterList'
         :key='coach.id'
         :id='coach.id'
         :lastName='coach.lastName'
         :firstName='coach.firstName'
         :rate='coach.hourlyRate'
         :areas='coach.areas'
       ></coach-item>
     </ul>
     <h3 v-else> No coaches found !!</h3>
   </base-card>
  </section>
</template>
<script>

import { mapGetters } from 'vuex';
import CoachItem from '@/components/coaches/CoachItem.vue';
import CoachFilter from '@/components/coaches/CoachFilter.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  components: { BaseButton, CoachItem, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    filterList() {
      return this.filteredCoaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      })
    },
    ...mapGetters(['filteredCoaches', 'hasCoaches'])
  },
  methods: {
    setFilter(updatedFilter) {
      this.activeFilters = updatedFilter;
    }
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>