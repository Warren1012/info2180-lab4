window.onload =function()
{
    var loadsearch = document.getElementById('search');
    var httpRequest = new XMLHttpRequest();

    loadsearch.addEventListener('click', function(e)
    {
        console.log('button clicked')
        var url = "http://localhost/info2180-lab4/superheroes.php";
        
        httpRequest.onreadystatechange = function() 
        {
           
            if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200)
            {
                 
                var response = httpRequest.responseText;  
                alert(response)              
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