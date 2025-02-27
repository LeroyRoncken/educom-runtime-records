import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumInfoHighlightMock from './AlbumInfoHighlight.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumInfoHighlight } from './AlbumInfoHighlight.stories'

const testID = "AlbumInfoHighlight-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumInfoHighlight", () => {

    it("Can render AlbumInfoHighlight", () => {
        render(<DefaultAlbumInfoHighlight testID={ testID } { ...AlbumInfoHighlightMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})