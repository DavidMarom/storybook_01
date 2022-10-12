import Button from '../components/Button/Button'

export default {
    title: "Button",
    component: Button
}

const Template = args => <Button {...args} />

export const Regular = Template.bind({})

Regular.args = {
    onclick: () => console.log("Button Pressed"),
    backgroundColor: "#3576cc",
    width: 400,
    label: "Press Me",
    size: "small",
    rounded: true
}