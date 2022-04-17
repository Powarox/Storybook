<template lang="html">
    <div id="VueAdvencedTemplate">
        <Components
            :id="id"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import components from "./components.vue";

export default {
    name: "VueAdvencedTemplate",
    props: [],
    components: {
        components,
    },
    data() {
        return {};
    },
    methods: {
        ...mapActions([]),
        ...mapGetters([]),
    },
    computed: {},
};
</script>

<style lang="css" scoped></style>
