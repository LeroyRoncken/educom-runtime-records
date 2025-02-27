import React from 'react'
import AlbumCard from './AlbumCard'
import AlbumCardMock from './AlbumCard.mock'

/// TODO: fix story entries
const AlbumCardMeta = {
    title: "molecules/AlbumCard",
    component: AlbumCard,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "AlbumCard-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <AlbumCard {...args} />

export const DefaultAlbumCard = Template.bind({})
DefaultAlbumCard.args = {
    testID: testID,
    ...AlbumCardMock
}

export default AlbumCardMeta