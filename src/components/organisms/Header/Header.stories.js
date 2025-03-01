import React from 'react'
import Header from './Header'
import HeaderMock from './Header.mock'

/// TODO: fix story entries
const HeaderMeta = {
    title: "organisms/Header",
    component: Header,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Header-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Header {...args} />

export const DefaultHeader = Template.bind({})
DefaultHeader.args = {
    testID: testID,
    ...HeaderMock
}

export default HeaderMeta