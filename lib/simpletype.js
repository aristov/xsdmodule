import { XSDDOMAssembler } from './assembler'

export class SimpleType extends XSDDOMAssembler {}

/**
 * <xs:simpleType> assembler factory
 * @param {*} init
 * @returns {SimpleType}
 */
export function simpleType(init) {
    return new SimpleType(init)
}
