jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 customers in the list
// * All 3 customers have at least one interventions

sap.ui.require([
	"sap/ui/test/Opa5",
	"fsm/dev/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"fsm/dev/test/integration/pages/App",
	"fsm/dev/test/integration/pages/Browser",
	"fsm/dev/test/integration/pages/Master",
	"fsm/dev/test/integration/pages/Detail",
	"fsm/dev/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "fsm.dev.view."
	});

	sap.ui.require([
		"fsm/dev/test/integration/MasterJourney",
		"fsm/dev/test/integration/NavigationJourney",
		"fsm/dev/test/integration/NotFoundJourney",
		"fsm/dev/test/integration/BusyJourney",
		"fsm/dev/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});