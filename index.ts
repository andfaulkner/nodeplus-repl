/************************************** THIRD-PARTY IMPORTS ***************************************/
import isNode from 'detect-node';
import {isVerbose} from 'env-var-helpers';

/************************************* IMPORT PROJECT MODULES *************************************/

/**************************************** TYPE DEFINITIONS ****************************************/
export interface INodeModuleBoilerplate {
    nodeModuleBoilerplatePlaceholder: string;
    nodeModuleBoilerplatePlaceholderFn: (test: string) => never;
}

const nodeModuleBoilerplateExport: INodeModuleBoilerplate = {
    nodeModuleBoilerplatePlaceholder: 'placeholder',
    nodeModuleBoilerplatePlaceholderFn: (test: string) => { throw new Error('Boilerplate fn called') },
}

export { nodeModuleBoilerplateExport }

