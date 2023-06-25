import { CHIP_TYPE } from "@app/constants/enums"
import { FormField } from "./field.model"

export interface Section {
    id: string,
    title: string,
    key: string,
    subHeading: string,
    isMandatory: boolean,
    isMultiple: boolean,
    chipDetails: {
        chipType: CHIP_TYPE,
        chipTitle: string,
        chipSubTitle?: string
    }
    fieldsList: FormField[],
    fields: string[],
    hints?: Object[]
}

export interface SectionList {
    id: number,
    title: string,
    isMandatory: boolean,
    isSelected?: boolean
}