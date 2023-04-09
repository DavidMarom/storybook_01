import Popup from '../components/Popup/Popup'

export default {
    title: "Design System/Layout/Popup",
    component: Popup
}

const Template = args => <Popup {...args}>
    <p>First child</p>
    <p>Example of a wider line</p>
    <p>Third line</p>
    
</Popup>

export const Regular = Template.bind({})

Regular.args = {
    show: true,
}
