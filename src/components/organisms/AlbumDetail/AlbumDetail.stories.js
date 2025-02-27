import React from 'react'
import AlbumDetail from './AlbumDetail'
import AlbumDetailMock from './AlbumDetail.mock'

/// TODO: fix story entries
const AlbumDetailMeta = {
    title: "organisms/AlbumDetail",
    component: AlbumDetail,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumDetail-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumDetail {...args} />

export const DefaultAlbumDetail = Template.bind({})
DefaultAlbumDetail.args = {
    testID: testID,
    ...AlbumDetailMock
}

export default AlbumDetailMeta