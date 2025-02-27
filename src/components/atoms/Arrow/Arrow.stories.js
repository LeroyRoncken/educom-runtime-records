import React from 'react'
import Arrow from './Arrow'
import ArrowMock from './Arrow.mock'

/// TODO: fix story entries
const ArrowMeta = {
    title: "atoms/Arrow",
    component: Arrow,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Arrow-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Arrow {...args} />

export const DefaultArrow = Template.bind({})
DefaultArrow.args = {
    testID: testID,
    ...ArrowMock
}

export default ArrowMeta