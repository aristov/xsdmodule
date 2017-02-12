import { ElementAssembler } from 'dommodule'

const XML_NAMESPACE_SEPARATOR = ':'
const XS_NAMESPACE_PREFIX = 'xs'
const XS_NAMESPACE_URI = 'http://www.w3.org/2001/XMLSchema'

export class XSDDOMAssembler extends ElementAssembler {

    /**
     * Optional. The form for attributes declared in the target namespace of this schema.
     * @param {"unqualified"|"qualified"} [attributeFormDefault]
     */
    set attributeFormDefault(attributeFormDefault) {
        this.node.setAttribute('attributeFormDefault', attributeFormDefault)
    }

    /**
     * "unqualified" indicates that attributes from the target namespace
     *      are not required to be qualified with the namespace prefix.
     * "qualified" indicates that attributes from the target namespace
     *      must be qualified with the namespace prefix
     * Default is "unqualified".
     * @returns {"unqualified"|"qualified"}
     */
    get attributeFormDefault() {
        return this.node.getAttribute('attributeFormDefault') || "unqualified"
    }

    /**
     * Optional. The form for elements declared in the target namespace of this schema.
     * @param {"unqualified"|"qualified"} elementFormDefault
     */
    set elementFormDefault(elementFormDefault) {
        this.node.setAttribute('elementFormDefault', elementFormDefault)
    }

    /**
     * "unqualified" indicates that elements from the target namespace
     *      are not required to be qualified with the namespace prefix.
     * "qualified" indicates that elements from the target namespace
     *      must be qualified with the namespace prefix
     * Default is "unqualified".
     * @returns {"unqualified"|"qualified"}
     */
    get elementFormDefault() {
        return this.node.getAttribute('elementFormDefault') || "unqualified"
    }

    /**
     * Optional. Specifies a name for the element
     * @param {String} name
     */
    set name(name) {
        this.node.setAttribute('name', name)
    }

    /**
     * The name of the element
     * @returns {String}
     */
    get name() {
        return this.node.getAttribute('name')
    }

    /**
     * The XML Schema namespace URI
     * @returns {String}
     */
    static get namespaceURI() {
        return XS_NAMESPACE_URI
    }

    /**
     * The XML Schema namespace prefix
     * @returns {String}
     */
    static get prefix() {
        return XS_NAMESPACE_PREFIX
    }

    /**
     * The qualified name of the element node
     * @returns {String}
     */
    static get qualifiedName() {
        return this.prefix + XML_NAMESPACE_SEPARATOR + this.name.toLowerCase()
    }
}

/**
 * XSD DOM assembler factory
 * @param {{}|String} descriptor
 * @param {*} init
 * @returns {XSDDOMAssembler}
 */
export function xsddom(descriptor, init) {
    return new XSDDOMAssembler(descriptor, init)
}
