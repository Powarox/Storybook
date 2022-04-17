import MenuPopUp from './../../components/menus/pop-up/MenuPopUp'

export default {
    title: "Components/MenuPopUp",
    component: MenuPopUp,
    argTypes: {},
};

const Template = (args) => ({
    components: { MenuPopUp },
    setup() {
        return { args };
    },
    template: '<menu-pop-up v-bind="args" />',
});

export const Basic = Template.bind({});
Basic.args = {

};
