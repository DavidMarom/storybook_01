import Col from '../components/Col/Col'

export default {
    title: "Design System/Layout/Col",
    component: Col
}

const Template = args => <Col {...args}>
    <p>First child</p>
    <p>Example of a wider line</p>
    <p>Third line</p>
</Col>

export const Regular = Template.bind({})

Regular.args = {
    center: true,
    height: 300,
    width: 300,
}
