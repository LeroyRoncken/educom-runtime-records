import React from 'react'
import AlbumInfoHighlight from './AlbumInfoHighlight'
import AlbumInfoHighlightMock from './AlbumInfoHighlight.mock'

/// TODO: fix story entries
const AlbumInfoHighlightMeta = {
    title: "molecules/AlbumInfoHighlight",
    component: AlbumInfoHighlight,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumInfoHighlight-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumInfoHighlight {...args} />

export const DefaultAlbumInfoHighlight = Template.bind({})
DefaultAlbumInfoHighlight.args = {
    testID: testID,
    ...AlbumInfoHighlightMock
}

export default AlbumInfoHighlightMeta