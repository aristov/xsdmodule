import { XSDDOMAssembler } from './assembler'

/**
 *
 * @param descriptor
 * @param init
 * @returns {XSDDOMAssembler}
 */
export function xsddom(descriptor, init) {
    return new XSDDOMAssembler(descriptor, init)
}

export function complexType(init) {
    return xsddom('complexType', init)
}

export function element(init) {
    return xsddom('element', init)
}

export function schema(init) {
    return xsddom('schema', init)
}

export function simpleContent(init) {
    return xsddom('simpleContent', init)
}
