export enum Modals {
    ObjectDetails = "ObjectDetails",
    EntityDetails = "EntityDetails"
}

export type ModalsUnion = keyof typeof Modals;