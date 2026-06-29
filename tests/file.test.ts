import{test,expect} from "@playwright/test"

test("Upload file", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download");
    const upload = page.locator("#uploadFile");
    upload.setInputFiles("C:\Users\Krishnaprasath\Downloads\Sequence.pdf");
    const res= await expect(page.locator("//p[@id='uploadedFilePath']")).toHaveText("C:\Users\Krishnaprasath\Downloads\Sequence.pdf");
    console.log(res);
});

test("download file", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download");
    const prom = page.waitForEvent('download');
    const downbtn = await page.locator("//a[@id='downloadButton']")
    downbtn.click({button:"left"});
    const download = await prom;
    console.log(await download.suggestedFilename());
})