document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
});
const form=document.getElementById('create-task-form')
const inpuTask=document.getElementById("new-task-description");
    const inputButton=document.getElementsByTagName("input")[1];
    const Ultasks=document.getElementById('tasks');
    let liArr=[]
    inputButton.addEventListener('submit',(event){
      e.
    })

function adding(){
  liArr.push(inpuTask.value)
  for(let i=0;i<liArr.length;i++)
  {
  const items=document.createElement('li')
  items.innerText=inpuTask.value
  Ultasks.appendChild(items)
  }
}

