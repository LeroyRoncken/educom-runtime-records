import React from 'react'
import Artist from './Artist'
import ArtistMock from './Artist.mock'

/// TODO: fix story entries
const ArtistMeta = {
    title: "atoms/Artist",
    component: Artist,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Artist-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Artist {...args} />

export const DefaultArtist = Template.bind({})
DefaultArtist.args = {
    testID: testID,
    ...ArtistMock
}

export default ArtistMeta