/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class LibService {
    constructor() { }
    /**
     * @return {?}
     */
    testEs2016() {
        return ['foo', 'bar'].includes('foo');
    }
}
LibService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LibService.ctorParameters = () => [];
function LibService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LibService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LibService.ctorParameters;
}
