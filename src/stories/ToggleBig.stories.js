import ToggleBig from '../components/ToggleBig/ToggleBig'

export default {
    title: "Toggle Big",
    component: ToggleBig 
}

const Template = args => <ToggleBig {...args} />

export const Regular = Template.bind({})
export const Green = Template.bind({})

Regular.args = {
    color: "#0077ff",
}

Green.args = {
    color: "#00ff00",
}