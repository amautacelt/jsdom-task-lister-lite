document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskForm = document.querySelector("#create-task-form")
  let taskColorForm  = document.querySelector("#priority-color-form")
  
  taskForm.addEventListener('submit', event => {
  event.preventDefault();

  if (event.target){

    let taskUl = document.querySelector("#tasks")

    let taskLi = document.createElement("li")
      taskLi.textContent = taskForm['new-task-description'].value

    taskLi.addEventListener('click', event => {
      taskLi.remove()
    });

    taskUl.append(taskLi)
  }

});

  taskColorForm.addEventListener('submit', event => {
    event.preventDefault();

    if (event.target){
      let list = document.querySelectorAll('li')
        list.forEach(listItem => {
          listItem.style.color = event.target.color.value
        })
    }

    event.target.reset();

  })

  function sortArr(){
    let listArr = []
    let list = document.querySelectorAll('li')

    listArr.push(list)
    listArr.sort()

    console.log(list)
  }

  sortArr()


});
