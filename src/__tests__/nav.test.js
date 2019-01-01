import C from "../actions/constant"
import { nav } from "../reducers/index"

describe("nav reducer", () => {
    it("should full on over", () => {
        const state = {fullNav: false}
        const action = {
            type: C.ON_OVER,
            payload: true
        }
        const results = nav(state, action)
        expect(results).toEqual({
            fullNav: true
        })
    })
    it("should half on out", () => {
        const state = {fullNav: false}
        const action = {
            type: C.ON_OUT,
            payload: false
        }
        const results = nav(state, action)
        expect(results).toEqual({
            fullNav: false
        })
    })
})