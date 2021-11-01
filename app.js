window.onload =function()
{
    var loadsearch = document.getElementById('look');
    var httpRequest = new XMLHttpRequest();

    loadsearch.addEventListener('click', function(e)
    {
        console.log('button clicked')
        var url = "http://localhost/info2180-lab4/superheroes.php";
        e.preventDefault();
        httpRequest.onreadystatechange = function() 
        {
           
            if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200)
            {  
                var output = document.getElementsByClassName("msg").item(0);
                var response = httpRequest.responseText;
                output.innerHTML = response; 

                var searchItem =$('#lookup').val();
                searchItem=searchItem.trim();
                
            }
            else
            {
                var msg ="problem";
                msg.innerHTML = msg;
            }   
        };
        httpRequest.open('GET', url);
        httpRequest.send(); 
    });
}