import { XSDDOMAssembler } from './assembler'

export class Sequence extends XSDDOMAssembler {}

/**
 * 
 * @param {*} init
 * @returns {Sequence}
 */
export function sequence(init) {
    return new Sequence(init)
}
