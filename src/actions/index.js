export const ON_OVER = 'ON_OVER'
export const ON_OUT = 'ON_OUT'

export const onOver = () => ({
    type: "ON_OVER",
    payload: true
})

export const onOut = () => ({
    type: "ON_OUT",
    payload: false
})