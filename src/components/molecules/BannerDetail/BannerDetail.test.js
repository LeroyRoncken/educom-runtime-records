import React from 'react'
import { render, screen } from "@testing-library/react"
import BannerDetailMock from './BannerDetail.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultBannerDetail } from './BannerDetail.stories'

const testID = "BannerDetail-" + Math.floor(Math.random()*90000) + 10000

describe("BannerDetail", () => {

    it("Can render BannerDetail", () => {
        render(<DefaultBannerDetail testID={ testID } { ...BannerDetailMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})