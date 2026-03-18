<route lang="yaml">
    name: spells
    meta:
     title: Varázslat adatlapja
</route>

<script setup>
import BaseTable from '@components/BaseTable.vue';
import { useSpellStore } from '@stores/SpellStore';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const spell = reactive({})
onMounted(async()=>{
    Object.assign(spell, await useSpellStore().getSpell(route.params.id))
})
</script>

<template>
    <h1 class="text-8xl font-bold text-right">{{ spell.name }}</h1>
    <div class="text-right mt-10">
        <RouterLink to="/spells/create" class="bg-indigo-400 text-white p-3 hover:bg-indigo-200 hover:text-indigo-800">Új varázslat</RouterLink>
    </div>
    <BaseTable :spell/>
</template>