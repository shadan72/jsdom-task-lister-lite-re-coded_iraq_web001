document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inpuTask=document.getElemetById('new-task-description');
    const inputButton=document.getElemetById('new-task-description');
    const Ultasks=document.getElemetById('tasks');
    let liArr=[]
inputButton.addEventListener('click',adding())
function adding(){
  liArr.push(inpuTask.value)
  for(let i=0;i<liArr.length;i++)
  {
  const items=document.createElement('li')
  items.innerText=inpuTask.value
  Ultasks.appendChild(items)
  }
}
  
});
