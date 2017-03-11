import { XSDDOMAssembler } from './assembler'

export class ComplexType extends XSDDOMAssembler {

    /**
     * Optional. Specifies whether the complex type can be used in an instance document.
     * True indicates that an element cannot use this complex type directly
     * but must use a complex type derived from this complex type.
     * Default is false
     * @param {Boolean} abstract
     */
    set abstract(abstract) {
        this.node.setAttribute('abstract', String(abstract))
    }

    /**
     * Abstract complex type
     * @returns {Boolean}
     */
    get abstract() {
        return this.node.getAttribute('abstract') === 'true'
    }

    /**
     * Optional. Specifies whether character data is allowed
     * to appear between the child elements of this complexType element.
     * Default is false. If a simpleContent element is a child element,
     * the mixed attribute is not allowed!
     * @param {Boolean} mixed
     */
    set mixed(mixed) {
        this.node.setAttribute('mixed', String(mixed))
    }

    /**
     * Mixed complex type
     * @returns {Boolean}
     */
    get mixed() {
        return this.node.getAttribute('mixed') === 'true'
    }

    /**
     * Optional. Prevents a complex type that has a specified type of derivation
     * from being used in place of this complex type.
     * This value can contain #all or a list that is a subset of extension or restriction:
     *      extension - prevents complex types derived by extension
     *      restriction - prevents complex types derived by restriction
     *      #all - prevents all derived complex types
     * @param {String} block
     */
    set block(block) {
        this.node.setAttribute('block', block)
    }

    /**
     * Block complex type
     * @returns {String}
     */
    get block() {
        return this.node.getAttribute('block')
    }

    /**
     * Optional. Prevents a specified type of derivation of this complex type element.
     * Can contain #all or a list that is a subset of extension or restriction.
     *      extension - prevents derivation by extension
     *      restriction - prevents derivation by restriction
     *      #all - prevents all derivation
     * @param {String} final
     */
    set final(final) {
        this.node.setAttribute('final', final)
    }

    /**
     * Final complex type
     * @returns {String}
     */
    get final() {
        return this.node.getAttribute('final')
    }
}

/**
 * 
 * @param {*} init
 * @returns {ComplexType}
 */
export function complexType(init) {
    return new ComplexType(init)
}
