<template>
    <div>
        <Campaign />
        <Newsletter />
    </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import {} from "~/utils/utils";
import {} from "../utils/store/namespace.names";
import {} from "../utils/store/action.names";
import {} from "../utils/store/getter.names";
import {} from "../utils/store/mutation.names";
import Newsletter from "../components/Newsletter";
import Campaign from "../components/Campaign";

@Component({
    name: "Index",
    components: {
        Newsletter,
        Campaign,
    },
})
export default class Index extends Vue {
    HOST = this.$config.HOST;

    // Set page name on browser tab name
    head() {
        return {
            title: "Home",
        };
    }
}
</script>

<style scoped lang="scss"></style>
