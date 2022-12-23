import ProgressCircles from '../components/ProgressCircles/ProgressCircles'

export default {
    title: "Design System/Components/ProgressCircles",
    component: ProgressCircles
}

const Template = args => <ProgressCircles {...args} />

export const Regular = Template.bind({})

Regular.args = {
    step: 3,
}

