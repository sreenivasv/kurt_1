import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class Utils extends DriverManager {
    public static void enterText(By by, String text) {
        driver.findElement(by).clear();
        driver.findElement(by).sendKeys(text);
    }

    public static String get_Text(By by) {
        return driver.findElement(by).getText();
    }
    public static String randomdate () {
        DateFormat format = new SimpleDateFormat("ddMMMyyHHmmss");
        return format.format(new Date());}

    public static void clickOnElement(By by) {
        driver.findElement(by).click();
    }

    public static void selectElementByValue(By by, String text) {
        Select select = new Select(driver.findElement(by));
        select.selectByValue(text);

    }

    public static void selectElementByVisibletext(By by, String text) {
        Select select = new Select(driver.findElement(by));
        select.selectByVisibleText(text);

    }

    public static void selectElementByIndex(By by, int integer) {
        Select select = new Select(driver.findElement(by));
        select.selectByIndex(integer);
    }

    public static void webDriverWaitImplicitly(int time) {
        driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
    }

    public static void webDriverWaitExplicitly(By by, int time) {
        WebDriverWait explicitlyWait = new WebDriverWait(driver, time);
        explicitlyWait.until(ExpectedConditions.visibilityOfElementLocated(by));
    }

    public static void waitUntil_ElementClickable(By by, int time) {
        WebDriverWait explicitlyWait = new WebDriverWait(driver, time);
        explicitlyWait.until(ExpectedConditions.elementToBeClickable(by));
    }

    public static boolean isTextPresent(String text) {
        return driver.findElement(By.tagName("body")).getText().contains(text);
    }

    public static boolean isElementpresent(By by) {
        return driver.findElement(by).isDisplayed();
    }

    public static void captureScreenShot() {

        File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {

            FileUtils.copyFile(src, new File("C:\\Binni's Project\\Maven_Project\\src\\Screenshot" + System.currentTimeMillis() + ".png"));
        } catch (IOException e) {
            e.getMessage();
        }


    }
}
