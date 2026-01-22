import { PricingBreakdown } from '../types';

/**
 * Calcula el descuento por repetición basado en el número de copia
 * 2ª copia: -20%
 * 3ª copia: -30%
 * 4ª copia: -40%
 * 5+ copia: -50%
 */
export function getDiscountPercentage(copyNumber: number): number {
  if (copyNumber === 1) return 0;
  if (copyNumber === 2) return 20;
  if (copyNumber === 3) return 30;
  if (copyNumber === 4) return 40;
  return 50; // 5+ copias
}

/**
 * Calcula el precio de una copia específica
 */
export function getPriceForCopy(basePrice: number, copyNumber: number): number {
  const discount = getDiscountPercentage(copyNumber);
  const discountAmount = (basePrice * discount) / 100;
  return Math.floor(basePrice - discountAmount);
}

/**
 * Calcula el desglose completo de precios para una cantidad
 */
export function calculatePricing(basePrice: number, quantity: number): PricingBreakdown {
  const breakdown = [];
  let total = 0;

  for (let i = 1; i <= quantity; i++) {
    const discount = getDiscountPercentage(i);
    const price = getPriceForCopy(basePrice, i);
    breakdown.push({ copy: i, price, discount });
    total += price;
  }

  return {
    quantity,
    unitPrice: basePrice,
    discount: quantity > 1 ? getDiscountPercentage(quantity) : 0,
    total,
    breakdown
  };
}

/**
 * Formatea el texto de ejemplos de descuento para mostrar en tarjetas
 */
export function getDiscountExamples(basePrice: number): string {
  const examples = [
    `${basePrice} pts`,
    `2ª −20% = ${getPriceForCopy(basePrice, 2)}`,
    `3ª −30% = ${getPriceForCopy(basePrice, 3)}`,
    `4ª −40% = ${getPriceForCopy(basePrice, 4)}`,
    `5+ −50% = ${getPriceForCopy(basePrice, 5)}`
  ];
  return examples.join(' · ');
}
