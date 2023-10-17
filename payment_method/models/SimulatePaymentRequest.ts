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
 * @interface SimulatePaymentRequest
 */
export interface SimulatePaymentRequest {
    /**
     * 
     * @type {number}
     * @memberof SimulatePaymentRequest
     */
    amount?: number;
}

/**
 * Check if a given object implements the SimulatePaymentRequest interface.
 */
export function instanceOfSimulatePaymentRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SimulatePaymentRequestFromJSON(json: any): SimulatePaymentRequest {
    return SimulatePaymentRequestFromJSONTyped(json, false);
}

export function SimulatePaymentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimulatePaymentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
    };
}

export function SimulatePaymentRequestToJSON(value?: SimulatePaymentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
    };
}
