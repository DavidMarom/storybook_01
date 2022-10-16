import Row from '../components/Row/Row'

export default {
    title: "Design System/Layout/Row",
    component: Row
}

const Template = args => <Row {...args}>
    <p>First child</p>
    <p>Example of a wider line</p>
    <p>Third line</p>
</Row>

export const Regular = Template.bind({})

Regular.args = {
    center: true,
    height: 300,
}
