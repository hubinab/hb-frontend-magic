import { defineStore } from "pinia";
import { reactive } from "vue";
import { api } from "@utils/http.mjs";

export const useSchoolStore = defineStore('schools', () => {
    const schools = reactive([])

    async function getSchools() {
        const response = await api.get('schools')
        Object.assign(schools, response.data.data)
    }

    return {
        schools,
        getSchools
    }

}) 
