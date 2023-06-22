import { INPUT_FORMAT_TYPES, INPUT_TYPES } from "@app/constants/enums"

export interface FormField {
    id: string,
    label: string,
    type: INPUT_TYPES,
    format: INPUT_FORMAT_TYPES,
    placeholderText?: string,
    spanSize: number,
    validationRules?: ValidationRules[],
    groupSpan?: number,
    groupFields?: string[],
    options?: SelectOption[]
}

export interface ValidationRules {
    ruleName: string,
    errorMessage: string,
    prop?: string
}

export interface SelectOption {
    id: string,
    value: string
}