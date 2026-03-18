<script setup>
import BaseCard from '@components/BaseCard.vue';
import BaseLayout from '@layouts/BaseLayout.vue'
import { useSpellStore } from '@stores/SpellStore';
</script>

<template>
  <BaseLayout>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <BaseCard v-for="spell of useSpellStore().spells" :key="spell.id" :spell/>
    </div>
  </BaseLayout>
</template>

<route lang="yaml">
name: index
meta:
  title: Főoldal
</route>
