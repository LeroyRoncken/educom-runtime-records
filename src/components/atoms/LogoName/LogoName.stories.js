import React from 'react'
import LogoName from './LogoName'
import LogoNameMock from './LogoName.mock'

/// TODO: fix story entries
const LogoNameMeta = {
    title: "atoms/LogoName",
    component: LogoName,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "LogoName-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <LogoName {...args} />

export const DefaultLogoName = Template.bind({})
DefaultLogoName.args = {
    testID: testID,
    ...LogoNameMock
}

export default LogoNameMeta