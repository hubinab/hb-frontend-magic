import { defineStore } from "pinia";
import { reactive } from "vue";
import { api } from "@utils/http.mjs";

export const useSpellStore = defineStore('spells', ()=>{
    const spells = reactive([])

    async function getSpells() {
        const response = await api.get('spells')
        Object.assign(spells, response.data.data)
    }

    async function getSpell(id) {
        const response = await api.get(`spells/${id}`)
        return response.data.data
    }

    async function createSpell(data) {
        const response = await api.post('spells', data)
        spells.push(response.data.data)
    }

    return {
        spells,
        getSpells,
        getSpell,
        createSpell
    }
})
