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

var accordion = document.querySelector(".accordingTittle");

accordion.addEventListener("change", function (e) {
  
  var accordionValue = e.target.value;
  console.log(accordionValue)
  var accordionContent = document.querySelectorAll(".accordingContent");

  // accordionContent.forEach((element) => {
  //   var datid = element.getAttribute("data-id");
  //   if(datid==accordionValue){
  //     element.classList.add("infoContentOpen");
  //   } else{
  //     element.classList.remove("infoContentOpen");
  //   }
  // })


  document.querySelector("."+accordionValue).classList.add("infoContentOpen");

})

// end