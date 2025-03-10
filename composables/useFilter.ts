export function useFilter() {
    const composition = ref([])
    const price = ref<{min: number | null, max: number | null}>({
        min: null,
        max: null
    })
    const reasons = ref([])
    const recipients = ref([])
    const sizes = ref([])

    return {
        composition,
        price,
        reasons,
        recipients,
        sizes
    }
}
