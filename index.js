const { calcularTotal } = require("./carrinho");

console.log("=== EXECUTANDO TESTES MANUAIS (CAIXA PRETA) ===");

// CT-01: FRETE GRATIS NA BORDA (Subtotal = 100 esperado 100)
try {
    const res1 =calcularTotal([{ preco: 100, quantidade: 1 }], "null");
    console.log("CT-01 - EXP: 100, Resultado:", res1);
} catch (error) {
    console.error("CT-01 - Erro:", error.message);
}

// CT-02: CUPOM DE DESCONTO 10%
try {
    const res2 = calcularTotal([{ preco: 50, quantidade: 1 }], "PROMO10");
    console.log("CT-02 - EXP: 45, Resultado:", res2);
} catch (error) {
    console.error("CT-02 - Erro:", error.message);
}

// CT-03: Quantidade Negativa (Subtotal = -100, erro esperado)
try {
    const res3 = calcularTotal([{ preco: 100, quantidade: -1 }], "null");
    console.log("CT-03 - EXP: Erro, Resultado:", res3);
} catch (error) {
    console.error("CT-03 - Erro:", error.message);
}


// CT-04: Arredondamento Negativa (Subtotal = 33,33333, frete = 0, esperado 48.3333)
try {
    const res4 = calcularTotal([{ preco: 10, quantidade: 3.333 }], "null");
    console.log("CT-04 - EXP: 48.33, Resultado:", res4);
} catch (error) {
    console.error("CT-04 - Erro:", error.message);
}


// CT-05: Carrinho Vazio (Subtotal = 0, erro esperado: carrinho invalido)
try {
    const res5 = calcularTotal([], "null");
    console.log("CT-05 - EXP: Erro, Resultado:", res5);
} catch (error) {
    console.error("CT-05 - Erro:", error.message);
}

// CT-06: Frete Pago ( subtotal =  <100)
try {
    const res6 = calcularTotal([{ preco: 80, quantidade: 1 }], "null");
    console.log("CT-06 - EXP: 95, Resultado:", res6);
} catch (error) {
    console.error("CT-06 - Erro:", error.message);
}