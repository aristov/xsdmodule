import { XSDDOMAssembler } from './assembler'

const XML_NAMESPACE_URI = 'http://www.w3.org/XML/1998/namespace'
const XML_LANG_ATTRIBUTE_NAME = 'xml:lang'

export class Documentation extends XSDDOMAssembler {
    /**
     *
     * @param xmlLang
     */
    set xmlLang(xmlLang) {
        this.node.setAttributeNS(XML_NAMESPACE_URI, XML_LANG_ATTRIBUTE_NAME, xmlLang)
    }
    get xmlLang() {
        this.node.getAttributeNS(XML_NAMESPACE_URI, XML_LANG_ATTRIBUTE_NAME)
    }
}

/**
 * 
 * @param init
 * @returns {Documentation}
 */
export function documentation(init) {
    return new Documentation(init)
}
