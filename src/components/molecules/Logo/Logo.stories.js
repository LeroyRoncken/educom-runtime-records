import React from 'react'
import Logo from './Logo'
import LogoMock from './Logo.mock'

/// TODO: fix story entries
const LogoMeta = {
    title: "molecules/Logo",
    component: Logo,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Logo-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Logo {...args} />

export const DefaultLogo = Template.bind({})
DefaultLogo.args = {
    testID: testID,
    ...LogoMock
}

export default LogoMeta