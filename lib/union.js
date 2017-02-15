import { XSDDOMAssembler } from './assembler'

export class Union extends XSDDOMAssembler {
    set memberTypes(memberTypes) {
        this.node.setAttribute('memberTypes', memberTypes)
    }
    get memberTypes() {
        return this.node.getAttribute('memberTypes')
    }
}

/**
 * <xs:union> assembler factory
 * @param init
 * @returns {Union}
 */
export function union(init) {
    return new Union(init)
}
