/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { AddressRequest } from './AddressRequest';
import {
    AddressRequestFromJSON,
    AddressRequestFromJSONTyped,
    AddressRequestToJSON,
} from './AddressRequest';
import type { BusinessDetail } from './BusinessDetail';
import {
    BusinessDetailFromJSON,
    BusinessDetailFromJSONTyped,
    BusinessDetailToJSON,
} from './BusinessDetail';
import type { IdentityAccountRequest } from './IdentityAccountRequest';
import {
    IdentityAccountRequestFromJSON,
    IdentityAccountRequestFromJSONTyped,
    IdentityAccountRequestToJSON,
} from './IdentityAccountRequest';
import type { IndividualDetail } from './IndividualDetail';
import {
    IndividualDetailFromJSON,
    IndividualDetailFromJSONTyped,
    IndividualDetailToJSON,
} from './IndividualDetail';
import type { KYCDocumentRequest } from './KYCDocumentRequest';
import {
    KYCDocumentRequestFromJSON,
    KYCDocumentRequestFromJSONTyped,
    KYCDocumentRequestToJSON,
} from './KYCDocumentRequest';

/**
 * 
 * @export
 * @interface CustomerRequest
 */
export interface CustomerRequest {
    /**
     * Entity's name for this client
     * @type {string}
     * @memberof CustomerRequest
     */
    clientName?: string;
    /**
     * Merchant's reference of this end customer, eg Merchant's user's id. Must be unique.
     * @type {string}
     * @memberof CustomerRequest
     */
    referenceId: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerRequest
     */
    type?: CustomerRequestTypeEnum;
    /**
     * 
     * @type {IndividualDetail}
     * @memberof CustomerRequest
     */
    individualDetail?: IndividualDetail | null;
    /**
     * 
     * @type {BusinessDetail}
     * @memberof CustomerRequest
     */
    businessDetail?: BusinessDetail | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerRequest
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerRequest
     */
    mobileNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerRequest
     */
    phoneNumber?: string;
    /**
     * 
     * @type {Array<AddressRequest>}
     * @memberof CustomerRequest
     */
    addresses?: Array<AddressRequest>;
    /**
     * 
     * @type {Array<IdentityAccountRequest>}
     * @memberof CustomerRequest
     */
    identityAccounts?: Array<IdentityAccountRequest>;
    /**
     * 
     * @type {Array<KYCDocumentRequest>}
     * @memberof CustomerRequest
     */
    kycDocuments?: Array<KYCDocumentRequest>;
    /**
     * 
     * @type {object}
     * @memberof CustomerRequest
     */
    metadata?: object;
}


/**
 * @export
 */
export const CustomerRequestTypeEnum = {
    Individual: 'INDIVIDUAL',
    Business: 'BUSINESS'
} as const;
export type CustomerRequestTypeEnum = typeof CustomerRequestTypeEnum[keyof typeof CustomerRequestTypeEnum];


/**
 * Check if a given object implements the CustomerRequest interface.
 */
export function instanceOfCustomerRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "referenceId" in value;

    return isInstance;
}

export function CustomerRequestFromJSON(json: any): CustomerRequest {
    return CustomerRequestFromJSONTyped(json, false);
}

export function CustomerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clientName': !exists(json, 'client_name') ? undefined : json['client_name'],
        'referenceId': json['reference_id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'individualDetail': !exists(json, 'individual_detail') ? undefined : IndividualDetailFromJSON(json['individual_detail']),
        'businessDetail': !exists(json, 'business_detail') ? undefined : BusinessDetailFromJSON(json['business_detail']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'mobileNumber': !exists(json, 'mobile_number') ? undefined : json['mobile_number'],
        'phoneNumber': !exists(json, 'phone_number') ? undefined : json['phone_number'],
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<any>).map(AddressRequestFromJSON)),
        'identityAccounts': !exists(json, 'identity_accounts') ? undefined : ((json['identity_accounts'] as Array<any>).map(IdentityAccountRequestFromJSON)),
        'kycDocuments': !exists(json, 'kyc_documents') ? undefined : ((json['kyc_documents'] as Array<any>).map(KYCDocumentRequestFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function CustomerRequestToJSON(value?: CustomerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'client_name': value.clientName,
        'reference_id': value.referenceId,
        'type': value.type,
        'individual_detail': IndividualDetailToJSON(value.individualDetail),
        'business_detail': BusinessDetailToJSON(value.businessDetail),
        'description': value.description,
        'email': value.email,
        'mobile_number': value.mobileNumber,
        'phone_number': value.phoneNumber,
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(AddressRequestToJSON)),
        'identity_accounts': value.identityAccounts === undefined ? undefined : ((value.identityAccounts as Array<any>).map(IdentityAccountRequestToJSON)),
        'kyc_documents': value.kycDocuments === undefined ? undefined : ((value.kycDocuments as Array<any>).map(KYCDocumentRequestToJSON)),
        'metadata': value.metadata,
    };
}

