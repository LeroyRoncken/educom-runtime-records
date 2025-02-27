import React from 'react'
import ReadMore from './ReadMore'
import ReadMoreMock from './ReadMore.mock'

/// TODO: fix story entries
const ReadMoreMeta = {
    title: "atoms/ReadMore",
    component: ReadMore,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "ReadMore-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ReadMore {...args} />

export const DefaultReadMore = Template.bind({})
DefaultReadMore.args = {
    testID: testID,
    ...ReadMoreMock
}

export default ReadMoreMeta