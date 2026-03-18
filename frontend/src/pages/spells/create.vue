<route lang="yaml">
    name: create-spell
    meta:
     title: Új varázslat
</route>
<script setup>
import { reactive } from 'vue';
import { useSchoolStore } from '@stores/SchoolStore';
import { useSpellStore } from '@stores/SpellStore';
import { useRouter } from 'vue-router';

const router = useRouter()

const form = reactive({
    name: "",
    description: "",
    manaCost: "",
    difficulty: "",
    target: "",
    isVerbal: false,
    school_id: ""
})

async function submitForm() {
    await useSpellStore().createSpell(form)
    router.push({name: 'index'})
}
</script>
<template>
    <form @submit.prevent="submitForm" class="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Új varázslat létrehozása</h2>

        <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-slate-700 mb-1">Varázslat neve</label>
            <input type="text" id="name" name="name" v-model="form.name" minlength="4" maxlength="35"
                class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required>
        </div>
        <div class="mb-4">
            <label for="target" class="block text-sm font-medium text-slate-700 mb-1">Cél</label>
            <input type="text" id="target" name="target" v-model="form.target"
                class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required>
        </div>

        <div class="mb-4">
            <label for="difficulti" class="block text-sm font-medium text-slate-700 mb-1">Nehézség</label>
            <select id="difficulti" name="difficulti" v-model="form.difficulty"
                class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required>
                <option value="Kezdő">Kezdő</option>
                <option value="Középhaladó">Középhaladó</option>
                <option value="Profi">Profi</option>
                <option value="Mester">Mester</option>
            </select>
        </div>
        <div class="mb-4">
            <label for="school" class="block text-sm font-medium text-slate-700 mb-1">Varázslóiskola</label>
            <select id="school" name="school_id" v-model="form.school_id"
                class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required>
                <option value="">Válasszon iskolát...</option>
                <option v-for="school of useSchoolStore().schools" :key="school.id" :value="school.id">{{ school.name }}</option>
            </select>
        </div>

        <div class="mb-4">
            <label for="isVerbal" class="block text-sm font-medium text-slate-700 mb-1">Működés</label>
            <select id="isVerbal" name="isVerbal" v-model="form.isVerbal"
                class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required>
                <option value="true">Varázsige</option>
                <option value="false">Varázsital</option>
            </select>
        </div>

        <div class="mb-4">
            <label for="manaCost" class="block text-sm font-medium text-slate-700 mb-1">Mana költség</label>
            <input type="number" id="manaCost" name="manaCost" v-model="form.manaCost" min="5" max="100"
                class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required>
        </div>

        <div class="mb-6">
            <label for="description" class="block text-sm font-medium text-slate-700 mb-1">Leírás</label>
            <textarea id="description" name="description" rows="3" v-model="form.description" maxlength="200" required
                class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>

        <div class="flex justify-end gap-3">
            <button type="submit"
                class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm">Varázslat
                mentése</button>
        </div>
    </form>    
</template>