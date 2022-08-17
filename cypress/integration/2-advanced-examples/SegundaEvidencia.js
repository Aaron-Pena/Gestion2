describe("Segunda evidencia ", function () {
  
/*
  it("Encontrar y agregar una algo al carrito de compra", function () {
      //ingresamos a la pagina
      cy.visit("https://www.amazon.com/");
//Conseguimos el contenedor de articulos
      cy.get("#desktop-grid-2").as("Categorias");
      cy.get("@Categorias").find(".grid-row-1 > .quadrant-container-0").click();
  
      cy.get(
        "._octopus-search-result-card_style_apbSearchResultsContainer__bCqjb > :nth-child(2)"
      ).as("Producto");
      cy.get("@Producto")
        .find(".s-card-container")
  
        .each(($el, index, $list) => {
          if (
            //buscamos el articulo por su nombre
            $el.attr("title") ===
            "HP DeskJet 2755e Wireless Color All-in-One Printer with bonus 6 months Instant Ink with HP+ (26K67A), white"
          ) {
            cy.log("Se ha encontrado el elemento buscado");
          }
          cy.get("@Producto").click();
          cy.get("#wishListMainButton > .a-button-inner > .a-button-text").as(
            "Carrito"
          );
          //lo agregamos al carrito de compras
          cy.get("@Carrito").click();

        });
    });*/

  it("Verificar el dropdown y comprobar que los elementos existan.", function () {
    cy.visit("https://www.amazon.com/");
    cy.get('#nav-flyout-accountList').invoke('attr', 'style','display: block')
    //cy.get('a[nav-title^="Your Lists"]').should('be.visible')
    //cy.get('a[nav-al-title="Your Account"]').should('be.visible')
    cy.get('a[nav-text^="Create a List"]').should('be.visible')
    cy.get('a[nav-text="Find a List or Registry"]').should('be.visible')
    cy.get('a[nav-text="AmazonSmile Charity Lists"]').should('be.visible')
    cy.get('a[nav-text="Your Account"]').should('be.visible')
    cy.get('a[nav-text="Account"]').should('be.visible')
    cy.get('a[nav-text="Orders"]').should('be.visible')
    cy.get('a[nav-text="Recommendations"]').should('be.visible')
    cy.get('a[nav-text="Browsing History"]').should('be.visible')
    cy.get('a[nav-text="Watchlist"]').should('be.visible')
    cy.get('a[nav-text="Video Purchases & Rentals"]').should('be.visible')
    cy.get('a[nav-text="Kindle Unlimited"]').should('be.visible')
    cy.get('a[nav-text="Content & Devices"]').should('be.visible')
    cy.get('a[nav-text="Subscribe & Save Items"]').should('be.visible')
    cy.get('a[nav-text="Memberships & Subscriptions"]').should('be.visible')
    cy.get('a[nav-text="Music Library"]').should('be.visible')
  });
});
