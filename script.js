function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
             var response = JSON.parse(this.responseText);
             var klist=response.list;
            var tbody = document.getElementById("tab-body");
            var trow="";

            for(var i=0; i<klist.length; i++){

                trow += `<tr>
                <th scope="row">${klist[i].sNo}</th>      
                <td>${klist[i].itemNam}</td> 
                <td>${klist[i].qnty}</td> 
                <td>${klist[i].unit}</td> 
                <td>${klist[i].dept}</td> 
                <td>${klist[i].note}</td>
                <td><input class="checkk" type="checkbox" id="checking"> </td>
                </tr>`;
           }
            tbody.innerHTML = trow;

        }}
        xhttp.open("GET","./list.json",true);
        xhttp.send();
}

window.addEventListener("load", ajax);


function strikeon(){
    

}




//////////////////////////////////////////////////////////////////////////































































// var tbody2 = document.getElementById("tab-body2");
// const btninsert= document.getElementById("btninsert");


//     document.getElementById("sn1").value=getSavedValue("sn1");
//     document.getElementById("in1").value=getSavedValue("in1");
//     document.getElementById("qt1").value=getSavedValue("qt1");
//     document.getElementById("un1").value=getSavedValue("un1");
//     document.getElementById("de1").value=getSavedValue("de1");
//     document.getElementById("no1").value=getSavedValue("no1");
    
//     function saveValue(e){
//         var id = e.id;
//         var val=e.value;
//         localStorage.setItem(id, val);

//     }
//     function getSavedValue (v){
//         if (!localStorage.getItem(v)){
//             return "";
//         }
//         return localStorage.getItem(v);
//     }
     

//         tbody2.innerHTML=`<tr><th>${sn1}</th><td>${in1}</td><td>${qt1}</td><td>${un1}</td><td>${de1}</td><td>${no1}</td></tr>`;




















// // function addnew(){
// //     const sn1=document.getElementById("sn1").value;
// //     const in1=document.getElementById("in1").value;
// //     const qt1=document.getElementById("qt1").value;
// //     const un1=document.getElementById("un1").value;
// //     const de1=document.getElementById("de1").value;
// //     const no1=document.getElementById("no1").value;
    
// //     if(sn1.trim()==""||in1.trim()==""||qt1.trim()==""||un1.trim()==""||de1.trim()==""||no1.trim()==""){
        
// //     }
// //     else{



// //         var tbody2 = document.getElementById("tab-body2");
// //         tbody2.innerHTML=`<tr><th>${sn1}</th><td>${in1}</td><td>${qt1}</td><td>${un1}</td><td>${de1}</td><td>${no1}</td></tr>`;
    
// //     }}
    


















































