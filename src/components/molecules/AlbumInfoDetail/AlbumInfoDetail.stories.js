import React from 'react'
import AlbumInfoDetail from './AlbumInfoDetail'
import AlbumInfoDetailMock from './AlbumInfoDetail.mock'

/// TODO: fix story entries
const AlbumInfoDetailMeta = {
    title: "molecules/AlbumInfoDetail",
    component: AlbumInfoDetail,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumInfoDetail-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumInfoDetail {...args} />

export const DefaultAlbumInfoDetail = Template.bind({})
DefaultAlbumInfoDetail.args = {
    testID: testID,
    ...AlbumInfoDetailMock
}

export default AlbumInfoDetailMeta