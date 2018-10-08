/// <reference path="../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="../node_modules/typescript/lib/lib.es2018.full.d.ts" />

/************************************** THIRD-PARTY IMPORTS ***************************************/
import {expect} from 'chai';
import sinon from 'sinon';

import fs from 'fs';
import path from 'path';

/*********************************** IMPORT FILES TO BE TESTED ************************************/
import {nodeModuleBoilerplateExport} from '../index';

/********************************************* TESTS **********************************************/
describe('nodeModuleBoilerplateExport', function() {
    it('exists', function() {
        expect(nodeModuleBoilerplateExport).to.exist;
    });
    it('is the thing', function() {
        expect(nodeModuleBoilerplateExport).to.be.an('object');
    });
    it('#nodeModuleBoilerplateExport.nodeModuleBoilerplatePlaceholderFn throws if run', function() {
        expect(nodeModuleBoilerplateExport.nodeModuleBoilerplatePlaceholderFn).to.throw(Error);
    });
});
