import React from 'react'
import Bin from './Bin'
import BinMock from './Bin.mock'

/// TODO: fix story entries
const BinMeta = {
    title: "atoms/Bin",
    component: Bin,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Bin-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Bin {...args} />

export const DefaultBin = Template.bind({})
DefaultBin.args = {
    testID: testID,
    ...BinMock
}

export default BinMeta