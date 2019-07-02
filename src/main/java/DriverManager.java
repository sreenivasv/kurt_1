import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import java.util.concurrent.TimeUnit;

public class DriverManager {

    protected static WebDriver driver;
//    static LoadProps loadProps = new LoadProps();

    public static void openBrowser (){
        String browser = LoadProps.getProperty("browser");
        if (browser.equalsIgnoreCase("Chrome")){
            System.setProperty("webdriver.chrome.driver","src\\test\\Resources\\Drivers\\chromedriver.exe");
            driver=new ChromeDriver();
        }
        else if((browser.equalsIgnoreCase("IE"))){

            System.setProperty("webdriver.ie.driver", "src\\test\\Resources\\Drivers\\IEDriverServer.exe");
            driver=new InternetExplorerDriver();

        }
        else {
            driver = new FirefoxDriver();}

        driver.get(LoadProps.getProperty("url"));
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);


    }

    public static void closeBrowser(){
        driver.quit();
    }
}
