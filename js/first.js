var Site_name = document.getElementById("Site_name");
var Website_Url=document.getElementById("Website Url");
var submit_btn = document.getElementById("submit");
var last_section=document.getElementById("last_section");
var Name_require =document.getElementById("name_require");
var Url_require=document.getElementById("Url_require");
var visit_list;
if (localStorage.getItem("our websites")!=null)
{
  last_section.style.display="block";
  visit_list=JSON.parse(localStorage.getItem("our websites"));
  display_web_list(visit_list);
  
  
}
else
{
 
  last_section.style.display="none";
  visit_list=[];
}

submit_btn.addEventListener("click",add_sites);

function add_sites()
{
  var websites_visit=
  {
    web_name:Site_name.value,
    web_url:Website_Url.value
  }
  if(Site_name.value==""&& Website_Url.value=="")
  {
    Name_require.style.display="block";
    Url_require.style.display="block";
  }
  else if (Site_name.value=="")
  {
    Name_require.style.display="block";
    Url_require.style.display="none";
  }
  else if (Website_Url.value=="")
  {
    Name_require.style.display="none";
    Url_require.style.display="block";
  }
else
{
  last_section.style.display="block"; 
  visit_list.push(websites_visit);
  localStorage.setItem("our websites",JSON.stringify(visit_list));
  display_web_list(visit_list);
  clearForm();
  Name_require.style.display="none";
  Url_require.style.display="none";

}


}

function clearForm()
{
    Site_name.value="";
    Website_Url.value="";  
}

function display_web_list(Any_list)
{
  
    var list="";
    for(var i=0; i<Any_list.length; i++)
    {
  
      list+=`  <div id="Addition_one" class="w-50 pr-5 pb-5">
      <div>
      <h2>${Any_list[i].web_name}</h2>
  </div>
  <div>
      <button id="visit" class="btn "><a href="http://${Any_list[i].web_url}" target="_blank">Visit</a></button>
      <button onclick="delete_website(${i})" id="btn-delete" class="btn btn-danger">Delete</button>
  </div>
  </div>`
    }
    
    document.getElementById("last_section").innerHTML=list
   
  
  
  


}
function delete_website(index)
{
    visit_list.splice(index,1);
    localStorage.setItem("our websites",JSON.stringify(visit_list));
    if (localStorage.getItem("our websites")!=[])
    {
      display_web_list(visit_list);
    }
    else
    {
      last_section.style.display="none"; 
    }
    
    

}

