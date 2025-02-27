import React from 'react'
import { render, screen } from "@testing-library/react"
import ArtistMock from './Artist.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultArtist } from './Artist.stories'

const testID = "Artist-" + Math.floor(Math.random()*90000) + 10000

describe("Artist", () => {

    it("Can render Artist", () => {
        render(<DefaultArtist testID={ testID } { ...ArtistMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})