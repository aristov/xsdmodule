import { XSDDOMAssembler } from './assembler'

export class Unique extends XSDDOMAssembler {}

/**
 * <xs:unique> assembler factory
 * @param init
 * @returns {Unique}
 */
export function unique(init) {
    return new Unique(init)
}
