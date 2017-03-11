import { XSDDOMAssembler } from './assembler'

export class SimpleContent extends XSDDOMAssembler {}

/**
 * <xs:simpleContent> assembler factory
 * @param {*} init
 * @returns {SimpleContent}
 */
export function simpleContent(init) {
    return new SimpleContent(init)
}
