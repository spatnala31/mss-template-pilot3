//Function for File Input to take filename and put in Text Input
function putFileName()
{
	      
    var fullPath = document.getElementById('fileToUpload').value;
        
    if (fullPath) {
        var arr1 = new Array;
        arr1 = fullPath.split("\\");
        var len = arr1.length;
        var img1 = arr1[len-1];
        var filext = img1.substring(img1.lastIndexOf(".")+1);

        if(filext == "doc" || filext == "docx" || filext == 'txt' || filext == 'pdf' || filext == 'rtf')
        {
            
            var size = document.getElementById('fileToUpload').files[0].size;
                 
             
            if(parseInt(size)<2097152) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
            	
                document.getElementById("fileDestination").value = filename;
                  
            }else {
                   
                showAlertModal("File size must be less than 2 MB");
                return (false);
            }
        }else {
            showAlertModal("Invalid File Format Selected.Please choose doc/docx/txt/pdf/rtf formats.");

            return false;
        }
            	
    }
}
	    
//Function to hide alert element
function showAlertModal(msg)
{
    document.getElementById('showAlertText').innerHTML = msg;
    $('#myModal').modal('show');
    return false;
}

//Function to show SCVP Modals
function showAlertModalSCVP(a)
{
    alert('test');
    if(a==0)
    {
        $('#myModal1').modal('show');
    }else if(a==1)
    {
        $('#myModal2').modal('show');
    }else{
        $('#myModal3').modal('show');
    }
}

//Contact Form Validation
function validateForm()
{
    if(validateEmail(document.forms['myForm']['email'].value)==1)
    {
        return showAlertModal('Please enter a valid Email Address!!');
    }
    
    return true;
}

//Email Validation Method
function validateEmail(str)
{
    var atpos = str.indexOf("@");
    var dotpos = str.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return 1;
    }
    else
    {
        return 0;
    }
}

//No Number method; On Key Press
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}   