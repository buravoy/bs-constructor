<template>
    <div id="field-to-save" class="work-area">
        <div :class="items.container">
            <div class="row">
                <div class="col-4">
                    <Card/>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import Card from './constructor-items/Card';

    export default {
        name: 'WorkArea',
        components: {
            Card
        },
        props: {
            items: {
                type: Object,
                default: () => {}
            }
        },
    }
</script>

<style scoped>
    .work-area {
        width: 100%;
    }
</style>