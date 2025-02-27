import React from 'react'
import AlbumHighlight from './AlbumHighlight'
import AlbumHighlightMock from './AlbumHighlight.mock'

/// TODO: fix story entries
const AlbumHighlightMeta = {
    title: "organisms/AlbumHighlight",
    component: AlbumHighlight,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumHighlight-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumHighlight {...args} />

export const DefaultAlbumHighlight = Template.bind({})
DefaultAlbumHighlight.args = {
    testID: testID,
    ...AlbumHighlightMock
}

export default AlbumHighlightMeta