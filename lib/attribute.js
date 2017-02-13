import { XSDDOMAssembler } from './assembler'

export class Attribute extends XSDDOMAssembler {
    /**
     * Optional. Specifies a default value for the attribute.
     * Default and fixed attributes cannot both be present
     * @param {String} def
     */
    set def(def) {
        this.node.setAttribute('default', def)
    }

    /**
     * The default value of the attribute.
     * @returns {String}
     */
    get def() {
        return this.node.getAttribute('default')
    }

    /**
     * Optional. Specifies a fixed value for the attribute.
     * Default and fixed attributes cannot both be present
     * @param {String} fixed
     */
    set fixed(fixed) {
        this.node.setAttribute('fixed', fixed)
    }

    /**
     * The fixed value of the attribute.
     * @returns {String}
     */
    get fixed() {
        return this.node.getAttribute('fixed')
    }

    /**
     * Optional. Specifies the form for the attribute.
     * The default value is the value of the attributeFormDefault attribute of the element
     * containing the attribute.
     * @param {String} form
     */
    set form(form) {
        this.node.setAttribute('form', form)
    }

    /**
     * Can be set to one of the following:
     *  - "qualified" - indicates that this attribute must be qualified with the namespace prefix
     *      and the no-colon-name (NCName) of the attribute
     *  - "unqualified" - indicates that this attribute is not required
     *      to be qualified with the namespace prefix and is matched
     *      against the (NCName) of the attribute
     * @returns {String}
     */
    get form() {
        return this.node.getAttribute('form')
    }

    /**
     * Optional. Specifies a reference to a named attribute.
     * Name and ref attributes cannot both be present.
     * If ref is present, simpleType element, form, and type cannot be present
     * @param {String} ref
     */
    set ref(ref) {
        this.node.setAttribute('ref', ref)
    }

    /**
     * The reference to a named attribute.
     * @returns {String}
     */
    get ref() {
        return this.node.getAttribute('ref')
    }

    /**
     * Optional. Specifies a built-in data type or a simple type.
     * The type attribute can only be present when the content
     * does not contain a simpleType element
     * @param {String} type
     */
    set type(type) {
        this.node.setAttribute('type', type)
    }

    /**
     * The built-in data type or a simple type.
     * @returns {String}
     */
    get type() {
        return this.node.getAttribute('type')
    }

    /**
     * Optional. Specifies how the attribute is used.
     * @param {String} use
     */
    set use(use) {
        this.node.setAttribute('use', use)
    }

    /**
     * Can be one of the following values:
     *  - optional - the attribute is optional (this is default)
     *  - prohibited - the attribute cannot be used
     *  - required - the attribute is required
     * @returns {String}
     */
    get use() {
        return this.node.getAttribute('use')
    }
}

/**
 *
 * @param init
 * @returns {Attribute}
 */
export function attribute(init) {
    return new Attribute(init)
}
