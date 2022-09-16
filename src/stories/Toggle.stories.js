import Toggle from '../components/Toggle/Toggle'

export default {
    title: "Toggle",
    component: Toggle
}

const Template = args => <Toggle {...args} />

export const Regular = Template.bind({})
export const Green = Template.bind({})

Regular.args = {
    color: "#0077ff",
}

Green.args = {
    color: "#00ff00",
}