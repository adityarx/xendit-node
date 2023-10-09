/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * 
 * @export
 * @interface GetCustomerByReferenceID400Response
 */
export interface GetCustomerByReferenceID400Response {
    /**
     * 
     * @type {string}
     * @memberof GetCustomerByReferenceID400Response
     */
    errorCode: GetCustomerByReferenceID400ResponseErrorCodeEnum;
    /**
     * 
     * @type {any}
     * @memberof GetCustomerByReferenceID400Response
     */
    message: any | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof GetCustomerByReferenceID400Response
     */
    errors?: Array<object>;
}


/**
 * @export
 */
export const GetCustomerByReferenceID400ResponseErrorCodeEnum = {
    EntityNotFoundError: 'ENTITY_NOT_FOUND_ERROR',
    ClientNotFoundError: 'CLIENT_NOT_FOUND_ERROR',
    EndCustomerNotFoundError: 'END_CUSTOMER_NOT_FOUND_ERROR',
    ApiValidationError: 'API_VALIDATION_ERROR'
} as const;
export type GetCustomerByReferenceID400ResponseErrorCodeEnum = typeof GetCustomerByReferenceID400ResponseErrorCodeEnum[keyof typeof GetCustomerByReferenceID400ResponseErrorCodeEnum];


/**
 * Check if a given object implements the GetCustomerByReferenceID400Response interface.
 */
export function instanceOfGetCustomerByReferenceID400Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errorCode" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function GetCustomerByReferenceID400ResponseFromJSON(json: any): GetCustomerByReferenceID400Response {
    return GetCustomerByReferenceID400ResponseFromJSONTyped(json, false);
}

export function GetCustomerByReferenceID400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCustomerByReferenceID400Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': json['error_code'],
        'message': json['message'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function GetCustomerByReferenceID400ResponseToJSON(value?: GetCustomerByReferenceID400Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error_code': value.errorCode,
        'message': value.message,
        'errors': value.errors,
    };
}

