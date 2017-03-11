import { XSDDOMAssembler } from 'assembler'

export class Include extends XSDDOMAssembler {}

/**
 *
 * @param {*} init
 * @returns {Include}
 */
export function include(init) {
    return new Include(init)
}
