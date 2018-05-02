Vue.component('modal', {
  template: `
          <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
              <!-- Any other Bulma elements you want -->
        
              <div class="box">
                <slot></slot>
              </div>
        
        
            </div>
            <button class="modal-close" @click="$emit('meuclickfechar')"></button>
          </div>
    `

});


new Vue({
  el: '#root',
  data: {
    showModal: false
  }
});