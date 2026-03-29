//AMC
//adacey's chemical mod
//COMMUNITY R74ncord PROJECT TO MOD EVERY CHEMICAL ELEMENT INTO SANDBOXELS
console.log("vro just play the mod")
elements.bromine = {
  color: ["#401505","#401005","#401107","#3d190a"],
  tempLow: -7.2,
  tempHigh: 58.8,
  stateLow: frozen_bromine,
  stateHigh: bromine_gas,
  state: liquid
  category: liquids
  viscosity: 0.944
	reactions: {
		"aluminum": {elem1:null, elem2:"aluminum_bromide" },
    "water": {elem1:null, elem2:"hydrobromic_acid"},
    "propane": {elem1:"hydrobromic_acid", elem2:"2-bromopropane"},
    "hydrogen": {elem1:"hydrobromic_acid", elem2:"hydrobromic_acid", tempMin:400},
    "gold": {elem1:null, elem2:"gold_bromide", tempMin:140, tempMax:160},
    "gold_coin": {elem1:null, elem2:"gold_bromide", tempMin:140, tempMax:160},
    "iron": {elem1:null, elem2:"iron_bromide"},
    "oxidized_copper": {elem1:"oxygen", elem2:"copper_bromide"},
    "copper": {elem1:null, elem2:"copper_bromide"},
    "silver": {elem1:null, elem2:"silver_bromide"},
    "aluminum": {elem1:"smoke", elem2:"aluminum_bromide"},
    "sodium": {elem1:"pop", elem2:"sodium_bromide"},
    "copper": {elem1:null, elem2:"copper_bromide"},
    "magnesium": {elem1:null, elem2:"magnesium_bromide"},
    "sulfur": {elem1:[null,"disulfur_dibromide"], elem2:"disulfur_dibromide"},
  }
