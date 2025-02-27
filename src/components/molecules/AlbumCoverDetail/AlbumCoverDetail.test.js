import React from 'react'
import { render, screen } from "@testing-library/react"
import AlbumCoverDetailMock from './AlbumCoverDetail.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultAlbumCoverDetail } from './AlbumCoverDetail.stories'

const testID = "AlbumCoverDetail-" + Math.floor(Math.random()*90000) + 10000

describe("AlbumCoverDetail", () => {

    it("Can render AlbumCoverDetail", () => {
        render(<DefaultAlbumCoverDetail testID={ testID } { ...AlbumCoverDetailMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})