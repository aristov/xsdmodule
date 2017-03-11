import { XSDDOMAssembler } from 'assembler'

export class Redefine extends XSDDOMAssembler {}

/**
 * 
 * @param {*} init
 * @returns {Redefine}
 */
export function redefine(init) {
    return new Redefine(init)
}
