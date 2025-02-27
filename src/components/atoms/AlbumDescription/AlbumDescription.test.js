import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumDescriptionMock from './AlbumDescription.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumDescription } from './AlbumDescription.stories'

const testID = "AlbumDescription-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumDescription", () => {

    it("Can render AlbumDescription", () => {
        render(<DefaultAlbumDescription testID={ testID } { ...AlbumDescriptionMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})