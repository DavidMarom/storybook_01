import Card01 from '../components/Card01/Card01'

export default {
    title: "Design System/Components/Card01",
    component: Card01
}

const Template = args => <Card01 {...args} />

export const Regular = Template.bind({})

Regular.args = {
    title: "Best of You",
    description: 'I\'ve got another confession to make I\'m your fool Everyone\'s got their chains to break Holding you',
    image: "https://images.sk-static.com/images/media/img/col6/20210824-165102-896968.jpg",
    imageAlt: "Image Alt",
    width: 300,
    height: 140,
    darkMode: false
}
