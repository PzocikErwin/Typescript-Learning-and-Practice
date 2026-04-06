import { VendingMachine } from '../src/VendingMachine';
import { Coin } from '../src/Coin';
import { Drinks } from '../src/Drinks';
import { Snack } from '../src/Snack';
import { InterfazDescription } from '../src/InterfazDescripcion';

describe('VendingMachine', () => {
    let machine: VendingMachine;

    beforeEach(() => {
        machine = new VendingMachine();
    });

    test('al inicializar la maquina esta empieza con 0 de credito', () => {
        // [POO - ENCAPSULAMIENTO]
        expect(machine.getCurrentCredit()).toBe(0);
    });

    test('un producto debe cumplir la interfaz de descripcion', () => {
        // [POO - INTERFAZ]
        const describable: InterfazDescription = new Snack('Papas', 1.25, 10, 50);

        expect(describable.getDescription()).toBe('Snack: Papas (50g)');
    });

    test('no se puede acceder directamente al credito interno de la maquina', () => {
        // [POO - ENCAPSULAMIENTO]
        // @ts-expect-error currentCredit es privado y debe usarse el metodo publico
        machine.currentCredit;
    });

    test('deberia anadir un producto correctamente', () => {
        // [POO - AGREGAR PRODUCTO]
        const snack = new Snack('Papas', 1.25, 10, 50);
        machine.addProduct(snack);

        const productsInMachine = machine.getProducts();

        expect(productsInMachine).toHaveLength(1);
        expect(productsInMachine).toContain(snack);
    });

    test('deberia poder anadir una bebida (que es un producto) a la maquina', () => {
        // [POO - HERENCIA]
        const drink = new Drinks('Fanta', 1.25, 5, 500, 500);
        machine.addProduct(drink);

        const productsInMachine = machine.getProducts();

        expect(productsInMachine).toHaveLength(1);
        expect(productsInMachine[0]!).toBeInstanceOf(Drinks);
        expect(productsInMachine[0]!.name).toBe('Fanta');
    });

    test('deberia devolver las descripciones correctas para diferentes tipos de productos', () => {
        // [POO - POLIMORFISMO]
        const snack = new Snack('Papas', 1.25, 10, 50);
        const drink = new Drinks('Fanta', 1.5, 5, 500, 500);
        machine.addProduct(snack);
        machine.addProduct(drink);

        const descriptions = machine.getProductsDescription();

        expect(descriptions).toEqual([
            'Snack: Papas (50g)',
            'Bebida: Fanta (500ml)',
        ]);
    });

    test('deberia acumular credito al insertar una moneda', () => {
        // [COBERTURA - METODO insertCoin]
        machine.insertCoin(new Coin(2));

        expect(machine.getCurrentCredit()).toBe(2);
    });

    test('deberia devolver el producto y descontar credito cuando alcanza', () => {
        // [COBERTURA - METODO selectProduct (escenario exitoso)]
        const snack = new Snack('Doritos', 1.5, 10, 45);
        machine.insertCoin(new Coin(2));

        const selected = machine.selectProduct(snack);

        expect(selected).toBe(snack);
        expect(machine.getCurrentCredit()).toBe(0.5);
    });

    test('deberia devolver null y no descontar credito cuando no alcanza', () => {
        // [COBERTURA - METODO selectProduct (escenario sin credito suficiente)]
        const snack = new Snack('Doritos', 1.5, 10, 45);
        machine.insertCoin(new Coin(1));

        const selected = machine.selectProduct(snack);

        expect(selected).toBeNull();
        expect(machine.getCurrentCredit()).toBe(1);
    });

    test('deberia guardar monedas agregadas y devolverlas con getCoins', () => {
        // [COBERTURA - METODOS addCoin y getCoins]
        const coin1 = new Coin(0.5);
        const coin2 = new Coin(1);
        machine.addCoin(coin1);
        machine.addCoin(coin2);

        const coinsInMachine = machine.getCoins();

        expect(coinsInMachine).toHaveLength(2);
        expect(coinsInMachine).toEqual([coin1, coin2]);
    });
});

describe('Drinks', () => {
    test('deberia crear una bebida con nombre, precio, cantidad, peso y volumen', () => {
        // [POO - HERENCIA]
        const drink = new Drinks('Coca-Cola', 1.5, 10, 500, 500);
        expect(drink.name).toBe('Coca-Cola');
        expect(drink.price).toBe(1.5);
        expect(drink.quantity).toBe(10);
        expect(drink.weight).toBe(500);
        expect(drink.volume).toBe(500);
    });
});
