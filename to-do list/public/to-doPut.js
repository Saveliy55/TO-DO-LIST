const newTo_Do = document.querySelector('.newTo_Do')
newTo_Do.addEventListener("click", function () {
    const Taskname = document.querySelector(".Task_name").value;
    const currentID = document.querySelector(".currentID").value;
    
        const info = {
            'id':currentID,
            'name':Taskname,
    
        }
        async function newTo$Do() {
            console.log(info)
    
            const a = await newSend("/","PUT",info)
            if(a){
                alert('Изменили')
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
    