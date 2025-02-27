import React from 'react'
import LP from './LP'
import LPMock from './LP.mock'

/// TODO: fix story entries
const LPMeta = {
    title: "atoms/LP",
    component: LP,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "LP-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <LP {...args} />

export const DefaultLP = Template.bind({})
DefaultLP.args = {
    testID: testID,
    ...LPMock
}

export default LPMeta