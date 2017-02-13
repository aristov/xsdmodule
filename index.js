import { all, attribute, complexType, element, schema, simpleContent } from './lib'

const assembler = schema(element({
    name : 'schedule',
    children : complexType(all(element({
        name : 'reserve',
        children : complexType(simpleContent([
            attribute({ name : 'time', type : 'xs:dateTime' }),
            attribute({ name : 'duration', type : 'xs:duration' }),
            attribute({ name : 'detail', type : 'xs:string' }),
            attribute({ name : 'value', type : 'xs:string' }),
        ]))
    })))
}))

console.log(assembler, assembler.node)
