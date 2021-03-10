var images = ["159178486753.jpg","9d42b6da-f2ee-4fb8-b61b-b20005fbe822.jpg" , "222db1d0-5e21-4bcb-9410-ebc8056c8eab.jpg",];
var names = ["Fmaily Book","Ravi", "Shritan", "Surekha"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
