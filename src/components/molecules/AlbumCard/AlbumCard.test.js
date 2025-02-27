import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumCardMock from './AlbumCard.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumCard } from './AlbumCard.stories'

const testID = "AlbumCard-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumCard", () => {

    it("Can render AlbumCard", () => {
        render(<DefaultAlbumCard testID={ testID } { ...AlbumCardMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})