import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumInfoDetailMock from './AlbumInfoDetail.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumInfoDetail } from './AlbumInfoDetail.stories'

const testID = "AlbumInfoDetail-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumInfoDetail", () => {

    it("Can render AlbumInfoDetail", () => {
        render(<DefaultAlbumInfoDetail testID={ testID } { ...AlbumInfoDetailMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})