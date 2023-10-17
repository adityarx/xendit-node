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
 * @interface PaymentRequestBasketItem
 */
export interface PaymentRequestBasketItem {
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    referenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    category: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    subCategory?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    currency: string;
    /**
     * 
     * @type {number}
     * @memberof PaymentRequestBasketItem
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof PaymentRequestBasketItem
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    payerChargedCurrency?: string;
    /**
     * 
     * @type {number}
     * @memberof PaymentRequestBasketItem
     */
    payerChargedPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    url?: string;
    /**
     * 
     * @type {object}
     * @memberof PaymentRequestBasketItem
     */
    metadata?: object;
}

/**
 * Check if a given object implements the PaymentRequestBasketItem interface.
 */
export function instanceOfPaymentRequestBasketItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "quantity" in value;
    isInstance = isInstance && "price" in value;

    return isInstance;
}

export function PaymentRequestBasketItemFromJSON(json: any): PaymentRequestBasketItem {
    return PaymentRequestBasketItemFromJSONTyped(json, false);
}

export function PaymentRequestBasketItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestBasketItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'referenceId': !exists(json, 'reference_id') ? undefined : json['reference_id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'category': json['category'],
        'subCategory': !exists(json, 'sub_category') ? undefined : json['sub_category'],
        'currency': json['currency'],
        'quantity': json['quantity'],
        'price': json['price'],
        'payerChargedCurrency': !exists(json, 'payer_charged_currency') ? undefined : json['payer_charged_currency'],
        'payerChargedPrice': !exists(json, 'payer_charged_price') ? undefined : json['payer_charged_price'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function PaymentRequestBasketItemToJSON(value?: PaymentRequestBasketItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reference_id': value.referenceId,
        'name': value.name,
        'description': value.description,
        'type': value.type,
        'category': value.category,
        'sub_category': value.subCategory,
        'currency': value.currency,
        'quantity': value.quantity,
        'price': value.price,
        'payer_charged_currency': value.payerChargedCurrency,
        'payer_charged_price': value.payerChargedPrice,
        'url': value.url,
        'metadata': value.metadata,
    };
}
