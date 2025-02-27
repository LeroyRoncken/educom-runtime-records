import React from 'react'
import AlbumCoverDetail from './AlbumCoverDetail'
import AlbumCoverDetailMock from './AlbumCoverDetail.mock'

/// TODO: fix story entries
const AlbumCoverDetailMeta = {
    title: "molecules/AlbumCoverDetail",
    component: AlbumCoverDetail,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumCoverDetail-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumCoverDetail {...args} />

export const DefaultAlbumCoverDetail = Template.bind({})
DefaultAlbumCoverDetail.args = {
    testID: testID,
    ...AlbumCoverDetailMock
}

export default AlbumCoverDetailMeta