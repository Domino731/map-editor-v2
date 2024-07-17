export enum LeftColumnTab {
    Tree = "Tree",
    SaveLoad = "SaveLoad",
    Settings = "Settings"
}

export type LeftColumnTabUnion = keyof typeof LeftColumnTab;