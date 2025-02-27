import React from 'react'
import AlbumCover from './AlbumCover'
import AlbumCoverMock from './AlbumCover.mock'

/// TODO: fix story entries
const AlbumCoverMeta = {
    title: "atoms/AlbumCover",
    component: AlbumCover,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumCover-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumCover {...args} />

export const DefaultAlbumCover = Template.bind({})
DefaultAlbumCover.args = {
    testID: testID,
    ...AlbumCoverMock
}

export default AlbumCoverMeta