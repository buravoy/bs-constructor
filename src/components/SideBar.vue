<template>
    <div :class="{ hide: !isSidebarShow }" class="sidebar">

        <div>
            <div class="accordion" id="accordion">
                <div class="card rounded-0">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <p class="pointer-event" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Размер и сетка
                            </p>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">

                            <div>
                                <h5>Макет {{ size }}</h5>

                                <label><input type="radio" name="container" :checked="options.container === 'container'" @click="changeSize('container')">Узкий</label>
                                <label><input type="radio" name="container" :checked="options.container === 'container-fluid'" @click="changeSize('container-fluid')">Широкий</label>
                            </div>

                            <div>
                                <h5>Разметка</h5>
                                <label><input type="radio" name="grid">1</label>
                                <label><input type="radio" name="grid">2</label>
                                <label><input type="radio" name="grid">3</label>
                                <label><input type="radio" name="grid">4</label>
                            </div>





                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn btn-primary rounded-0 m-0">Card</button>
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
                },
                size:'',
                the_answer:'',
                answer:''
            }
        },

        props: {
            isSidebarShow: {
                type: Boolean,
                default: true
            },
            options: Object,
            default: ()=>{}
        },

        methods:{

            changeSize(size) {


                this.$emit('container-size', size);
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