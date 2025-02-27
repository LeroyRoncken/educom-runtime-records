import React from 'react'
import AlbumCoverHighlight from './AlbumCoverHighlight'
import AlbumCoverHighlightMock from './AlbumCoverHighlight.mock'

/// TODO: fix story entries
const AlbumCoverHighlightMeta = {
    title: "molecules/AlbumCoverHighlight",
    component: AlbumCoverHighlight,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumCoverHighlight-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumCoverHighlight {...args} />

export const DefaultAlbumCoverHighlight = Template.bind({})
DefaultAlbumCoverHighlight.args = {
    testID: testID,
    ...AlbumCoverHighlightMock
}

export default AlbumCoverHighlightMeta