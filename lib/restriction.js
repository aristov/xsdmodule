import { XSDDOMAssembler } from 'assembler'

export class Restriction extends XSDDOMAssembler {}

/**
 * 
 * @param {*} init
 * @returns {Restriction}
 */
export function restriction(init) {
    return new Restriction(init)
}
