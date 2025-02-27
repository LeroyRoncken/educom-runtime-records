import React from 'react'
import Info from './Info'
import InfoMock from './Info.mock'

/// TODO: fix story entries
const InfoMeta = {
    title: "atoms/Info",
    component: Info,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Info-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Info {...args} />

export const DefaultInfo = Template.bind({})
DefaultInfo.args = {
    testID: testID,
    ...InfoMock
}

export default InfoMeta