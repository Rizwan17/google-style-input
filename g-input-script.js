var gInputContainer = document.getElementsByClassName("g-input-container");

for(var i=0; i<gInputContainer.length; i++){

	var gInput = gInputContainer[i].getElementsByTagName("input")[0];
	var label = gInputContainer[i].getElementsByTagName("label")[0];
	gInput.addEventListener("focus", addGEffect.bind(this, gInputContainer[i]));

}


function addGEffect(gInput){
	for(var i=0; i<gInputContainer.length; i++){
        if(gInputContainer[i].getElementsByTagName("input")[0].value == ""){
            gInputContainer[i].classList.remove('active');
        }else{
            gInputContainer[i].classList.add('active');
        }
    }
  gInput.classList.add('active');
}