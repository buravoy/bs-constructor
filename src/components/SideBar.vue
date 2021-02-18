<template>
  <div :class="{ hide: !$store.state.bars.isSideShow }" class="sidebar">

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

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">

              <div>
                <h5>Макет</h5>

                <label><input type="radio" name="container">Узкий</label>
                <label><input type="radio" name="container">Широкий</label>
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
    <button ref="button" class="btn btn-primary rounded-0 m-0">Button</button>

    <div class="items-list">
      <div @mouseover="readyToMove"
           class="item border bg-light p-2">

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'SideBar',

  data(){
    return{
      moving: false
    }
  },

  methods: {

    readyToMove(el) {
      const item = el.target.closest('.item');

      item.onmousedown = function(e) {
        const coords = {
          top: item.getBoundingClientRect().top + pageYOffset,
          left: item.getBoundingClientRect().left + pageXOffset
        };

        const shiftX = e.pageX - coords.left;
        const shiftY = e.pageY - coords.top;

        item.style.position = 'absolute';
        document.body.appendChild(item);
        moveAt(e);

        item.style.zIndex = 1000; // над другими элементами

        function moveAt(e) {
          item.style.left = e.pageX - shiftX + 'px';
          item.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function(e) {
          moveAt(e);
        };

        item.onmouseup = function() {
          document.onmousemove = null;
          item.onmouseup = null;
        };

      }

      document.ondragstart = function() {
        return false;
      };

    },


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

.item {
  /*transition: .1s;*/
}

.items-list {
  position: relative;
}

.item {
  cursor: pointer;
  width: 20px;
  height: 50px;
}
</style>