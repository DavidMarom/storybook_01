import Card01 from '../components/Card01/Card01'

export default {
    title: "Card01",
    component: Card01
}

const Template = args => <Card01 {...args} />

export const Regular = Template.bind({})

Regular.args = {
    title: "This is a title",
}
