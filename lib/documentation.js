import { XSDDOMAssembler } from './assembler'

const XML_NAMESPACE_URI = 'http://www.w3.org/XML/1998/namespace'
const XML_LANG_ATTRIBUTE_NAME = 'xml:lang'

export class Documentation extends XSDDOMAssembler {
    set xml_lang(xmlLang) {
        this.node.setAttributeNS(XML_NAMESPACE_URI, XML_LANG_ATTRIBUTE_NAME, xmlLang)
    }
}

export function documentation(init) {
    return new Documentation(init)
}
