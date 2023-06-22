export interface TemplateList {
    name: string,
    templateFile: string,
    thumbnail: string,
    section: string[],
    createdDate: string,
    timeInMillis: number
}

export interface Template {
    name: string,
    description: string,
    thumbnail: string,
    availableSections: string[],
    themes?: Theme[],
    fontStyle: string
}

export interface Theme {
    colorPrimary: string,
    colorSecondary: string
}