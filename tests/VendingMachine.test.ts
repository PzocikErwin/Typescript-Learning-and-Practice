import { VendingMachine } from '../src/VendingMachine';
import { Product } from '../src/Product';
import { Coin } from '../src/Coin';
import { Drinks } from '../src/Drinks';
import { Snack } from '../src/Snack';

describe('VendingMachine', () => {
    
    let machine: VendingMachine;

    beforeEach(() => {
        machine = new VendingMachine();
    });
        // [POO - Encapsulamiento]
    test('al inicializar la maquina esta empieza con 0 de credito', () => {
        expect(machine.getCurrentCredit()).toBe(0);
    });

    test('no se puede acceder directamente al credito interno de la maquina', () => {
        // @ts-expect-error currentCredit es privado y debe usarse el metodo publico
        expect(machine.currentCredit).toBeUndefined();
    });

    test('debería añadir un producto correctamente', () => {
        const snack = new Snack("Papas", 1.25, 10, 50);
        machine.addProduct(snack);
        
        const productsInMachine = machine.getProducts();
        
        expect(productsInMachine).toHaveLength(1);
        expect(productsInMachine).toContain(snack);
    });

    test('debería poder añadir una bebida (que es un producto) a la maquina', () => {
        // [POO - Herencia]
        const drink = new Drinks('Fanta', 1.25, 5, 500, 500);
        machine.addProduct(drink);

        const productsInMachine = machine.getProducts();

        expect(productsInMachine).toHaveLength(1);
        expect(productsInMachine[0]!).toBeInstanceOf(Drinks);
        expect(productsInMachine[0]!.name).toBe('Fanta');
    });

    test('debería devolver las descripciones correctas para diferentes tipos de productos (polimorfismo)', () => {
        // [POO - Polimorfismo]
        const snack = new Snack("Papas", 1.25, 10, 50);
        const drink = new Drinks('Fanta', 1.50, 5, 500, 500);
        machine.addProduct(snack);
        machine.addProduct(drink);

        const descriptions = machine.getProductsDescription();

        expect(descriptions).toEqual([
            'Snack: Papas (50g)',
            'Bebida: Fanta (500ml)'
        ]);
    });
});

describe('Drinks', () => {
    test('debería crear una bebida con nombre, precio, cantidad, peso y volumen', () => {
        // [POO - Herencia]
        const drink = new Drinks('Coca-Cola', 1.5, 10, 500, 500);
        expect(drink.name).toBe('Coca-Cola');
        expect(drink.price).toBe(1.5);
        expect(drink.quantity).toBe(10);
        expect(drink.weight).toBe(500);
        expect(drink.volume).toBe(500);
    });
});