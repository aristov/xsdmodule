import { XSDDOMAssembler } from './assembler'

export class AnyAttribute extends XSDDOMAssembler {}

/**
 *
 * @param init
 * @returns {AnyAttribute}
 */
export function anyAttribute(init) {
    return new AnyAttribute(init)
}
