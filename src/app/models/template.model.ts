export interface Template {
    id: string,
    name: string,
    templateFile: string,
    componentSelector: string,
    thumbnail: string,
    section: string[],
    createdDate: string,
    timeInMillis: number,
    isSelected?: boolean
}

export interface TemplateDetails {
    name: string,
    description: string,
    thumbnail: string,
    availableSections: string[],
    themes?: Theme[],
    fontStyle: string
}

export interface Theme {
    id: string,
    name: string,
    colorPrimary: string,
    colorSecondary: string
}