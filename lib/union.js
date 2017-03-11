import { XSDDOMAssembler } from './assembler'

export class Union extends XSDDOMAssembler {
    /**
     *
     * @param {string} memberTypes
     */
    set memberTypes(memberTypes) {
        this.node.setAttribute('memberTypes', memberTypes)
    }

    /**
     * 
     * @returns {string}
     */
    get memberTypes() {
        return this.node.getAttribute('memberTypes')
    }
}

/**
 * <xs:union> assembler factory
 * @param {*} init
 * @returns {Union}
 */
export function union(init) {
    return new Union(init)
}
