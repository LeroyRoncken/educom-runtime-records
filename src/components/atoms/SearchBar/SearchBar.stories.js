import React from 'react'
import SearchBar from './SearchBar'
import SearchBarMock from './SearchBar.mock'

/// TODO: fix story entries
const SearchBarMeta = {
    title: "atoms/SearchBar",
    component: SearchBar,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "SearchBar-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <SearchBar {...args} />

export const DefaultSearchBar = Template.bind({})
DefaultSearchBar.args = {
    testID: testID,
    ...SearchBarMock
}

export default SearchBarMeta