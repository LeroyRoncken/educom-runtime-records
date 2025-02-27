import React from 'react'
import { render, screen } from "@testing-library/react"
import BannerMock from './Banner.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultBanner } from './Banner.stories'

const testID = "Banner-" + Math.floor(Math.random()*90000) + 10000

describe("Banner", () => {

    it("Can render Banner", () => {
        render(<DefaultBanner testID={ testID } { ...BannerMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})