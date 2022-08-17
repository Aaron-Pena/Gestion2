describe("Segunda practica ",function(){
//entrar a la pagina
  
it('Encontrar y agregar una camisa desde la pagina de inicio', function(){
     cy.visit("acid.com.mx") 
//conseguir contenedor
cy.get('#featured-products-165661793050c01cd4 > .container > :nth-child(1) > .grid-row-collection > .widget-product > .products-grid').as('Camisas')
cy.get('@Camisas')

        .find('.product-title')
        .each(($el,index, $list) => {
            cy.get('@Camisas').find('.price-box').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)
        //////////////////////
            if($el.attr('.product-bottom') === 'Playera Nanana Anya ' && precio.includes('299.00')){
                cy.log('Se ha encontrado el elemento buscado')
                cy.log('Se ha encontrado el precio buscado')
                
                cy.get('@Camisas').eq(index).contains('Agregar +').click()
            }
        })
        
    })

    //cy.get('#acid-pop > div.ajax-success-normal.ajax-success-modal.halo-modal').should('contain.text','se agrega a tu carrito.').should('be.visible')
})
it('Verificar el dropdown y comprobar que los elementos existan.',function(){

    })

})