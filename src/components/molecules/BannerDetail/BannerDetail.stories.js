import React from 'react'
import BannerDetail from './BannerDetail'
import BannerDetailMock from './BannerDetail.mock'

/// TODO: fix story entries
const BannerDetailMeta = {
    title: "molecules/BannerDetail",
    component: BannerDetail,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "BannerDetail-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <BannerDetail {...args} />

export const DefaultBannerDetail = Template.bind({})
DefaultBannerDetail.args = {
    testID: testID,
    ...BannerDetailMock
}

export default BannerDetailMeta