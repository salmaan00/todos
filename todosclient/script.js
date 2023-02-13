class TodoServices{
    getToken(data){
        console.log(data);
        let url=`http://127.0.0.1:8002/token/`
        let payLoad=JSON.stringify(data)
        let option={
            method:"POST",
            body:payLoad,
            headers:{
                'Content-type':'application/json; charset=UTF-8',
            }
        }
        return fetch(url,option)
    }
}
var service=new TodoServices()
  e:/myDjango/myenv/Scripts/activate.bat
// 
function authenticate(){
    let username=id_username.value
    let password=id_password.value
    console.log(username,password)
    let data={username,password}
    service.getToken(data).then(res=>res.json()).then(data=>console.log(data))
    // console.log(data)
} 