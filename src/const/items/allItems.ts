export const AllItems = [
    {
        id: 'wood',
        name: "Wood"
    },
    {
        id: 'wheat_seed',
        name: "Wheat seed"
    }
]
export const findItem = (id: string) => AllItems.find(el => el.id === id);