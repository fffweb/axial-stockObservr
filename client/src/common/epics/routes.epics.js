import { Observable } from 'rxjs';

import PortfoliosActions from 'client/src/common/actions/portfolios.actions'
import PortfoliosService from 'client/src/common/services/portfolios.service';

// Fetches the portfolio details when entering the portfolio details route 
export const stateChangeFetchPortfolioDetailsEpic = action$ =>
    action$.ofType("@@reduxUiRouter/$stateChangeStart")
        .filter(action => action.payload.toState.name === 'app.portfolios.details')
        .mergeMap(action =>
            PortfoliosService
                .fetchPortfolioDetails(action.payload.toParams.id)
                .map(PortfoliosActions.requestPortfolioDetailsFulfilled)
        );