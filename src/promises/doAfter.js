
 const doAfter = (timer) => {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = Math.random()
            if (value > 0.5) {
                resolve(value)
            }   else {
                reject(value)
            }
        }, timer * 1000)
    })
    return pr
}