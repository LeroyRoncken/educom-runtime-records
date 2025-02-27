import React from 'react'
import Detail from './Detail'
import DetailMock from './Detail.mock'

/// TODO: fix story entries
const DetailMeta = {
    title: "pages/Detail",
    component: Detail,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Detail-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Detail {...args} />

export const DefaultDetail = Template.bind({})
DefaultDetail.args = {
    testID: testID,
    ...DetailMock
}

export default DetailMeta