/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * Virtual Account Channel Code
 * @export
 */
export const VirtualAccountChannelCode = {
    Bca: 'BCA',
    Bjb: 'BJB',
    Bni: 'BNI',
    Bri: 'BRI',
    Mandiri: 'MANDIRI',
    Permata: 'PERMATA',
    Bsi: 'BSI',
    Cimb: 'CIMB',
    SahabatSampoerna: 'SAHABAT_SAMPOERNA',
    Artajasa: 'ARTAJASA',
    Pv: 'PV',
    Vietcapital: 'VIETCAPITAL',
    Woori: 'WOORI',
    Msb: 'MSB',
    StandardChartered: 'STANDARD_CHARTERED'
} as const;
export type VirtualAccountChannelCode = typeof VirtualAccountChannelCode[keyof typeof VirtualAccountChannelCode];


export function VirtualAccountChannelCodeFromJSON(json: any): VirtualAccountChannelCode {
    return VirtualAccountChannelCodeFromJSONTyped(json, false);
}

export function VirtualAccountChannelCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualAccountChannelCode {
    return json as VirtualAccountChannelCode;
}

export function VirtualAccountChannelCodeToJSON(value?: VirtualAccountChannelCode | null): any {
    return value as any;
}

