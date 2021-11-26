export class BaseLogger {
    log(data) {

        console.log(data + " datası default a loglandı");
    }
}

export class FireBaseLogger extends BaseLogger {
    log(data) {

        console.log(data + " datası firebase e loglandı");
    }
}

export class ElasticLogger extends BaseLogger {
    log(data) {

        console.log(data + " datası elastic e loglandı");
    }
}