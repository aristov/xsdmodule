import { XSDDOMAssembler } from './assembler'

export class AttributeGroup extends XSDDOMAssembler {}

/**
 *
 * @param init
 * @returns {AttributeGroup}
 */
function attributeGroup(init) {
    return new AttributeGroup(init)
}
