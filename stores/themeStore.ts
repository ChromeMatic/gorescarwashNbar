import { defineStore } from 'pinia'

export const useThemeStore =defineStore('themeStore',{

    state:()=>({ theme: false as boolean }),

    getters:{
        get_theme: (state) => state.theme,
    },

    actions:{
        change_theme(){ this.theme = !this.theme }
    }
})