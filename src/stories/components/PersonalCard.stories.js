import PersonalCard from "./../../components/cards/PersonalCard.vue";

export default {
    title: "Components/PersonalCard",
    component: PersonalCard,
    argTypes: {},
};

const Template = (args) => ({
    components: { PersonalCard },
    setup() {
        return { args };
    },
    template: '<personal-card v-bind="args" />',
});

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
    backgrounds: { default: "grey" },
};