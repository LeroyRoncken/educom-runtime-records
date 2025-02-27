import React from 'react'
import TotalOrder from './TotalOrder'
import TotalOrderMock from './TotalOrder.mock'

/// TODO: fix story entries
const TotalOrderMeta = {
    title: "molecules/TotalOrder",
    component: TotalOrder,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "TotalOrder-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <TotalOrder {...args} />

export const DefaultTotalOrder = Template.bind({})
DefaultTotalOrder.args = {
    testID: testID,
    ...TotalOrderMock
}

export default TotalOrderMeta