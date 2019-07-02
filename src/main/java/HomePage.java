import org.openqa.selenium.By;

public class HomePage extends DriverManager{
    By catMen = By.xpath("//div[@id='top-nav']/ul/li[5]/div/a/span");
    By clrfltr = By.xpath("//*[@id=\"kg_kgmen_kgmenshoes\"]/a");
    By pageTitle = By.xpath("//*[@id=\"top\"]/body/div[1]/div/div[5]/div/div[2]/div/div/div/h1");
    By navColor = By.id("blue");
    By navSize = By.id("40");
    By product = By.xpath("//li[@id='social_proof_plp_2365884979']/a/img");
    By chooseSize = By.xpath("//li[@id='693783']/span/span");
    By addCartBtn = By.id("add-to-cart-ss17");
    By getTextofBag = By.xpath("//div[@id='topCartContent']/div/h2");
    By goToBag = By.xpath("//*[@id=\"go-to-cart-ss17\"]");
    By checkOutBtn = By.id("btn-proceed-checkout");
    By checkOutPageTitle = By.xpath("//*[@id=\"top\"]/div[1]/h2/");
    By guestBtn = By.xpath("//*[@id=\"co-register-guest-form\"]/div/button/span/span");

}
