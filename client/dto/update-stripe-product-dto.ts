/* tslint:disable */
/* eslint-disable */
/**
 * Final project\'s back-end API
 * Back-end API for final-project
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface UpdateStripeProductDto
 */
export interface UpdateStripeProductDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateStripeProductDto
     */
    'name'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateStripeProductDto
     */
    'images'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UpdateStripeProductDto
     */
    'description'?: string;
    /**
     * 
     * @type {object}
     * @memberof UpdateStripeProductDto
     */
    'default_price_data'?: object;
}

