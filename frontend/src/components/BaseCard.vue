<script setup>
const {spell} = defineProps({
    spell: Object
})

const school_name = () => {
    if (Array.isArray(spell.school)) {
        return spell.school?.[0]?.name
    }
    else {
        return spell.school?.name
    }
}

</script>

<template>
    <div class="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer p-4">
        <h3 class="text-xl font-semibold text-slate-800 mb-1"><RouterLink :to="{name: 'spells', params: {id: spell.id}}">{{ spell.name }}</RouterLink></h3>
        <p class="text-sm text-slate-500 mb-3">{{ school_name() }}</p>
        <div class="flex justify-between items-center text-sm">
            <span class="px-2 py-1 bg-blue-50 text-blue-700 rounded-md">Mana: {{ spell.manaCost }}</span>
            <span class="text-slate-600">Nehézség: {{ spell.difficulty }}</span>
        </div>
    </div>
</template>