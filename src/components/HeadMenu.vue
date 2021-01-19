<template>
    <div :class="{ hide: !isTopShow }" class="top d-flex justify-content-between border-bottom position-fixed w-100 bg-white">
        <div class="p-1">
            <button @click="hideSide" class="btn btn-sm btn-outline-primary rounded-0 shadow mr-1">
                <i :class="{ rotate180: !isSidebarShow }" class="fas fa-angle-double-left"></i>
            </button>

            <button @click="hideTop" class="btn btn-sm btn-outline-primary rounded-0 shadow" type="button">
                <i class="fas fa-angle-double-up"></i>
            </button>
        </div>

        <div class="d-flex align-items-center">
            <div class="d-flex align-items-center px-1">
                <i class="fab fa-bootstrap text-primary"></i>
                <h1 class="text-primary">Bootstrap<br>Constructor</h1>
            </div>
        </div>

        <div class="drop position-fixed">
            <button @click="hideTop" type="button" class="drop-btn">
                <i class="fas fa-angle-double-down"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeadMenu',

        data () {
            return {
                isTopShow: true
            }
        },

        props: {
            isSidebarShow: {
                type: Boolean,
                default: true
            }
        },

        methods:{
            hideTop() {
                this.isTopShow = !this.isTopShow;
            },

            hideSide() {
                this.$emit('hide-sidebar');
            }
        }
    }
</script>

<style scoped>
    h1 {
        font-size: 14px;
        margin: 0;
        text-align: center;
    }

    i.fa-bootstrap {
        font-size: 36px;
    }

    i.fa-angle-double-left {
        transition: .2s;
    }

    .top {
        top: 0;
        transition: .2s;
        z-index: 999;
    }

    .hide.top {
        top: -100px;
    }

    .drop {
        top: -100px;
        transition: .2s;
    }

    .hide.top .drop {
        top: 0;
    }

    .drop-btn {
        background-color: #ffffff75;
        padding: 0;
        width: 40px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        margin-left: 30px;
    }

    .drop-btn:hover {
        background-color: #ffffff;
    }

    .rotate180 {
        transform: rotate(180deg);
    }
</style>
