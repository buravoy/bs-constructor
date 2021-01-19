<template>
    <div :class="{ hide: !isSidebarShow }" class="sidebar">

        <div>
            <button @click="containerSize" class="btn btn-primary rounded-0">Разметка</button>

            <button class="btn btn-primary rounded-0">Сетка</button>
        </div>

        <button class="btn btn-primary rounded-0">Card</button>
    </div>
</template>

<script>
    export default {
        name: 'SideBar',

        data:  () => {
            return {
                mouse: {
                    x:0,
                    y:0
                }
            }
        },

        props: {
            isSidebarShow: {
                type: Boolean,
                default: true
            }
        },

        methods:{

            containerSize() {

            }
        }
    }
</script>

<style scoped>
    .btn {
        margin: 3px;
    }
    .sidebar {
        width: 300px;
        background-color: aquamarine;
        transition: .2s;
        padding: 45px 5px 5px 5px;
        display: flex;
        flex-direction: column;
        align-items: baseline;
    }

    .sidebar.hide {
        margin-left: -300px;
    }
</style>