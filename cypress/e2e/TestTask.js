///<reference types="Cypress" />

describe("Login test on saucedemo.com", () => {
  it("Should log in successfully with valid credentials", () => {
    cy.visit("https://www.saucedemo.com");

    // Ввод логина
    cy.get('[data-test="username"]').type("standard_user");

    // Ввод пароля
    cy.get('[data-test="password"]').type("secret_sauce");

    // Клик по кнопке логина
    cy.get('[data-test="login-button"]').click();

    // Проверка, что вход выполнен — по URL или заголовку
    cy.url().should("include", "/inventory.html");

    // Альтернативная проверка — убедимся, что отображаются товары
    cy.get(".inventory_item").should("have.length.greaterThan", 0);
  });
});