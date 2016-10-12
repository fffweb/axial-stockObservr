// Calculate Stock Change values based on the price paid and last price of a stock
export const computeStockChanges = stocks => 
    stocks.map((s) => ({
        id: s.id,
        stockId: s.stockId,
        qty: s.qty,
        price: s.price,
        last: s.last,
        change: s.qty * (s.last - s.price),
        value: s.qty * s.last,
        cost: s.qty * s.price,
        changePct: ((s.last - s.price) / s.price) * 100
    }));

// Calculate Portfolio financials based on the stocks it contains
export const computePortfolioFinancials = stocks  => 
    computeStockChanges(stocks)
        .reduce((prev, curr) => ({
            value: prev.value + curr.value,
            change: prev.change + curr.change,
            cost: prev.cost + curr.cost,
            changePct: (((prev.value + curr.value) - (prev.cost + curr.cost)) / (prev.cost + curr.cost)) * 100
        }));