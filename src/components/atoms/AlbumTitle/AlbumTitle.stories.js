import React from 'react'
import AlbumTitle from './AlbumTitle'
import AlbumTitleMock from './AlbumTitle.mock'

/// TODO: fix story entries
const AlbumTitleMeta = {
    title: "atoms/AlbumTitle",
    component: AlbumTitle,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumTitle-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumTitle {...args} />

export const DefaultAlbumTitle = Template.bind({})
DefaultAlbumTitle.args = {
    testID: testID,
    ...AlbumTitleMock
}

export default AlbumTitleMeta