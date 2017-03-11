import { XSDDOMAssembler } from 'assembler'

export class Choice extends XSDDOMAssembler {}

/**
 * 
 * @param init
 * @returns {Choice}
 */
export function choice(init) {
    return new Choice(init)
}
