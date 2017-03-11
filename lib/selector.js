import { XSDDOMAssembler } from './assembler'

export class Selector extends XSDDOMAssembler {}

/**
 *
 * @param {*} init
 * @returns {Selector}
 */
export function selector(init) {
    return new Selector(init)
}
