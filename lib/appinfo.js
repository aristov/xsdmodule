import { XSDDOMAssembler } from './assembler'

export class Appinfo extends XSDDOMAssembler {}

/**
 * 
 * @param init
 * @returns {Appinfo}
 */
export function appinfo(init) {
    return new Appinfo(init)
}
