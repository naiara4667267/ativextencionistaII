function calcularDesconto() {
    const peso = parseFloat(document.getElementById('peso').value);
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(peso) || isNaN(valorCompra) || peso < 0 || valorCompra < 0) {
      resultado.innerHTML = "<span style='color: red;'>Por favor, insira valores válidos.</span>";
      return;
    }
  
    let descontoPercentual = 0;
  
    if (peso > 5) {
      descontoPercentual = 20;
    } else if (peso > 3) {
      descontoPercentual = 15;
    } else if (peso > 1) {
      descontoPercentual = 10;
    } else if (peso > 0) {
      descontoPercentual = 5;
    }
  
    const valorDesconto = (descontoPercentual / 100) * valorCompra;
    const valorFinal = valorCompra - valorDesconto;
  
    resultado.innerHTML = `
      <p>Desconto aplicado: <strong>${descontoPercentual}%</strong></p>
      <p>Valor do desconto: <strong>R$ ${valorDesconto.toFixed(2)}</strong></p>
      <p>Valor final da compra: <strong>R$ ${valorFinal.toFixed(2)}</strong></p>
    `;
  }
  
