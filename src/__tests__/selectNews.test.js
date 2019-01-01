import C from "../actions/constant"
import { selectNews } from "../reducers/index"

describe("selectNews reducer", () => {
    it("select news", () => {
        const state = {category: "general"}
        const action = {
            type: C.SELECT_NEWS,
            category: "science"
        }
        const results = selectNews(state, action)
        expect(results).toEqual({
            category: "science"
        })
    })
})