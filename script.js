
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxPFW07EaYi_FWLqGcqPcHK8sww-W8uzUfZmnmFTxVFPgO0f3zquiwBBc6izGkAQTx8qg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {msg.innerHTML="Message send successfully!"
    setTimeout(function(){
        msg.innerHTML=""
    },5000)
    form.reset()
})
        .catch(error => console.error('Error!', error.message))
    })


        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");

        }



// <!-- -----------this script when we using mobile 
//                        this site nedd to 
//              be work ok to show menus we use this--- -->
            
                var sidemenu=document.getElementById('sidemenu');

                function openmenu(){
                    sidemenu.style.right="0";
                }
                function closemenu(){
                    sidemenu.style.right="-200px";
                }
           
