let now = new Date().toLocaleDateString();
const newTo_Do = document.querySelector(".newTo_Do");
newTo_Do.addEventListener("click", function () {
const Taskname = document.querySelector(".Task_name").value;
const Tasktime = document.querySelector(".Time").value;
const Taskdate = document.querySelector(".Date").value;
const Task_description = document.querySelector(".Task_description").value;


    const info = {
        'name':Taskname,
        'time':Tasktime,
        'date':Taskdate,
        'description':Task_description,
    }
    async function newTo$Do() {
        console.log(info)

        const a = await newSend("/","POST",info)
        if(a.message=='true'){
            alert('Добавили')
            window.location.href="/"
        }else{
            alert('Ошибка')
        }
    }
     newTo$Do()
     async function newSend(url,method,data) {
        try {
            let body=JSON.stringify(data);
      
            let headers={}
            headers['Content-Type']="application/json";
              const response = await fetch(url, {
                  method,
                  headers: { "Accept": "application/json", "Content-Type": "application/json" },
                  body
                
              });
              return await response.json()
          } catch (error) {
          console.log('err')
              
          }
     }
});


let deleteA = document.querySelectorAll('.deleteA')

deleteA.forEach(del  =>del.addEventListener('click',function(e){
    e.preventDefault() 
    const to_do = {id:e.target.getAttribute('href'),}
  
    
    async function delTo$Do() {
       
        const a = await delSend("/","DELETE",to_do)
        if(a){
            window.location.href="/"
        }else{
            alert('Ошибка')
        }
    }
     delTo$Do()
})
);

 async function delSend(url,method,data) {
    try {
        let body=JSON.stringify(data);
  
        let headers={}
        headers['Content-Type']="application/json";
          const response = await fetch(url, {
              method,
              headers: { "Accept": "application/json", "Content-Type": "application/json" },
              body
            
          });
          return await response.json()
      } catch (error) {
      console.log('err')
          
      }
 }


 

 const Status = document.querySelectorAll('.Status')
Status.forEach(el=>el.addEventListener("click", function (e) {

    const to_do = e.target.getAttribute('value')
    console.log(to_do)

        async function newTo$Do() {
            const info = {
                taskId:to_do,
              
        
            }
    
            const a = await newSend("/SetStatus","PUT",info)
            if(a){
                if(a){
                alert('Добавили')
                window.location.href="/"
            }else{
                alert('Ошибка')
            } 
            }
           
        }
         newTo$Do()
         async function newSend(url,method,data) {
            try {
                let body=JSON.stringify(data);
          
                let headers={}
                headers['Content-Type']="application/json";
                  const response = await fetch(url, {
                      method,
                      headers: { "Accept": "application/json", "Content-Type": "application/json" },
                      body
                    
                  });
                  return await response.json()
              } catch (error) {
              console.log('err')
                  
              }
         }
        })
    )

