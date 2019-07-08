<template>
    <div class="CheatsheetSingleView">
        <router-view />
        <router-link to="/cheatsheets" tag="a" class="back">&laquo; Back</router-link>
    </div>
</template>

<script>
    import "./_CheatsheetSingleView.scss";
    export default {
        props: {
        },
    };
</script>
