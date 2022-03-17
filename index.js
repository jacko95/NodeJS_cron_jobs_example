const schedule = require('node-schedule')

//esegui job ad un determinato orario
const someDate = new Date('2021-12-02T01:52:00.000+5:30')//italia = UTC+1
schedule.scheduleJob(someDate, ( ) => {
    console.log('job eseguito alle ', new Date().toString())
})

//esegui job ad intervalli regolari con la sintassi cron job nel sito crontab guru ad esempio
schedule.scheduleJob('mmm', '*/2 * * * * *', ( ) => {
    console.log('job eseguito alle ', new Date().toString())

    //canceljobs
    schedule.cancelJob('mmm')
    process.exit()
})

const mJob = schedule.scheduleJob('*/2 * * * * *', ( ) => {
    console.log('job eseguito alle ', new Date().toString())

    //canceljobs
    mJob.cancel
    process.exit()
})

// con questa libreria oltre i valori in crontab guru c'è anche la colonna opzionale dei secondi
// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)

