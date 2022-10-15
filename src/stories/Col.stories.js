import Col from '../components/Col/Col'

export default {
    title: "Col",
    component: Col
}

const Template = args => <Col {...args}>
    <p>Child 01</p>
    <p>Example of a wider line</p>
    <p>Second</p>
</Col>

export const Regular = Template.bind({})

Regular.args = {
    center: true,
    height: 300
}
