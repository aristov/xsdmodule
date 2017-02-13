import { XSDDOMAssembler } from './assembler'

const XS_ELEMENT_LOCAL_NAME = 'element'

export class XSElement extends XSDDOMAssembler {
    /**
     *
     * @param {Boolean} nillable
     */
    set nillable(nillable) {
        this.node.setAttribute('substitutionGroup', String(nillable))
    }

    /**
     *
     * @returns {Boolean}
     */
    get nillable() {
        return this.node.getAttribute('substitutionGroup') === 'true'
    }

    /**
     *
     * @param {String} substitutionGroup
     */
    set substitutionGroup(substitutionGroup) {
        this.node.setAttribute('substitutionGroup', substitutionGroup)
    }

    /**
     *
     * @returns {String}
     */
    get substitutionGroup() {
        return this.node.getAttribute('substitutionGroup')
    }

    /**
     *
     * @returns {String}
     */
    static get localName() {
        return XS_ELEMENT_LOCAL_NAME
    }
}

/**
 * <xs:element> assembler factory
 * @param init
 * @returns {XSElement}
 */
export function element(init) {
    return new XSElement(init)
}
