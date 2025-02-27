import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumRowMock from './AlbumRow.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumRow } from './AlbumRow.stories'

const testID = "AlbumRow-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumRow", () => {

    it("Can render AlbumRow", () => {
        render(<DefaultAlbumRow testID={ testID } { ...AlbumRowMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})