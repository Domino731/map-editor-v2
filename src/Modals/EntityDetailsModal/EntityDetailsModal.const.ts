export enum EntityDetailsModalTabs {
    Animations = "Animations",
    Areas = "Areas",
    General = "General",
    Drop = "Drop"
}

export type EntityDetailsModalTabsUnion = keyof typeof EntityDetailsModalTabs;