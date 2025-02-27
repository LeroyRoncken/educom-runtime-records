import React from 'react'
import LogoDisc from './LogoDisc'
import LogoDiscMock from './LogoDisc.mock'

/// TODO: fix story entries
const LogoDiscMeta = {
    title: "atoms/LogoDisc",
    component: LogoDisc,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "LogoDisc-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <LogoDisc {...args} />

export const DefaultLogoDisc = Template.bind({})
DefaultLogoDisc.args = {
    testID: testID,
    ...LogoDiscMock
}

export default LogoDiscMeta