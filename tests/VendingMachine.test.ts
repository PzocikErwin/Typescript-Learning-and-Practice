import { VendingMachine } from '../src/VendingMachine';

describe('VendingMachine', () => {
    test('al inicializar la maquina esta empieza con 0 de credito', () => {
        const machine = new VendingMachine();
        expect(machine.getCurrentCredit()).toBe(0);
    });
});
