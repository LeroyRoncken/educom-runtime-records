import React from 'react'
import ContactInfo from './ContactInfo'
import ContactInfoMock from './ContactInfo.mock'

/// TODO: fix story entries
const ContactInfoMeta = {
    title: "atoms/ContactInfo",
    component: ContactInfo,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "ContactInfo-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <ContactInfo {...args} />

export const DefaultContactInfo = Template.bind({})
DefaultContactInfo.args = {
    testID: testID,
    ...ContactInfoMock
}

export default ContactInfoMeta