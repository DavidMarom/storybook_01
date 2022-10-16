import Toggle from '../components/Toggle/Toggle'

export default {
    title: "Design System/Components/Toggle",
    component: Toggle
}

const Template = args => <Toggle {...args} />

export const Regular = Template.bind({})
export const Green = Template.bind({})

Regular.args = {
    color: "#0077ff",
    func: () => { console.log("Toggle") },
    onSymbol: "🔐",
    offSymbol: "🔓"
}

Green.args = {
    color: "#1bc71b",
    func: () => { console.log("Toggle") },
    onSymbol: "🔐",
    offSymbol: "🔓"
}