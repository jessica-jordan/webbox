import Ember from 'ember';

var TeaseMeController = Ember.ArrayController.extend({
	
	init: function() {
		this._super();
        this.chooseLetter();
    },
    growingCode: "",
    i: 0,
    /*seqData: function(){
		var seq = this.get('model.nts');
		return seq;
	},*/
    nts: "GTATCTATCTATCTGTGCTCGATGATATATA", 
    /*len: function(){
		this._super();
		return 3;
		//return "GTATATCTCT";
	}.property('nts'),*/
	len: 7,
    currentLetter: "", 
    chooseLetter: function() {
		var tthis = this;
		//var seqData = tthis.seqData;
		var seqData = tthis.nts;
		if (tthis.i <= tthis.len){
			console.log(tthis.i);
			tthis.currentLetter = seqData.substring(tthis.i,tthis.i+1); 
			//code.innerText = code.textContent +=  currentLetter;
			console.log(tthis.currentLetter);
			tthis.growingCode += tthis.currentLetter;
			console.log(tthis.growingCode);
			this.set('growingCode',tthis.growingCode);
			tthis.i++;	
			Ember.run.later(function(){tthis.chooseLetter();}, 1800);		
		}
		else{
			return false;
		}
	},
});

export default TeaseMeController;


