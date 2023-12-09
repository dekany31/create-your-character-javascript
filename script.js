window.onload = function () {

  let characterNameInput = document.querySelector("#name");

  //a nevet beadom es kiirja
  function fnChangeName() {
    let name_value = characterNameInput.value;

    console.log("name value:" + name_value);
    document.querySelector("#character_name").innerText = name_value;
  }
  characterNameInput.addEventListener("keyup", fnChangeName);


  //az enter gomb nyomasa ne legyen gond a nev beadasanal
  function fnEnterEvent(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log('Enter key pressed');
      // return false;
    }
  }
  characterNameInput.addEventListener("keydown", fnEnterEvent);

  //img src-vel  a kep berakasa
  function fnChangeRaceSex() {
    let race_value = document.getElementById("race").value;
    let sex_value = document.getElementById("sex").value;
    let img_race = document.getElementById("img_race");
    // console.log("race value:" + race_value);
    // console.log("sex value:" + sex_value);
    // console.log("imgrace src:" + img_race);
    img_race.src = "./img/" + sex_value + "-" + race_value + (race_value === "elf" ? ".svg" : ".png");
    console.log("imgrace.src:" + img_race.src);
  }
  document.getElementById("race").addEventListener("change", fnChangeRaceSex);
  document.getElementById("sex").addEventListener("change", fnChangeRaceSex);


  function fnChangeClass() {
    let class_value = document.getElementById("class").value;

    //console.log("class value:" + class_value);
    document.getElementById("img_class").src = "./img/" + class_value + (class_value === "ranger" ? ".png" : ".svg");
  }
  document.getElementById("class").addEventListener("change", fnChangeClass);
}