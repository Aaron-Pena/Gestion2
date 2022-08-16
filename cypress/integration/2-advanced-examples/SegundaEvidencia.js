describe("Segunda practica ",function(){
//entrar a la pagina
  
it('Encontrar y agregar una camisa desde la pagina de inicio', function(){
     cy.visit("acid.com.mx") 
//conseguir contenedor
cy.get('.grid-row-collection > .widget-product > .products-grid > .slick-list > .slick-track').as('Camisas')
cy.get('@Camisas')
        .find('.product-name')
        .each(($el,index, $list) => {
            cy.get('@Camisas').eq(index).find('.price').then(function($el1){
                let precio = $el1.text()
                cy.log(precio)
            
            if($el.attr('title') === 'Playera ' && precio.includes('299.00')){
                cy.log('Se ha encontrado el elemento buscado')
                cy.log('Se ha encontrado el precio buscado')
                cy.get('@Camisas').eq(index).contains('Add to cart').click()
            }
        })
        
    })
})
it('Verificar el dropdown y comprobar que los elementos existan.',function(){

    })

})