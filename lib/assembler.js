import { ElementAssembler } from 'dommodule'

import {
    XS_NAMESPACE_URI,
    XS_NAMESPACE_PREFIX,
    FIRST_LETTER_RE
} from './defaults'

const toLowerCase = str => str.toLowerCase()

export class XSDDOMAssembler extends ElementAssembler {

    /**
     * Optional.
     * @param {Boolean} abstract
     */
    set abstract(abstract) {
        this.node.setAttribute('abstract', String(abstract))
    }

    /**
     * @returns {Boolean}
     */
    get abstract() {
        return this.node.getAttribute('abstract') === 'true'
    }

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
        return this.node.getAttribute('attributeFormDefault') || 'unqualified'
    }

    /**
     *
     * @param {String} base
     */
    set base(base) {
        this.node.setAttribute('base', base)
    }

    /**
     *
     * @returns {String}
     */
    get base() {
        return this.node.getAttribute('base')
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
     * Optional.
     * @param {String} def
     */
    set def(def) {
        this.node.setAttribute('default', def)
    }

    /**
     * @returns {String}
     */
    get def() {
        return this.node.getAttribute('default')
    }

    /**
     * Optional.
     * @param {"unqualified"|"qualified"} elementFormDefault
     */
    set elementFormDefault(elementFormDefault) {
        this.node.setAttribute('elementFormDefault', elementFormDefault)
    }

    /**
     * @returns {"unqualified"|"qualified"}
     */
    get elementFormDefault() {
        return this.node.getAttribute('elementFormDefault') || 'unqualified'
    }

    /**
     * Optional.
     * @param {String} final
     */
    set final(final) {
        this.node.setAttribute('final', final)
    }

    /**
     * @returns {String}
     */
    get final() {
        return this.node.getAttribute('final')
    }

    /**
     * Optional.
     * @param {String} fixed
     */
    set fixed(fixed) {
        this.node.setAttribute('fixed', fixed)
    }

    /**
     * @returns {String}
     */
    get fixed() {
        return this.node.getAttribute('fixed')
    }

    /**
     * Optional.
     * @param {String} form
     */
    set form(form) {
        this.node.setAttribute('form', form)
    }

    /**
     * @returns {String}
     */
    get form() {
        return this.node.getAttribute('form')
    }

    /**
     * Optional.
     * @param {Number} maxOccurs
     */
    set maxOccurs(maxOccurs) {
        this.node.setAttribute('maxOccurs', String(maxOccurs))
    }

    /**
     * @returns {Number}
     */
    get maxOccurs() {
        return Number(this.node.getAttribute('maxOccurs'))
    }

    /**
     * Optional.
     * @param {Number} minOccurs
     */
    set minOccurs(minOccurs) {
        this.node.setAttribute('minOccurs', String(minOccurs))
    }

    /**
     * @returns {Number}
     */
    get minOccurs() {
        return Number(this.node.getAttribute('minOccurs'))
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

    set namespace(namespace) {
        this.node.setAttribute('namespace', namespace)
    }

    get namespace() {
        return this.node.getAttribute('namespace')
    }

    set processContents(processContents) {
        this.node.setAttribute('processContents', processContents)
    }

    get processContents() {
        return this.node.getAttribute('processContents')
    }

    /**
     * Optional.
     * @param {String} ref
     */
    set ref(ref) {
        this.node.setAttribute('ref', ref)
    }

    /**
     * @returns {String}
     */
    get ref() {
        return this.node.getAttribute('ref')
    }

    /**
     *
     * @param {String} schemaLocation
     */
    set schemaLocation(schemaLocation) {
        this.node.setAttribute('schemaLocation', schemaLocation)
    }

    /**
     *
     * @returns {String}
     */
    get schemaLocation() {
        return this.node.getAttribute('schemaLocation')
    }

    /**
     *
     * @param {String} source
     */
    set source(source) {
        this.node.setAttribute('source', source)
    }

    /**
     * 
     * @returns {String}
     */
    get source() {
        return this.node.getAttribute('source')
    }

    /**
     * Optional.
     * @param {String} type
     */
    set type(type) {
        this.node.setAttribute('type', type)
    }

    /**
     * @returns {String}
     */
    get type() {
        return this.node.getAttribute('type')
    }

    /**
     *
     * @param {String} xpath
     */
    set xpath(xpath) {
        this.node.setAttribute('xpath', xpath)
    }

    /**
     *
     * @returns {String}
     */
    get xpath() {
        return this.node.getAttribute('xpath')
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
     * Start the local name from a lowercase letter
     * @returns {string}
     */
    static get localName() {
        return super.localName.replace(FIRST_LETTER_RE, toLowerCase)
    }
}

/**
 * XSD DOM assembler factory
 * @param {*} init
 * @returns {XSDDOMAssembler}
 */
export function xsddom(init) {
    return new XSDDOMAssembler(init)
}
