import React from 'react'
import CircledNumber from './CircledNumber'
import CircledNumberMock from './CircledNumber.mock'

/// TODO: fix story entries
const CircledNumberMeta = {
    title: "atoms/CircledNumber",
    component: CircledNumber,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "CircledNumber-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <CircledNumber {...args} />

export const DefaultCircledNumber = Template.bind({})
DefaultCircledNumber.args = {
    testID: testID,
    ...CircledNumberMock
}

export default CircledNumberMeta