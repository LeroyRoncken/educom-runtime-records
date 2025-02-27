import React from 'react'
import AddCartItem from './AddCartItem'
import AddCartItemMock from './AddCartItem.mock'

/// TODO: fix story entries
const AddCartItemMeta = {
    title: "molecules/AddCartItem",
    component: AddCartItem,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AddCartItem-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AddCartItem {...args} />

export const DefaultAddCartItem = Template.bind({})
DefaultAddCartItem.args = {
    testID: testID,
    ...AddCartItemMock
}

export default AddCartItemMeta