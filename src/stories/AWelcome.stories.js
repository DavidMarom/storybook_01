import Welcome from '../components/Welcome/Welcome'

export default {
    title: "Welcome",
    component: Welcome
}

const Template = args => <Welcome {...args} />

export const Home = Template.bind({})

Home.args = {
    name: "there!"
}
