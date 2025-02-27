import React from 'react'
import Genres from './Genres'
import GenresMock from './Genres.mock'

/// TODO: fix story entries
const GenresMeta = {
    title: "atoms/Genres",
    component: Genres,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Genres-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Genres {...args} />

export const DefaultGenres = Template.bind({})
DefaultGenres.args = {
    testID: testID,
    ...GenresMock
}

export default GenresMeta