import React from 'react'
import AlbumRow from './AlbumRow'
import AlbumRowMock from './AlbumRow.mock'

/// TODO: fix story entries
const AlbumRowMeta = {
    title: "organisms/AlbumRow",
    component: AlbumRow,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumRow-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumRow {...args} />

export const DefaultAlbumRow = Template.bind({})
DefaultAlbumRow.args = {
    testID: testID,
    ...AlbumRowMock
}

export default AlbumRowMeta