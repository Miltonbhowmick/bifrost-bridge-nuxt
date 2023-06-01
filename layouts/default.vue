<template>
    <div>
        <GSAPScrollSmoother :vars="{ smooth: 7, effects: true }">
            <Header />
            <Nuxt />
            <Footer />
        </GSAPScrollSmoother>
    </div>
</template>

<script>
import { Component, Vue } from "nuxt-property-decorator";
import GSAPScrollSmoother from "../components/GSAPScrollSmoother";

@Component({
    name: "Default",
    components: {
        GSAPScrollSmoother,
    },
})
export default class Default extends Vue {}
</script>

<style scoped lang="scss">
</style>
