
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var combobox1 = {};	// @combobox
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
        debugger;
        var abrv = sources.country.abbreviation;
		modifyLang(abrv);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
	};// @lock
	
	function modifyLang(abrv){
		
		jQuery.i18n.properties({
    		name: 'Messages',
    		path: '../bundle/',
    		mode: 'both',
    		language: abrv,
    		callback: function() {
      
        $$('welcomeText').setValue($.i18n.prop('msg_Welcome'));
        $$("chooseText").setValue($.i18n.prop('msg_choose'));
        $$('Title1').setValue($.i18n.prop('msg_home_title'));
        $$('Paragraph').setValue($.i18n.prop('msg_home_paragraph'));
      
    }
});
		
		
		
		}

// @region eventManager// @startlock
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
