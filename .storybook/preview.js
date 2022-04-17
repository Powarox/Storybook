export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: "light",
        values: [
            {
                name: "light",
                value: "#FFF",
            },
            {
                name: "isabelline",
                value: "#f7f3ef",
            },
            {
                name: "grey",
                value: "#CCC",
            },
            {
                name: "dark",
                value: "#333",
            },
        ],
    },
    docs: { inlineStories: true },
};
