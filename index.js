const submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    axios.post("https://crudcrud.com/api/39eac7f9ac0c40bf898933a1d4aaa864/apointment", {
        name: name,
        email: email
    });
})

const get = document.getElementById("get");
get.addEventListener("click",async(e)=>{
    let res = await axios.get("https://crudcrud.com/api/39eac7f9ac0c40bf898933a1d4aaa864/apointment");
    //res = res.JSON();
    let data = res.data;
    
    // data
    const table = document.getElementById("table");
    table.innerHTML = '';
   // console.log(data);
   const tr = document.createElement("tr");
        const td1 = document.createElement("th");
        td1.appendChild(document.createTextNode("Id"));
        const td2 = document.createElement("th");
        td2.appendChild(document.createTextNode("Name"));
        const td3 = document.createElement("th");
        td3.appendChild(document.createTextNode("Email"));
       
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        //tr.appendChild(td4);
        table.appendChild(tr);
        td1.style.border = "1px solid black";
        td2.style.border = "1px solid black";
        td3.style.border = "1px solid black";
        
    for(let i=0;i<data.length;i++){
       // console.log("data ",data[i]);
        // const obj = data["i"];
        // console.log(obj);
        // console.log(obj["_id"]);
        // console.log(obj["name"]);
        const id = data[i]["_id"];
        const name = data[i]["name"];
        const email = data[i]["email"];
        console.log(id,name,email);
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(id));
        const td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(name));
        const td3 = document.createElement("td");
        td3.appendChild(document.createTextNode(email));
        const del = document.createElement("button");
        del.class ="btn btn-danger";
        del.border = "none";
        del.appendChild(document.createTextNode("Delete"));
        const edit = document.createElement("button");
        del.class ="btn btn-primary";
        del.border = "none";
        edit.appendChild(document.createTextNode("edit"));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(del);
        tr.appendChild(edit);
        table.appendChild(tr);
        td1.style.border = "1px solid black";
        td2.style.border = "1px solid black";
        td3.style.border = "1px solid black";
        del.style.border = "1px solid black";
        edit.style.border = "1px solid black";
        del.addEventListener("click",(e)=>{
            axios.delete(`https://crudcrud.com/api/39eac7f9ac0c40bf898933a1d4aaa864/apointment/${id}`);
            //showDetails();
            console.log("delete successfull");
        })
        edit.addEventListener("click",(e)=>{
            //const name = document.getElementById
            //e.preventDefault();
                        
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            axios.put(`https://crudcrud.com/api/39eac7f9ac0c40bf898933a1d4aaa864/apointment/${id}`, {
               name: name,
               email: email
            });
            
        })
    }
})
