import Button from '../components/Button/Button'

export default {
    title: "Button",
    component: Button
}

const Template = args => <Button {...args} />

export const Regular = Template.bind({})
export const Danger = Template.bind({})

Regular.args = {
    backgroundColor: "#3576cc",
    label: "Press Me",
    size: "small",
    rounded: true
}

Danger.args = {
    backgroundColor: "#cc3535",    
    label: "Delete",
    size: "small",
    rounded: true
}