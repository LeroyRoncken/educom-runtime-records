import React from 'react'
import AlbumDescription from './AlbumDescription'
import AlbumDescriptionMock from './AlbumDescription.mock'

/// TODO: fix story entries
const AlbumDescriptionMeta = {
    title: "atoms/AlbumDescription",
    component: AlbumDescription,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumDescription-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumDescription {...args} />

export const DefaultAlbumDescription = Template.bind({})
DefaultAlbumDescription.args = {
    testID: testID,
    ...AlbumDescriptionMock
}

export default AlbumDescriptionMeta