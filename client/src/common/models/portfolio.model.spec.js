import { Portfolio } from './portfolio.model';

describe('Portfolio', () => {
    it('should set the properties with provided values', () => {
        let portfolio = new Portfolio(5, 'Tech', '453.54', '43.54', '345.44', '.34');
        expect(portfolio.id).toBe(5);
        expect(portfolio.name).toBe('Bilbo');
        expect(portfolio.value).toBe('453.54');
        expect(portfolio.change).toBe('43.54');
        expect(portfolio.cost).toBe('345.44');
        expect(portfolio.changePct).toBe('.34');
    });
});