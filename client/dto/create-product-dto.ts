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
 * @interface CreateProductDto
 */
export interface CreateProductDto {
    /**
     * 
     * @type {string}
     * @memberof CreateProductDto
     */
    'stripeId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProductDto
     */
    'title': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateProductDto
     */
    'images': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateProductDto
     */
    'brand'?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateProductDto
     */
    'rating'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateProductDto
     */
    'categories'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateProductDto
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateProductDto
     */
    'price': number;
    /**
     * 
     * @type {number}
     * @memberof CreateProductDto
     */
    'stock': number;
}

