import { XSDDOMAssembler } from './assembler'

export class Group extends XSDDOMAssembler {}

/**
 * 
 * @param {*} init
 * @returns {Group}
 */
export function group(init) {
    return new Group(init)
}
