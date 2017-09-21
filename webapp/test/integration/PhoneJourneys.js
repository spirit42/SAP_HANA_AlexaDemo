jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"fsm/dev/test/integration/NavigationJourneyPhone",
		"fsm/dev/test/integration/NotFoundJourneyPhone",
		"fsm/dev/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});