import { XSDDOMAssembler } from './assembler'

export class Any extends XSDDOMAssembler {}

/**
 * 
 * @param init
 * @returns {Any}
 */
export function any(init) {
    return new Any(init)
}
