import type {IFlowerType, IPrice} from "~/types/types";

export const useFilterStore = defineStore('filterStore', () => {
    const price = ref<IPrice>({
        min: null,
        max: null
    })
    const composition = ref<IFlowerType['id'][]>([])
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
})
