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
export const KYCDocumentType = {
    BirthCertificate: 'BIRTH_CERTIFICATE',
    BankStatement: 'BANK_STATEMENT',
    DrivingLicense: 'DRIVING_LICENSE',
    IdentityCard: 'IDENTITY_CARD',
    Passport: 'PASSPORT',
    Visa: 'VISA',
    BusinessRegistration: 'BUSINESS_REGISTRATION',
    BusinessLicense: 'BUSINESS_LICENSE'
} as const;
export type KYCDocumentType = typeof KYCDocumentType[keyof typeof KYCDocumentType];


export function KYCDocumentTypeFromJSON(json: any): KYCDocumentType {
    return KYCDocumentTypeFromJSONTyped(json, false);
}

export function KYCDocumentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): KYCDocumentType {
    return json as KYCDocumentType;
}

export function KYCDocumentTypeToJSON(value?: KYCDocumentType | null): any {
    return value as any;
}

