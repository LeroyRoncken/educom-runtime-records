import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumTitleMock from './AlbumTitle.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumTitle } from './AlbumTitle.stories'

const testID = "AlbumTitle-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumTitle", () => {

    it("Can render AlbumTitle", () => {
        render(<DefaultAlbumTitle testID={ testID } { ...AlbumTitleMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})