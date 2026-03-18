<script setup>
import { useSchoolStore } from '@stores/SchoolStore';
import { useSpellStore } from '@stores/SpellStore';

useSpellStore().getSpells()
useSchoolStore().getSchools()
</script>

<template>
  <RouterView />
</template>
