import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumHighlightMock from './AlbumHighlight.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumHighlight } from './AlbumHighlight.stories'

const testID = "AlbumHighlight-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumHighlight", () => {

    it("Can render AlbumHighlight", () => {
        render(<DefaultAlbumHighlight testID={ testID } { ...AlbumHighlightMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})