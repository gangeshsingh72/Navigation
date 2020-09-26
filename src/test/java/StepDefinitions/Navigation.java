package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Navigation {

    public static WebDriver driver;

    @Given("^That I am a Chrome user$")
    public void that_I_am_a_Chrome_user() {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Test is going to begin");
    }

    @When("^I access \"([^\"]*)\" page$")
    public void i_access_page(String Webpage) {
        // Write code here that turns the phrase above into concrete actions
        driver = new ChromeDriver();
        driver.get(Webpage);

    }

    @Then("^I can see \"([^\"]*)\" on page title$")
    public void i_can_see_on_page_title(String Website) {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(driver.getTitle().contains(Website));

    }

    @Then("^I access \"([^\"]*)\" And I can see \"([^\"]*)\" on page title$")
    public void i_access_And_I_can_see_on_page_title(String SecondSite, String Website2) {
        // Write code here that turns the phrase above into concrete actions
        driver.navigate().to(SecondSite);
        Assert.assertTrue(driver.getTitle().contains(Website2));
    }

    @When("^I press back button$")
    public void i_press_back_button() {
        // Write code here that turns the phrase above into concrete actions
        driver.navigate().back();
//      driver.wait(25);
    }

    @Then("^I am on \"([^\"]*)\"$")
    public void i_am_on(String Website) {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(driver.getTitle().contains(Website));
    }

    @Then("^when I press forward button$")
    public void when_I_press_forward_button() {
        // Write code here that turns the phrase above into concrete actions
        driver.navigate().forward();
    }

    @Then("^I can see the \"([^\"]*)\" on page title$")
    public void i_can_see_the_on_page_title(String Website2) {
        // Write code here that turns the phrase above into concrete actions

        Assert.assertTrue(driver.getTitle().contains(Website2));
    }

    @Then("^when I press the refresh button$")
    public void when_I_press_the_refresh_button() {
        // Write code here that turns the phrase above into concrete actions
        driver.navigate().refresh();
    }

    @Then("^also I am on \"([^\"]*)\" page$")
    public void also_I_am_on_page(String Website2) {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(driver.getTitle().contains(Website2));
        driver.close();
    }


}
