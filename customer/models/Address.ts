/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { AddressStatus } from './AddressStatus';
import {
    AddressStatusFromJSON,
    AddressStatusFromJSONTyped,
    AddressStatusToJSON,
} from './AddressStatus';

/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    category: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    provinceState: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    city: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    postalCode: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    streetLine1: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    streetLine2: string | null;
    /**
     * 
     * @type {AddressStatus}
     * @memberof Address
     */
    status?: AddressStatus | null;
    /**
     * 
     * @type {boolean}
     * @memberof Address
     */
    isPrimary: boolean | null;
    /**
     * 
     * @type {object}
     * @memberof Address
     */
    meta?: object | null;
    /**
     * 
     * @type {Date}
     * @memberof Address
     */
    created?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Address
     */
    updated?: Date;
}

/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "provinceState" in value;
    isInstance = isInstance && "city" in value;
    isInstance = isInstance && "postalCode" in value;
    isInstance = isInstance && "streetLine1" in value;
    isInstance = isInstance && "streetLine2" in value;
    isInstance = isInstance && "isPrimary" in value;

    return isInstance;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'category': json['category'],
        'country': json['country'],
        'provinceState': json['province_state'],
        'city': json['city'],
        'postalCode': json['postal_code'],
        'streetLine1': json['street_line1'],
        'streetLine2': json['street_line2'],
        'status': !exists(json, 'status') ? undefined : AddressStatusFromJSON(json['status']),
        'isPrimary': json['is_primary'],
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'updated': !exists(json, 'updated') ? undefined : (new Date(json['updated'])),
    };
}

export function AddressToJSON(value?: Address | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'category': value.category,
        'country': value.country,
        'province_state': value.provinceState,
        'city': value.city,
        'postal_code': value.postalCode,
        'street_line1': value.streetLine1,
        'street_line2': value.streetLine2,
        'status': AddressStatusToJSON(value.status),
        'is_primary': value.isPrimary,
        'meta': value.meta,
        'created': value.created === undefined ? undefined : (value.created.toISOString()),
        'updated': value.updated === undefined ? undefined : (value.updated.toISOString()),
    };
}

