import { VendingMachine } from '../src/VendingMachine';
import { Product } from '../src/Product';
import { Coin } from '../src/Coin';

describe('VendingMachine', () => {
    
    let machine: VendingMachine;

    beforeEach(() => {
        machine = new VendingMachine();
    });

    test('al inicializar la maquina esta empieza con 0 de credito', () => {
        expect(machine.getCurrentCredit()).toBe(0);
    });

    test('debería añadir un producto correctamente', () => {
        const product = new Product("Coca-Cola", 150, 10, 500);
        machine.addProduct(product);
        
        const productsInMachine = machine.getProducts();
        
        expect(productsInMachine).toHaveLength(1);
        expect(productsInMachine).toContain(product);
    });
});