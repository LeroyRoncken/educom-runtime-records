import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumCoverMock from './AlbumCover.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumCover } from './AlbumCover.stories'

const testID = "AlbumCover-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumCover", () => {

    it("Can render AlbumCover", () => {
        render(<DefaultAlbumCover testID={ testID } { ...AlbumCoverMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})