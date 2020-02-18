function comparePass()
{
        var pw1 = document.getElementById('pass1').value;
        var pass2 = document.getElementById('pass2').value;
        
        if (pass2 !== pw1)
        {
            document.getElementById('pass').innerHTML = 'Passwords do not match';
        }
        else
        {
            document.getElementById('pass').innerHTML = 'Passwords Match';
        }
}