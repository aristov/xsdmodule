import { XSDDOMAssembler } from 'assembler'

export class Key extends XSDDOMAssembler {}

/**
 *
 * @param {*} init
 * @returns {Key}
 */
export function key(init) {
    return new Key(init)
}
