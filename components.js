Vue.component('tasks-list', {
  template: '<div><task v-for="task in tasks"> {{ task.description }} </task></div>',
  
  //data has to be a function when it is in a component
  data() {
    //and it has to return something
    return {
      tasks: [
        { description: "ir ao banco" },
        { description: "Ir na academia" },
        { description: "Estudar Inglês" }
      ]
    } 
  }
})

Vue.component('task', {
  template: '<li><slot></slot></li>'
})

new Vue({
  el: '#root'
})