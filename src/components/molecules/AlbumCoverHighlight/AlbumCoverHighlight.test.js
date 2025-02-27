import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumCoverHighlightMock from './AlbumCoverHighlight.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumCoverHighlight } from './AlbumCoverHighlight.stories'

const testID = "AlbumCoverHighlight-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumCoverHighlight", () => {

    it("Can render AlbumCoverHighlight", () => {
        render(<DefaultAlbumCoverHighlight testID={ testID } { ...AlbumCoverHighlightMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})