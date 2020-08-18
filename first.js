let WebsiteNameAlert=document.getElementById("WebsiteNameAlert");
let WebsiteUrlAlert= document.getElementById("WebsiteUrlAlert");
var siteName=document.getElementById("siteName");
var urlName=document.getElementById("urlName");
let submit = document.getElementById('submit');
let list=document.getElementById("list");
let  bookMarkList;

if (localStorage.getItem("site") == null) {
    bookMarkList = [];
    list.style.display="none";
}
else {

    bookMarkList = JSON.parse(localStorage.getItem("site"));
    displayList(bookMarkList);
    list.style.display="block";
}
let regex=/^[a-zA-Z]{4,20}$/
let regex_2=/^(www.)[a-z0-9]+\.[a-z]{2,4}(\/[a-zA-Z0-9#]+\/?)*$/
siteName.addEventListener("keyup",function()
{
    if(regex.test(siteName.value)==true)
    {
        WebsiteNameAlert.classList.replace("d-block","d-none");
        siteName.classList.add("is-valid");
        siteName.classList.remove("is-invalid");
    }
    else
    {
        WebsiteNameAlert.classList.replace("d-none","d-block");
        siteName.classList.add("is-invalid");
        siteName.classList.remove("is-valid");

    }

});


urlName.addEventListener("keyup",function()
{
    if(regex_2.test(urlName.value)==true)
    {
        WebsiteUrlAlert.classList.replace("d-block","d-none");
        urlName.classList.add("is-valid");
        urlName.classList.remove("is-invalid");
    }
    else
    {
        WebsiteUrlAlert.classList.replace("d-none","d-block");
        urlName.classList.add("is-invalid");
        urlName.classList.remove("is-valid");

    }

});



function Add_website_list()
{
    let errorName = document.getElementById('errorName');
    let errorUrl = document.getElementById('errorUrl');
    let webSite = 
    {
         name: siteName.value,
          url: urlName.value }

    if (siteName.value !="" && urlName.value !="") {
        bookMarkList.push(webSite);
        localStorage.setItem("site", JSON.stringify(bookMarkList));
        errorName.style.display = 'none';
        errorUrl.style.display = 'none';
        list.style.display="block";
        displayList(bookMarkList);
        clearForm();
    }
    else if(siteName.value =="" && urlName.value =="")
    {
        errorName.innerHTML = 'Name is required';
        errorUrl.innerHTML = 'URL is required';
        errorUrl.style.display = 'block';
        errorName.style.display = 'block';
        
    }
    else if(siteName.value !="")
    {
        errorName.style.display = 'none';
    }
    else if(urlName.value !="")
    {
        errorUrl.style.display = 'none';
    }
    else if (siteName.value =="") 
          {
            errorName.innerHTML = 'Name is required';
            errorName.style.display = 'block';
        }
       else if (urlName.value =="") 
        {
            errorUrl.innerHTML = 'URL is required';
            errorUrl.style.display = 'block';
        }
    }

    submit.addEventListener('click',Add_website_list);

    function displayList(arr) {
       let siteList = "";
        for (var i = 0; i < arr.length; i++) {
            siteList +=` <div class="rounded p-3 bg my-3">
            <div class="row py-4">
                <div class="col-md-6">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h3>${arr[i].name}</h3>
                        </div>
                        <div>
                            <button class="btn btn-primary visit-btn mr-1"><a href="http://${arr[i].url}"
                                    target="_blank">Visit</a></button>
                            <button onclick="delSite(${i})" class="btn btn-danger visit-btn-1 ">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
                
        }
        list.innerHTML = siteList;
    }

    
function clearForm() {
    siteName.value = "";
    urlName.value = "";
}
function delSite(index) {
    bookMarkList.splice(index, 1)
    localStorage.setItem("site", JSON.stringify(bookMarkList));
    displayList(bookMarkList);
    
}

    

