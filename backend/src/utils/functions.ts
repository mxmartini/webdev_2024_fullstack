export function b64encode(texto){
    
    return texto 
        ? Buffer.from(texto).toString('base64')
        : "";
}

export function b64decode(textoCodificado){
    
    return textoCodificado 
        ? Buffer.from(textoCodificado, 'base64').toString('utf8') 
        : "";
}