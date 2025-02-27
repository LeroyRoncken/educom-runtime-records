import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumDetailMock from './AlbumDetail.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumDetail } from './AlbumDetail.stories'

const testID = "AlbumDetail-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumDetail", () => {

    it("Can render AlbumDetail", () => {
        render(<DefaultAlbumDetail testID={ testID } { ...AlbumDetailMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})