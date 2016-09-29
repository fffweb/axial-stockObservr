import { Stock } from './stock.model';

describe('Stock', () => {
    it('should set the properties with provided values', () => {
        let stock = new Stock(5, 'Axial AXIA', 'AXIA', '43', '345.44');
        expect(stock.id).toBe(5);
        expect(stock.name).toBe('Axial AXIA');
        expect(stock.ticker).toBe('AXIA');
        expect(stock.qty).toBe('43');
        expect(stock.price).toBe('345.44');
    });
});