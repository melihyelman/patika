import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const cryptoSlice = createSlice({
    name: 'crypto',
    initialState: {
        data: [],
        page: 1,
        loading: false,
        current: null,
        error: null,
        interval: { label: "1D", value: 1 },
        type: { label: "Prices", value: "prices" },
    },
    reducers: {
        getCrypto: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.loading = !state.loading
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setCurrent: (state, action) => {
            state.current = action.payload
            state.loading = false;
            state.error = null
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        changeCurrentStatistic: (state, action) => {
            state.current.prices = action.payload.prices
            state.current.market_caps = action.payload.market_caps
            state.loading = false;
            state.error = null
        },
        changeInterval: (state, action) => {
            state.interval = action.payload
            state.loading = false;
            state.error = null
        },
        changeType: (state, action) => {
            state.type = action.payload
            state.loading = false;
            state.error = null
        }
    },
});

export const getAllCryptoAsync = (page) => async (dispatch) => {
    try {
        dispatch(setLoading())
        const { data } = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
        dispatch(getCrypto(data))
    } catch (err) {
        dispatch(setError(err.message))
        dispatch(setLoading())
    }
}

export const getSingleCryptoAsync = (id) => async (dispatch) => {
    try {
        dispatch(setLoading())
        const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${id}`)
        const { data: statistic } = await axios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`)
        data.prices = statistic.prices
        data.market_caps = statistic.market_caps
        dispatch(setCurrent(data))
    } catch (err) {
        dispatch(setError(err.message))
        dispatch(setLoading())
    }
}

export const getSingleCryptoStaticAsync = (id, days = 1) => async (dispatch) => {
    try {
        dispatch(setLoading())
        const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`)
        console.log(data)
        dispatch(changeCurrentStatistic(data))
    } catch (err) {
        dispatch(setError(err.message))
        dispatch(setLoading())
    }
}
export const { getCrypto, changeType, changeInterval, setLoading, setError, setPage, setCurrent, changeCurrentStatistic } = cryptoSlice.actions;


export default cryptoSlice.reducer;