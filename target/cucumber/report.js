$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/casualDressFinding.feature");
formatter.feature({
  "name": "Casual Dress Finding",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression1"
    }
  ]
});
formatter.background({
  "name": "Go to homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to shopping homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "ShoppingDressTypes_steps.user_goes_to_shopping_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers over on Dresses",
  "keyword": "And "
});
formatter.match({
  "location": "ShoppingDressTypes_steps.user_hovers_over_on_Dresses()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verification of Casual Dresses",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression1"
    },
    {
      "name": "@shopping"
    }
  ]
});
formatter.step({
  "name": "user click on Casual Dresses",
  "keyword": "When "
});
formatter.match({
  "location": "ShoppingDressTypes_steps.user_click_on_Casual_Dresses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should display \"CASUAL DRESSES\" header",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingDressTypes_steps.page_should_display_header(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Go to homepage",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to shopping homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "ShoppingDressTypes_steps.user_goes_to_shopping_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers over on Dresses",
  "keyword": "And "
});
formatter.match({
  "location": "ShoppingDressTypes_steps.user_hovers_over_on_Dresses()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verification of Evening Dresses",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression1"
    },
    {
      "name": "@uniqueID"
    }
  ]
});
formatter.step({
  "name": "user click on Evening Dresses",
  "keyword": "When "
});
formatter.match({
  "location": "ShoppingDressTypes_steps.user_click_on_Evening_Dresses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page should display \"EVENING DRESSES\" header",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingDressTypes_steps.page_should_display_header(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    formatter.embedding("image/png", "embedded0.png");
formatter.write("THIS SCENARIO FAILED");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Mvn Repo Search verification - POSITIVE",
  "description": "\tUser should search for testng in Mvn Repo and find the result",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@mvnSearch"
    },
    {
      "name": "@smokeTest"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@unique"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to mvnrepository application",
  "keyword": "Given "
});
formatter.match({
  "location": "MvnRepoSearch_steps.user_goes_to_mvnrepository_application()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.MvnRepoSearch_steps\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 33 more\nCaused by: org.openqa.selenium.WebDriverException: unknown error: failed to change window state to fullscreen, current state is normal\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.40.565386 (45a059dc425e08165f9a10324bd1380cc13ca363),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027MacBook-Pro-Bekzhan.local\u0027, ip: \u00272603:300a:16aa:1000:0:0:0:c252%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565386 (45a059dc425e08..., userDataDir: /var/folders/w6/53vbf8bn63j...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 67.0.3396.99, webStorageEnabled: true}\nSession ID: 7bc340ca8438bf3b56beae79d608fa62\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.fullscreen(RemoteWebDriver.java:832)\n\tat utilities.Driver.getDriver(Driver.java:38)\n\tat page.MvnRepoHomePage.\u003cinit\u003e(MvnRepoHomePage.java:15)\n\tat steps.MvnRepoSearch_steps.\u003cinit\u003e(MvnRepoSearch_steps.java:16)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user searches for \"testng\"",
  "keyword": "When "
});
formatter.match({
  "location": "MvnRepoSearch_steps.user_searches_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should get \"TestNG\" in first result",
  "keyword": "Then "
});
formatter.match({
  "location": "MvnRepoSearch_steps.user_should_get_in_first_result(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("THIS SCENARIO FAILED");
formatter.after({
  "status": "passed"
});
});