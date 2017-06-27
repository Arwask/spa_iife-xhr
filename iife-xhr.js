function showCarnivores (carnivores) {
  for(let i=0; i<carnivores.length; i++)
  	{
  		document.write(carnivores[i] + "\n");
  	}
  	Predator.loadHerbivores(showHerbivores);
}

function showHerbivores (herbivores) {
	for(let i=0; i<herbivores.length; i++)
  	{
  		document.write(herbivores[i] + "\n");
  	}
}
Predator.loadCarnivores(showCarnivores);