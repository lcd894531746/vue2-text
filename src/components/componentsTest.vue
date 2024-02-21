<template>
  <div>
    <v-region-selects @change="regionChange" />
  </div>
</template>

<script>
import { RegionSelects } from "v-region";

export default {
  components: {
    RegionSelects,
  },
  methods: {
    // Responding to data changes
    regionChange(data) {
      console.log(data);
    },
  },
};
</script>