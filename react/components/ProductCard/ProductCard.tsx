import React from 'react';
import { Product } from '../../typings/product'; // Reutilize a interface 'Product'

// 1. Defina a interface de props que o componente espera
interface ProductCardProps {
    product: Product;
}

// 2. Componente Funcional (de Apresentação)
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    
    // 3. Extraia e trate os dados complexos AQUI
    const imageUrl = product.items?.[0]?.images?.[0]?.imageUrl;
    const price = product.items?.[0]?.sellers?.[0]?.commertialOffer?.Price;

    // Lógica de proteção: o card não renderiza se o preço não existir
    if (price === undefined) {
        return null;
    }

    // 4. Retorne a estrutura visual limpa
    return (
        <div className="product__card">
            <img 
                className="product__card__img" 
                src={imageUrl} 
                alt={`Imagem do produto ${product.productName}`} 
            />
            <div className="product__card__info">
                <h1>{product.productName}</h1>
                {/* Formata o preço */}
                <p>{`R$${price.toFixed(2)}`}</p>
            </div>
        </div>
    );
};

export default ProductCard;