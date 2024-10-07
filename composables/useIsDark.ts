export const useIsDark = () =>{

    const theme = useThemeStore();
    let isDark = computed<boolean>(()=>{ return theme.get_theme })

    return isDark.value
}