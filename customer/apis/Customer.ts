/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


import * as runtime from '../../runtime';
import type {
  CreateCustomer400Response,
  Customer,
  CustomerRequest,
  GetCustomerByReferenceID200Response,
  GetCustomerByReferenceID400Response,
  PatchCustomer,
  ResponseDataNotFound,
  UpdateCustomer400Response,
} from '../models';
import {
    CreateCustomer400ResponseFromJSON,
    CreateCustomer400ResponseToJSON,
    CustomerFromJSON,
    CustomerToJSON,
    CustomerRequestFromJSON,
    CustomerRequestToJSON,
    GetCustomerByReferenceID200ResponseFromJSON,
    GetCustomerByReferenceID200ResponseToJSON,
    GetCustomerByReferenceID400ResponseFromJSON,
    GetCustomerByReferenceID400ResponseToJSON,
    PatchCustomerFromJSON,
    PatchCustomerToJSON,
    ResponseDataNotFoundFromJSON,
    ResponseDataNotFoundToJSON,
    UpdateCustomer400ResponseFromJSON,
    UpdateCustomer400ResponseToJSON,
} from '../models';

export interface CreateCustomerRequest {
    iDEMPOTENCYKEY?: string;
    forUserId?: string;
    idempotencyKey?: string;
    data?: CustomerRequest;
}

export interface GetCustomerRequest {
    id: string;
    forUserId?: string;
    idempotencyKey?: string;
}

export interface GetCustomerByReferenceIDRequest {
    referenceId: string;
    forUserId?: string;
    idempotencyKey?: string;
}

export interface UpdateCustomerRequest {
    id: string;
    forUserId?: string;
    idempotencyKey?: string;
    data?: PatchCustomer;
}

/**
 * 
 */
export class CustomerApi extends runtime.BaseAPI {

    secretKey: string = "";
    xenditURL: string = "";

    constructor({secretKey, xenditURL}: {secretKey: string, xenditURL?: string}) {
        const conf = new runtime.Configuration({
            basePath: xenditURL || 'https://api.xendit.co'
        })
        super(conf)
        this.secretKey = secretKey;
    }

    /**
     * Function to create a customer that you may use in your Invoice or Payment Requests. For detail explanations, see this link: https://developers.xendit.co/api-reference/#create-customer
     * Create Customer
     */
    private async createCustomerRaw(requestParameters: CreateCustomerRequest): Promise<runtime.ApiResponse<Customer>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.iDEMPOTENCYKEY !== undefined && requestParameters.iDEMPOTENCYKEY !== null) {
            headerParameters['IDEMPOTENCY-KEY'] = String(requestParameters.iDEMPOTENCYKEY);
        }

        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
            headerParameters['for-user-id'] = String(requestParameters.forUserId);
        }

        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
        }

        const response = await this.request({
            path: `/customers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerRequestToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Function to create a customer that you may use in your Invoice or Payment Requests. For detail explanations, see this link: https://developers.xendit.co/api-reference/#create-customer
     * Create Customer
     */
    async createCustomer(requestParameters: CreateCustomerRequest = {}): Promise<Customer> {
        const response = await this.createCustomerRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieves a single customer object For detail explanations, see this link: https://developers.xendit.co/api-reference/#get-customer
     * Get Customer By ID
     */
    private async getCustomerRaw(requestParameters: GetCustomerRequest): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCustomer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");

        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
            headerParameters['for-user-id'] = String(requestParameters.forUserId);
        }

        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
        }

        const response = await this.request({
            path: `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Retrieves a single customer object For detail explanations, see this link: https://developers.xendit.co/api-reference/#get-customer
     * Get Customer By ID
     */
    async getCustomer(requestParameters: GetCustomerRequest): Promise<Customer> {
        const response = await this.getCustomerRaw(requestParameters);
        return await response.value();
    }

    /**
     * Retrieves an array with a customer object that matches the provided reference_id - the identifier provided by you For detail explanations, see this link: https://developers.xendit.co/api-reference/#get-customer-by-reference-id
     * GET customers by reference id
     */
    private async getCustomerByReferenceIDRaw(requestParameters: GetCustomerByReferenceIDRequest): Promise<runtime.ApiResponse<GetCustomerByReferenceID200Response>> {
        if (requestParameters.referenceId === null || requestParameters.referenceId === undefined) {
            throw new runtime.RequiredError('referenceId','Required parameter requestParameters.referenceId was null or undefined when calling getCustomerByReferenceID.');
        }

        const queryParameters: any = {};

        if (requestParameters.referenceId !== undefined) {
            queryParameters['reference_id'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");

        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
            headerParameters['for-user-id'] = String(requestParameters.forUserId);
        }

        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
        }

        const response = await this.request({
            path: `/customers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => GetCustomerByReferenceID200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves an array with a customer object that matches the provided reference_id - the identifier provided by you For detail explanations, see this link: https://developers.xendit.co/api-reference/#get-customer-by-reference-id
     * GET customers by reference id
     */
    async getCustomerByReferenceID(requestParameters: GetCustomerByReferenceIDRequest): Promise<GetCustomerByReferenceID200Response> {
        const response = await this.getCustomerByReferenceIDRaw(requestParameters);
        return await response.value();
    }

    /**
     * Function to update an existing customer. For a detailed explanation For detail explanations, see this link: https://developers.xendit.co/api-reference/#update-customer
     * Update End Customer Resource
     */
    private async updateCustomerRaw(requestParameters: UpdateCustomerRequest): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateCustomer.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};
        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
            headerParameters['for-user-id'] = String(requestParameters.forUserId);
        }

        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
        }

        const response = await this.request({
            path: `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchCustomerToJSON(requestParameters.data),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Function to update an existing customer. For a detailed explanation For detail explanations, see this link: https://developers.xendit.co/api-reference/#update-customer
     * Update End Customer Resource
     */
    async updateCustomer(requestParameters: UpdateCustomerRequest): Promise<Customer> {
        const response = await this.updateCustomerRaw(requestParameters);
        return await response.value();
    }

}
