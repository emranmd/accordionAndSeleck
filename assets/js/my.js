// start

var selectContainer = document.querySelector("#selectContainer")

selectContainer.addEventListener("change", function (e) {

  var optionValue = e.target.value;
  var infoContent = document.querySelectorAll(".infoContent");

  infoContent.forEach((items) => {
    items.classList.remove("infoContentOpen");
  })

  document.querySelector("."+optionValue).classList.add("infoContentOpen");

})

// end

// start

// var selectContainer = document.querySelector("#selectContainer");

//   selectContainer.addEventListener("change", function (e) {
//     var optionValue = e.target.value;
//     var content = document.querySelectorAll(".infoContent");

//     content.forEach ((item) => {
//       var dataID = item.getAttribute("data-id");
//       if(dataID==optionValue){
//         item.classList.add("infoContentOpen");
//       } else{
//         item.classList.remove("infoContentOpen");
//       }
//     });

//   });

// end

// start

var accordion = document.getElementsByClassName("accordingContainer");

  for(i = 0; i<accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });

  };

// end

// start



// end 