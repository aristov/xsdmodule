import { XSDDOMAssembler } from './assembler'

export class Field extends XSDDOMAssembler {}

/**
 * <xs:field> element assembler factory
 * @param init
 * @returns {Field}
 */
export function field(init) {
    return new Field(init)
}
