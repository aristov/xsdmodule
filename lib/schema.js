import { XSDDOMAssembler } from './assembler'

export class Schema extends XSDDOMAssembler {
    /**
     * Optional. Specifies the default value of the block attribute on element
     * and complexType elements in the target namespace.
     * The block attribute prevents a complex type (or element) that has a specified type
     * of derivation from being used in place of this complex type.
     * This value can contain #all or a list that is a subset of extension,
     * restriction, or substitution.
     * @param {String} blockDefault
     */
    set blockDefault(blockDefault) {
        this.node.setAttribute('blockDefault', blockDefault)
    }

    /**
     * extension - prevents complex types derived by extension
     * restriction - prevents complex types derived by restriction
     * substitution - prevents substitution of elements
     * #all - prevents all derived complex types
     * @returns {String}
     */
    get blockDefault() {
        return this.node.getAttribute('blockDefault')
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
        return this.node.getAttribute('elementFormDefault') || 'unqualified'
    }

    /**
     * Optional. Specifies the default value of the final attribute on element,
     * simpleType, and complexType elements in the target namespace.
     * The final attribute prevents a specified type of derivation of an element,
     * simpleType, or complexType element. For element and complexType elements,
     * this value can contain #all or a list that is a subset of extension or restriction.
     * For simpleType elements, this value can additionally contain list and union.
     * @param {String} finalDefault
     */
    set finalDefault(finalDefault) {
        this.node.setAttribute('finalDefault', finalDefault)
    }

    /**
     * extension - prevents derivation by extension
     * restriction - prevents derivation by restriction
     * list - prevents derivation by list
     * union - prevents derivation by union
     * #all - prevents all derivation
     * @returns {String}
     */
    get finalDefault() {
        return this.node.getAttribute('finalDefault')
    }

    /**
     * Optional. A URI reference of the namespace of this schema
     * @param {String} targetNamespace
     */
    set targetNamespace(targetNamespace) {
        this.node.setAttribute('targetNamespace', targetNamespace)
    }

    /**
     * The URI reference of the namespace of this schema
     * @returns {String}
     */
    get targetNamespace() {
        return this.node.getAttribute('targetNamespace')
    }

    /**
     * Optional. Specifies the version of the schema
     * @param {String} version
     */
    set version(version) {
        this.node.setAttribute('version', version)
    }

    /**
     * The version of the schema
     * @returns {String}
     */
    get version() {
        return this.node.getAttribute('version')
    }

    /**
     * A URI reference that specifies one or more namespaces for use in this schema.
     * If no prefix is assigned, the schema components of the namespace
     * can be used with unqualified references
     * @param {String} xmlns
     */
    set xmlns(xmlns) {
        this.node.setAttribute('xmlns', xmlns)
    }

    /**
     * A URI reference of namespaces used in this schema
     * @returns {String}
     */
    get xmlns() {
        return this.node.getAttribute('xmlns')
    }
}

/**
 * Schema assembler factory
 * @param {*} init
 * @returns {Schema}
 */
export function schema(init) {
    return new Schema(init)
}
