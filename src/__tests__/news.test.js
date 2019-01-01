import C from "../actions/constant"
import { news } from "../reducers/index"

describe("news reducer", () => {
    it("should request news", () => {
        const state = {isFetching: false}
        const action = {
            type: C.REQUEST_NEWS,
            isFetching: true
        }
        const results = news(state, action)
        expect(results).toEqual({
            isFetching: true
        })
    })
})