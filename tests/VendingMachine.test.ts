import { VendingMachine } from '../src/VendingMachine';
import { Product } from '../src/Product';
import { Coin } from '../src/Coin';
import { Drinks } from '../src/Drinks';

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

    test('debería poder añadir una bebida (que es un producto) a la maquina', () => {
        const drink = new Drinks('Fanta', 1.25, 5, 500, 500);
        machine.addProduct(drink);

        const productsInMachine = machine.getProducts();

        expect(productsInMachine).toHaveLength(1);
        expect(productsInMachine[0]).toBeInstanceOf(Drinks);
        expect(productsInMachine[0].name).toBe('Fanta');
    });
});

describe('Drinks', () => {
    test('debería crear una bebida con nombre, precio, cantidad, peso y volumen', () => {
        const drink = new Drinks('Coca-Cola', 1.5, 10, 500, 500);
        expect(drink.name).toBe('Coca-Cola');
        expect(drink.price).toBe(1.5);
        expect(drink.quantity).toBe(10);
        expect(drink.weight).toBe(500);
        expect(drink.volume).toBe(500);
    });
});