var awrcApp = angular.module("awrcApp", [ "ngRoute", "ngCookies", 'ui.bootstrap', 'duScroll', 'ngTable' ]);

var IAMVERYSUPER = "iamverysuper";

awrcApp.config(function ($routeProvider) {
	$routeProvider
		.when("/", { redirectTo: "/accounts" })
		.when("/accounts", { controller: "HomeAccountsListController", templateUrl: "app/partials/home_accounts_list_partial.html" })
		.when("/templates", { controller: "HomeTemplatesController", templateUrl: "app/partials/home_templates_partial.html" })
		.when("/template/:template_id", { controller: "TemplateController", templateUrl: "app/partials/template_partial.html" })
		.when("/template", { controller: "TemplateController", templateUrl: "app/partials/template_partial.html" })
		.when("/template_help", { controller: "StaticContentController", templateUrl: "app/partials/template_help_partial.html" })
		.when("/account/:mccid", { controller: "AccountController", templateUrl: "app/partials/account_partial.html" })
		.when("/healthcheck", { controller: "HealthCheckController", templateUrl: "app/partials/health_check_partial.html" })
		.when("/account/:mccid/export", { controller: "DocExportController", templateUrl: "app/partials/doc_export_partial.html" })
		.when("/account/:mccid/rawdata", { controller: "RawDataController", templateUrl: "app/partials/raw_data_partial.html" })
		.when("/new_mcc/:mccid", { controller: "OnboardingController", templateUrl: "app/partials/onboarding_partial.html" })
		.when("/error/:error_code", { controller: "ErrorController", templateUrl: "app/partials/error_partial.html" })
		.when("/404_page", { controller: "Controller404", templateUrl: "app/partials/404_page_partial.html" })
		.otherwise( { redirectTo: "/" });
});
