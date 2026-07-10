import {test, expect} from '@playwright/test';

test("practice test1",async({page})=>{

    console.log("starting practice test 1");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(await page.title()).toBe("Swag Labs");
    console.log("ending practice test 1");

})

test("practice test2",async({page})=>{

    console.log("starting practice test 2");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(await page.title()).toBe("Swag Labs");
    console.log("ending practice test 2");

})

test("practice test3",async({page})=>{

    console.log("starting practice test 3");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(await page.title()).toBe("Swag Labs");
    console.log("ending practice test 3");

})

test("practice test4",async({page})=>{

    console.log("starting practice test 4");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(await page.title()).toBe("Swag Labs");
    console.log("ending practice test 4");

})

test("practice test5",async({page})=>{

    console.log("starting practice test 5");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(await page.title()).toBe("Swag Labs");
    console.log("ending practice test 5");

})

test("practice test6",async({page})=>{

    console.log("starting practice test 6");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(await page.title()).toBe("Swag Labs");
    console.log("ending practice test 6");

})

test("practice test7",async({page})=>{

    console.log("starting practice test 7");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(await page.title()).toBe("Swag Labs");
    console.log("ending practice test 7");

})