
let myData = JSON.parse(localStorage.getItem("students")) ;
console.log(myData);


// function displayData(myData){
    // document.querySelector("#conatiner").innerHTML = "";
    // var delData =[];
    myData.map(function (elem,index) {
        // event.preventDefault();
        var tr = document.createElement("tr");
      
        var td1 = document.createElement("td");
        td1.innerText = elem.name;

        var td2 = document.createElement("td");
        td2.innerText = elem.course;

        var td3 = document.createElement("td");
        td3.innerText = elem.unit;
      
        var td4 = document.createElement("img");
        td4.src = elem.image;

        var td5 = document.createElement("td");
        td5.innerText = elem.batch;
      
        var td6 = document.createElement("td");
        td6.textContent = "Remove";
        td6.style.color = "red";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function () {
          removeData(elem,index);
        });
        tr.append(td1, td2, td3, td4, td5, td6);
      
        document.querySelector("#body").append(tr);
      });

      function removeData(elem, index){
        console.log(elem, index);
        myData.splice(index, 1);
        console.log(myData);
        localStorage.setItem("data", JSON.stringify(myData));
        window.location.reload();

      }
