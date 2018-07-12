//backend
function Product( name, description, size, color, price, location ) {

  this.name = name;
  this.description = description;
  this.size = Size;
  this.color= color;
  this.price= price;
  this.location= location;
};



function showMyImage(fileInput) {
        var files = fileInput.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var imageType = /image.*/;
            if (!file.type.match(imageType)) {
                continue;
            }
            var img=document.getElementById("thumbnil");
            img.file = file;
            var reader = new FileReader();
            reader.onload = (function(aImg) {
                return function(e) {
                    aImg.src = e.target.result;
                };
            })(img);
            reader.readAsDataURL(file);
        }
    };
//frontend
$(document).ready(function() {
  $("form#renting-form").submit(function() {
    event.preventDefault();
    var nameInput = $("input#product-name").val();
    var descriptionInput =$("input#product-description").val();
    var sizeInput = $("input#product-size").val();
    var colorInput = $("input#product-color").val();
    var priceInput = $("input#product-price").val();
    var location = $("input#product-location").val();

    var product = new Product(nameInput,descriptionInput,sizeInput,colorInput, priceInput,location )

$("div#portgal").append('<div class="column">' +
                         '<div class="product-display">' +
                         '<img src="" alt= style="width:100%">' +
                         '<div class="container">' +
                          '<h2>'+ product.name + '</h2>' +
                        '<p>'+product.description+'</p>'+
                      '<p>Size :'+product.size+'</p>'+
                    '<p>'+product.color+'</p>' +
                    '<p>Price :'+product.price+'</p>' +
                    '<p>'+product.location+'</p>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                  );
  });
})
