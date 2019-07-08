<template>
    <div class="TestMix">


        <div class="controls">
            <button type="button" class="control" data-filter="all">All</button>
            <button type="button" class="control" data-filter=".green">Green</button>
            <button type="button" class="control" data-filter=".blue">Blue</button>
            <button type="button" class="control" data-filter=".pink">Pink</button>
            <button type="button" class="control" data-filter="none">None</button>

            <button type="button" class="control" data-sort="default:asc">Asc</button>
            <button type="button" class="control" data-sort="default:desc">Desc</button>
        </div>
        <div class="container mixitupcontainer">
            <div class="mix green"></div>
            <div class="mix green"></div>
            <div class="mix blue"></div>
            <div class="mix pink"></div>
            <div class="mix green"></div>
            <div class="mix blue"></div>
            <div class="mix pink"></div>
            <div class="mix blue"></div>

            <div class="gap"></div>
            <div class="gap"></div>
            <div class="gap"></div>
        </div>
    </div>
</template>

<script>

    import mixitup from 'mixitup';
    import './_TestMix.scss';

    export default {
        props: {
        },
        data () {
            return {
                msg: 'Vue.js & MixItUp example'
            }
        },
        mounted() {
            var containerEl = document.querySelector('.mixitupcontainer');
            var mixer = mixitup(containerEl, {
                selectors: {
                    target: '.mix'
                }
            });
        }
    };
</script>
