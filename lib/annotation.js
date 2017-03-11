import { XSDDOMAssembler } from './assembler'

export class Annotation extends XSDDOMAssembler {}

/**
 * 
 * @param init
 * @returns {Annotation}
 */
export function annotation(init) {
    return new Annotation(init)
}
