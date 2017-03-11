import { XSDDOMAssembler } from './assembler'

export class ComplexContent extends XSDDOMAssembler {}

/**
 *
 * @param init
 * @returns {ComplexContent}
 */
export function complexContent(init) {
    return new ComplexContent(init)
}
