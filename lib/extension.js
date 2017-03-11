import { XSDDOMAssembler } from './assembler'

export class Extension extends XSDDOMAssembler {}

/**
 * 
 * @param {*} init
 * @returns {Extension}
 */
export function extenstion(init) {
    return new Extension(init)
}
