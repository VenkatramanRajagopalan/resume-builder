export interface Section {
    id: string,
    title: string,
    key: string,
    isMandatory: boolean,
    isMultiple: boolean,
    hints?: Object[],
    fields: string[]
}

export interface SectionList {
    id: number,
    title: string,
    isMandatory: boolean,
    isSelected?: boolean
}