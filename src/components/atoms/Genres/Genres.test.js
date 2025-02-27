import React from 'react'
import { render, screen } from "@testing-library/react"
import GenresMock from './Genres.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultGenres } from './Genres.stories'

const testID = "Genres-" + Math.floor(Math.random()*90000) + 10000

describe("Genres", () => {

    it("Can render Genres", () => {
        render(<DefaultGenres testID={ testID } { ...GenresMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})