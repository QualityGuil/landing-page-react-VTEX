export function validarDocumento(doc: string): boolean {
    // Limpa o documento
    const docLimpo = doc.replace(/\D/g, '');

    // Verifica se é CPF
    if (docLimpo.length === 11) {

        const proximoDigitoVerificador = (docIncompleto: string) => {

            let somatorio = 0;

            for (let i = 0; i < docIncompleto.length; i++) {
                let digitoAtual = docIncompleto.charAt(i);
                let constate = docIncompleto.length + 1 - i;
                somatorio += parseInt(digitoAtual) * constate;
            }

            const resto = somatorio % 11;

            return resto < 2 ? "0" : (11 - resto).toString();
        }

        const primeiroDigitoVerificador: string = proximoDigitoVerificador(docLimpo.substring(0, 9));
        const segundoDigitoVerificador: string = proximoDigitoVerificador(docLimpo.substring(0, 9) + primeiroDigitoVerificador);
        const docCorreto = docLimpo.substring(0, 9) + primeiroDigitoVerificador + segundoDigitoVerificador

        if (docLimpo != docCorreto) {
            console.log(`documento correto: ${docCorreto} \ndocumento inserido: ${docLimpo}`)
            return false
        }
        
        return true;
    }

    // Verifica se é CNPJ
    if (docLimpo.length === 14) {
        if (/^(\d)\1+$/.test(docLimpo)) return false;

        // Calcula primeiro dígito
        let soma = 0;
        let peso = 5;
        for (let i = 0; i < 12; i++) {
            soma += parseInt(docLimpo[i]) * peso;
            peso = (peso === 2) ? 9 : peso - 1;
        }
        let digito1 = soma % 11;
        digito1 = digito1 < 2 ? 0 : 11 - digito1;
        if (digito1 !== parseInt(docLimpo[12])) return false;

        // Calcula segundo dígito
        soma = 0;
        peso = 6;
        for (let i = 0; i < 13; i++) {
            soma += parseInt(docLimpo[i]) * peso;
            peso = (peso === 2) ? 9 : peso - 1;
        }
        let digito2 = soma % 11;
        digito2 = digito2 < 2 ? 0 : 11 - digito2;
        if (digito2 !== parseInt(docLimpo[13])) return false;

        return true;
    }

    return false;
}

// Função para validar e mostrar alerta
export function validarEAlertar(doc: string): void {
    if (validarDocumento(doc)) {
        alert('✅ Documento válido!');
    } else {
        alert('❌ Documento inválido!');
    }
}