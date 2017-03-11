import { XSDDOMAssembler } from 'assembler'

export class Import extends XSDDOMAssembler {}

/**
 *
 * @param {*} init
 * @returns {Import}
 */
export function xsdImport(init) {
    return new Import(init)
}
