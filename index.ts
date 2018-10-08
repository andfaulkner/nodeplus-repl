/************************************** THIRD-PARTY IMPORTS ***************************************/
import isNode from 'detect-node';
import {isVerbose} from 'env-var-helpers';

/**************************************** TYPE DEFINITIONS ****************************************/
export interface NodeModuleBoilerplate {
    placeholder: string;
    placeholderFn: (test: string) => never;
}

/********************************************* EXPORT *********************************************/
/**
 * Export from module
 */
export const nodeModuleBoilerplate: NodeModuleBoilerplate = {
    placeholder: `placeholder`,
    placeholderFn: (test: string) => {
        throw new Error(`Boilerplate fn called`);
    },
};
