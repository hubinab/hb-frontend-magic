<script setup>
import { computed } from 'vue';

const {spell} = defineProps({
    spell: Object
})

const style = computed(() => {
    switch (spell.difficulty) {
        case 'Kezdő': return 'text-green-600'
        case 'Középhaladó': return 'text-yellow-600'
        case 'Profi': return 'text-amber-600'
        case 'Mester': return 'text-red-600'
    }
})
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Cél</th>
                <th>Nehézség</th>
                <th>Varázslóiskola</th>
                <th>Működés</th>
                <th>Mana költség</th>
                <th>Leírás</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ spell.target }}</td>
                <td :class="style">{{ spell.difficulty }}</td>
                <td>{{ spell?.school?.[0]?.name }}</td>
                <td class="bg-indigo-600 text-white rounded-lg p-2">{{ spell.isVerbal }}</td>
                <td>{{ spell.manaCost }}</td>
                <td>{{ spell.description }}</td>
            </tr>
        </tbody>
    </table>
</template>