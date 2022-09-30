
 const doAfter = (timer) => {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timer * 1000)
    })
    return pr
}