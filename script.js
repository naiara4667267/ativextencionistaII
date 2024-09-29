function calculateDiscount() {
    const weight = parseFloat(document.getElementById('weight').value);
    const price = parseFloat(document.getElementById('price').value);
    
    if (isNaN(weight) || isNaN(price) || weight < 0 || price < 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Calcular desconto com base no peso
    let discount = 0;
    if (weight >= 1000) {
        discount = 0.30; // 30% de desconto para 1000 gramas ou mais
    } else if (weight >= 500) {
        discount = 0.20; // 20% de desconto para 500 a 999 gramas
    } else if (weight >= 100) {
        discount = 0.10; // 10% de desconto para 100 a 499 gramas
    }

    // Aplicar o desconto
    const discountAmount = price * discount;
    const finalPrice = price - discountAmount;

    // Atualizar a UI com o resultado
    document.getElementById('discountAmount').textContent = `Desconto: R$${discountAmount.toFixed(2)}`;
    document.getElementById('finalPrice').textContent = `Preço final: R$${finalPrice.toFixed(2)}`;
}
