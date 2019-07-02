import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class checkOutSteps extends DriverManager {
    HomePage homePage = new HomePage();
    @Given("^I select men category from the header$")
    public void i_select_men_category_from_the_header() throws Throwable {
       DriverManager.openBrowser();
       Utils.clickOnElement(homePage.catMen);
       Utils.clickOnElement(homePage.clrfltr);
        throw new PendingException();
    }

    @Given("^I am on PDP$")
    public void i_am_on_PDP() throws Throwable {
        Assert.assertEquals("Men's Footwear",Utils.get_Text(homePage.pageTitle));
        throw new PendingException();
    }

    @When("^I select any colour and size for the chosen men category$")
    public void i_select_any_colour_and_size_for_the_chosen_men_category() throws Throwable {
       Utils.clickOnElement(homePage.navColor);
       Utils.clickOnElement(homePage.navSize);
       Utils.webDriverWaitImplicitly(5);
        throw new PendingException();
    }

    @When("^I add the product to the bag$")
    public void i_add_the_product_to_the_bag() throws Throwable {
       Utils.clickOnElement(homePage.product);
       Utils.clickOnElement(homePage.chooseSize);
       Utils.clickOnElement(homePage.addCartBtn);
        throw new PendingException();
    }

    @Then("^I can see the bag with single item$")
    public void i_can_see_the_bag_with_single_item() throws Throwable {
        //get text of bag header
        String actualText = Utils.get_Text(homePage.getTextofBag);
        //compare with contain text
       Assert.assertTrue(actualText.contains("1 Item"));
        throw new PendingException();
    }

    @Then("^I click 'Proceed to Checkout'$")
    public void i_click_Proceed_to_Checkout() throws Throwable {
        Utils.clickOnElement(homePage.goToBag);
        Utils.clickOnElement(homePage.checkOutBtn);

        throw new PendingException();
    }

    @Then("^I should be on checkout page$")
    public void i_should_be_on_checkout_page() throws Throwable {
        String checkOutTitle = Utils.get_Text(homePage.checkOutPageTitle);
        Assert.assertTrue(checkOutTitle.contains("Checkout"));
        throw new PendingException();
    }

    @Given("^I checkout as a guest$")
    public void i_checkout_as_a_guest() throws Throwable {
        Utils.clickOnElement(homePage.guestBtn);
        throw new PendingException();
    }

    @When("^I enter all the billing and delivery details$")
    public void i_enter_all_the_billing_and_delivery_details() throws Throwable {

        throw new PendingException();
    }

    @When("^I click 'Continue to Payment'$")
    public void i_click_Continue_to_Payment() throws Throwable {

        throw new PendingException();
    }

    @Then("^I should be on the payment summary page$")
    public void i_should_be_on_the_payment_summary_page() throws Throwable {

        throw new PendingException();
    }

    @When("^I select to pay by card$")
    public void i_select_to_pay_by_card() throws Throwable {

        throw new PendingException();
    }

    @And("^I enter credit card no with expiry date$")
    public void iEnterCreditCardNoWithExpiryDate() throws Throwable {

        throw new PendingException();
    }

    @And("^I enter CVC code$")
    public void iEnterCVCCode() throws Throwable {

        throw new PendingException();
    }

    @Then("^I should see \"Your card number has failed our validity checks and appears to be incorrect\\. Please check and re-enter\\.”$")
    public void i_should_see_Your_card_number_has_failed_our_validity_checks_and_appears_to_be_incorrect_Please_check_and_re_enter() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }



}
