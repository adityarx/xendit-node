/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * 
 * @export
 */
export const KYCDocumentSubType = {
    NationalId: 'NATIONAL_ID',
    ConsularId: 'CONSULAR_ID',
    VoterId: 'VOTER_ID',
    PostalId: 'POSTAL_ID',
    ResidencePermit: 'RESIDENCE_PERMIT',
    TaxId: 'TAX_ID',
    StudentId: 'STUDENT_ID',
    MilitaryId: 'MILITARY_ID',
    MedicalId: 'MEDICAL_ID',
    Others: 'OTHERS'
} as const;
export type KYCDocumentSubType = typeof KYCDocumentSubType[keyof typeof KYCDocumentSubType];


export function KYCDocumentSubTypeFromJSON(json: any): KYCDocumentSubType {
    return KYCDocumentSubTypeFromJSONTyped(json, false);
}

export function KYCDocumentSubTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): KYCDocumentSubType {
    return json as KYCDocumentSubType;
}

export function KYCDocumentSubTypeToJSON(value?: KYCDocumentSubType | null): any {
    return value as any;
}

