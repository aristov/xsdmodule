import { DocumentAssembler } from 'dommodule'

import { XS_NAMESPACE_URI, XS_NAMESPACE_PREFIX, XS_DOCUMENT_NAME } from './defaults'

/**
 * XSD document assembler
 */
export class XSDDocumentAssembler extends DocumentAssembler {
    /**
     * @returns XML Schema namespace
     */
    static get namespaceURI() {
        return XS_NAMESPACE_URI
    }

    /**
     * @returns {String} XML Schema prefix
     */
    static get prefix() {
        return XS_NAMESPACE_PREFIX
    }

    /**
     * @returns {String} XML Schema local name of the document element
     */
    static get localName() {
        return XS_DOCUMENT_NAME
    }
}
