class Logger {
    static info (...messages) {
        const datetime = new Date().toISOString()
        const combinedMessages = messages.map(message => JSON.stringify(message)).join(' ')
        console.log(`LOG INFO :: ${datetime} :: ${combinedMessages}`)
    }

    static error (...messages) {
        const datetime = new Date().toISOString()
        const combinedMessages = messages.map(message => JSON.stringify(message)).join(' ')
        console.error(`LOG ERROR :: ${datetime} :: ${combinedMessages}`)
    }

    static warn (...messages) {
        const datetime = new Date().toISOString()
        const combinedMessages = messages.map(message => JSON.stringify(message)).join(' ')
        console.warn(`LOG WARNING :: ${datetime} :: ${combinedMessages}`)
    }
}

export default Logger